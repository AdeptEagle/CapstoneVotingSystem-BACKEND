// Auto-sync Node.js Script
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AutoSync {
    constructor() {
        this.syncFiles = [
            'README.md',
            'docs/PROJECT_DOCUMENTATION.md',
            'docs/API_DOCUMENTATION.md'
        ];
        this.frontendPath = process.env.FRONTEND_PATH || '../CapstoneVotingSystem-Frontend';
    }

    // Check if sync is needed
    checkSyncNeeded() {
        try {
            // Check if any sync-required files were modified
            const changedFiles = execSync('git diff HEAD~1 --name-only', { encoding: 'utf8' });
            
            return this.syncFiles.some(file => 
                changedFiles.includes(file)
            );
        } catch (error) {
            console.log('No previous commit found - treating as sync needed');
            return true;
        }
    }

    // Get current date in required format
    getCurrentDate() {
        return new Date().toLocaleDateString('en-US', {
            month: 'short', day: 'numeric', year: 'numeric'
        });
    }

    // Auto-update frontend
    async syncToFrontend() {
        if (!fs.existsSync(this.frontendPath)) {
            console.log('⚠️ Frontend repo not found - skipping sync');
            return;
        }

        try {
            const currentDate = this.getCurrentDate();
            const frontendReadmePath = path.join(this.frontendPath, 'README.md');
            
            if (fs.existsSync(frontendReadmePath)) {
                let content = fs.readFileSync(frontendReadmePath, 'utf8');
                
                // Update backend timestamps
                content = content.replace(
                    /Backend last updated: .*/,
                    `Backend last updated: ${currentDate}`
                );
                
                // Update sync connection notes and timestamps
                content = content.replace(
                    /\*Updated: .*/,
                    `*Updated: ${currentDate}*`
                );
                
                fs.writeFileSync(frontendReadmePath, content);
                
                // Commit changes in frontend
                execSync('git add README.md', { cwd: this.frontendPath });
                execSync(`git commit -m "Auto-sync: Backend updated - ${currentDate}"`, { cwd: this.frontendPath });
                
                console.log('✅ Backend auto-synced successfully');
            }
        } catch (error) {
            console.log('❌ Backend sync failed:', error.message);
        }
    }

    // Main sync process
    async run() {
        console.log('🔄 Checking if sync needed...');
        
        if (this.checkSyncNeeded()) {
            console.log('✅ Sync needed - updating frontend...');
            await this.syncToFrontend();
        } else {
            console.log('⏭️ No sync needed - backend-only changes');
        }
    }
}

// Run auto-sync
if (require.main === module) {
    new AutoSync().run();
}

module.exports = AutoSync;

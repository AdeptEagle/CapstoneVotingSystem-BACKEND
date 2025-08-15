#!/bin/bash

# Auto-Sync Script for Local Development

echo "🔄 Checking if sync needed..."

# Files that require sync when changed
SYNC_FILES="README.md docs/PROJECT_DOCUMENTATION.md docs/API_DOCUMENTATION.md"

# Check if any sync-required files were modified
CHANGED_FILES=$(git diff HEAD~1 --name-only)
SYNC_NEEDED=false

for file in $SYNC_FILES; do
    if echo "$CHANGED_FILES" | grep -q "$file"; then
        echo "📝 $file was modified - sync required"
        SYNC_NEEDED=true
    fi
done

if [ "$SYNC_NEEDED" = false ]; then
    echo "⏭️ No sync needed - backend-only changes"
    exit 0
fi

echo "✅ Auto-syncing to frontend..."

# Get current date
CURRENT_DATE=$(date "+%b %d, %Y")

# TODO: Add your frontend repo path
FRONTEND_PATH="../CapstoneVotingSystem-Frontend"

if [ -d "$FRONTEND_PATH" ]; then
    cd "$FRONTEND_PATH"
    
    # Update frontend timestamps
    sed -i "s/Backend last updated: .*/Backend last updated: $CURRENT_DATE/" README.md
    
    git add README.md
    git commit -m "Auto-sync: Backend updated - $CURRENT_DATE"
    
    echo "✅ Backend auto-synced successfully"
else
    echo "⚠️ Frontend repo not found at $FRONTEND_PATH"
fi

echo "🔄 Auto-sync completed"

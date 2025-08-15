# SSC Election 2025 - Backend API

## Project Info
- **Repository**: CapstoneVotingSystem-BACKEND
- **Branch**: hermosa_pm_api  
- **Role**: Project Manager & Documentarian  
- **Focus**: Backend API for SSC Election 2025 Voting System
- **Frontend Repository**: https://github.com/AdeptEagle/CapstoneVotingSystem-Frontend.git
- **Frontend (Live)**: sscelection2025.vercel.app

## Frontend-Backend Connection
This backend API is specifically designed to work with the SSC Election 2025 frontend. Both repositories should be updated synchronously to maintain compatibility.

**Frontend Note**: *"This frontend connects to the Hermosa PM API backend. Make sure the backend is running and accessible."*

**Backend Note**: This API serves the deployed frontend at sscelection2025.vercel.app. Ensure CORS settings and endpoints match frontend requirements.

## Structure
```
hermosa_pm_api/
├── VotingSystem_api/     # API source code goes here
├── deployment/           # Deployment instructions
├── docs/                 # API documentation
└── README.md            # This file
```

## Core Features (Deployed System Support)
This backend API supports the deployed SSC Election 2025 voting system:

🔐 **Student Authentication System**
- Student ID/Password based login (not email)
- Secure JWT token management
- Forgot password functionality

👥 **Multi-role Access Control**
- Super Admin: Full system management
- Admin: Election oversight and monitoring  
- User: Voting and profile access

🗳️ **Election Management**
- Real-time voting capabilities
- Live results tracking and updates
- Candidate management system

📝 **Voter Registration**
- New voter registration API
- Student verification system
- Profile management

🔒 **Security & Transparency**
- Advanced encryption protocols
- Audit trails for all voting actions
- Secure data transmission

## Quick Start
1. **Add your API code** to `VotingSystem_api/` folder
2. **Deploy**: Follow `deployment/BACKEND_DEPLOYMENT.md`
3. **Test**: Verify your deployed API
4. **Document**: Update deployment URL below

## For Deployment
Your `VotingSystem_api/` folder should contain:
- Main application file (`app.js`, `server.js`, or `app.py`)
- Dependencies file (`package.json` or `requirements.txt`)
- Environment configuration

## Recommended Platform
**Render** (free tier) - Follow the deployment guide for step-by-step instructions.

## Environment Variables
```
PORT=3000
NODE_ENV=production
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret_key
CORS_ORIGIN=https://sscelection2025.vercel.app
STUDENT_ID_PATTERN=^[0-9]{8,12}$
ENCRYPTION_KEY=your_encryption_key
VOTE_START_DATE=2025-08-01
VOTE_END_DATE=2025-08-31
```

## Synchronization Guidelines
When making updates to either frontend or backend:
1. ✅ Update corresponding documentation in both repositories
2. ✅ Verify API endpoint compatibility
3. ✅ Update environment variables if needed
4. ✅ Coordinate deployment timing
5. ✅ Update timestamps in both README files

### Automated Sync (GitHub Actions)
- ✅ Automatic timestamp updates
- ✅ Cross-repository notifications
- ✅ Documentation synchronization
- 📋 Setup Guide: [docs/SYNC_AUTOMATION.md](docs/SYNC_AUTOMATION.md)

## Status
- ✅ Structure Ready
- ✅ Frontend Deployed (sscelection2025.vercel.app)
- ✅ Frontend Repository: CapstoneVotingSystem-Frontend
- ⏳ Backend API Development  
- ⏳ Backend Deployment
- ⏳ Frontend-Backend Integration Testing

## Links
- **Frontend Repository**: https://github.com/AdeptEagle/CapstoneVotingSystem-Frontend.git
- **Frontend (Live)**: https://sscelection2025.vercel.app
- **Documentation**: https://docs.google.com/document/d/1ZsaO6LUcmD7EBStYuN_miMHOyWWgq5Bgcm6hbBsldbw/edit?usp=sharing
- **Project Documentation**: [docs/PROJECT_DOCUMENTATION.md](docs/PROJECT_DOCUMENTATION.md)
- **Backend API**: [To be deployed]

## Recent Updates
- Aug 15, 2025: Added automated synchronization system
- Aug 15, 2025: Updated documentation timestamps and synchronization status
- Aug 7, 2025: Added frontend-backend synchronization guidelines
- Aug 7, 2025: Updated repository links and connection documentation

---
**Note**: This backend API connects to the CapstoneVotingSystem-Frontend. Ensure both repositories are synchronized for proper functionality.

*Updated: Aug 15, 2025*
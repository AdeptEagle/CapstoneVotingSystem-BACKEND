# Hermosa PM API - Backend System

## Project Overview
**Modern, secure backend API** for the Hermosa Project Management system. Built with scalable architecture to provide robust and efficient backend services that power the SSC Election 2025 voting system.

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

## 🔗 Project Structure
**hermosa_pm_api** (Backend) ← **Source code for backend services**
```
├── VotingSystem_api/     # Main backend application code
├── .github/              # GitHub Actions automation
├── scripts/              # Development and sync scripts
├── deployment/           # Deployment configurations
└── docs/                 # Backend API documentation
```

**Frontend Connection**: [CapstoneVotingSystem-Frontend](https://github.com/AdeptEagle/CapstoneVotingSystem-Frontend.git)

## 🚀 **Core Features (Deployed System Support)**
This backend API supports the deployed SSC Election 2025 voting system:

### 🔐 **Secure Authentication**
- **Student ID and password-based login system** (not email-based)
- **Secure JWT token management** with advanced encryption
- **Forgot password functionality** for account recovery

### 👥 **Multi-role Access Control**
- **Super Admin**: Full system management and oversight
- **Admin**: Election oversight and monitoring  
- **User**: Voting and profile access with secure permissions

### 🗳️ **Real-time Voting Results**
- **Real-time voting capabilities** with instant processing
- **Live results tracking and updates** during active elections
- **Candidate management system** with comprehensive controls

### 📝 **Voter Registration**
- **New voter registration API** for student onboarding
- **Student verification system** with ID validation
- **Profile management** with secure data handling

### 🔒 **Security & Transparency**
- **Advanced encryption protocols** for all data transmission
- **Audit trails for all voting actions** ensuring transparency
- **Secure data transmission** with CORS and security headers

## 🛠️ **Technical Features**
### 🎨 **Backend Architecture**
- **Responsive API design** for all devices
- **Modern development stack** with clean architecture
- **Real-time data processing** and secure authentication integration
- **Scalable database design** for high-volume elections

### 🔧 **Tech Stack**
- **Framework**: Node.js / Express.js (or your chosen stack)
- **Database**: MongoDB / PostgreSQL
- **Authentication**: JWT + Passport.js
- **Real-time**: WebSocket / Socket.io
- **Security**: bcrypt, helmet, CORS configuration
- **Testing**: Jest / Mocha + Testing Library

## ⚙️ **Development Setup**
### 📋 **Prerequisites**
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Database** (MongoDB/PostgreSQL)

## Quick Start
1. **Add your API code** to `VotingSystem_api/` folder
2. **Deploy**: Follow `deployment/BACKEND_DEPLOYMENT.md`
3. **Test**: Verify your deployed API endpoints
4. **Document**: Update deployment URL in Links section

## For Deployment
Your `VotingSystem_api/` folder should contain:
- Main application file (`app.js`, `server.js`, or `app.py`)
- Dependencies file (`package.json` or `requirements.txt`)
- Environment configuration (`.env` setup)

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
1. ✅ **Update corresponding documentation** in both repositories
2. ✅ **Verify API endpoint compatibility** between frontend and backend
3. ✅ **Update environment variables** if needed for integration
4. ✅ **Coordinate deployment timing** to prevent service interruption
5. ✅ **Update timestamps** in both README files for tracking

### Automated Sync (GitHub Actions)
- ✅ **Automatic timestamp updates** when documentation changes
- ✅ **Cross-repository notifications** for relevant updates
- ✅ **Documentation synchronization** for shared information
- ✅ **Intelligent file detection** - only syncs when necessary

## 🌍 **Development Status**

| Environment | Status | URL | Last Updated |
|-------------|--------|-----|--------------|
| Development | 🟡 In Progress | http://localhost:3000 | - |
| Staging | 🔴 Not Deployed | - | - |
| Production | ✅ Frontend Live | sscelection2025.vercel.app | August 2025 |

### ✅ **Current Status**
- ✅ **Structure Ready** - Project organization complete
- ✅ **Frontend Deployed** - sscelection2025.vercel.app live
- ✅ **Frontend Repository** - CapstoneVotingSystem-Frontend active
- ✅ **Automated Sync System** - Bidirectional documentation sync
- ⏳ **Backend API Development** - In progress  
- ⏳ **Backend Deployment** - Planning stage
- ⏳ **Frontend-Backend Integration Testing** - Awaiting backend completion

## Links
- **Frontend Repository**: https://github.com/AdeptEagle/CapstoneVotingSystem-Frontend.git
- **Frontend (Live)**: https://sscelection2025.vercel.app
- **Documentation**: https://docs.google.com/document/d/1ZsaO6LUcmD7EBStYuN_miMHOyWWgq5Bgcm6hbBsldbw/edit?usp=sharing
- **Project Documentation**: [docs/PROJECT_DOCUMENTATION.md](docs/PROJECT_DOCUMENTATION.md)
- **API Documentation**: [docs/API_DOCUMENTATION.md](docs/API_DOCUMENTATION.md)
- **Deployment Guide**: [deployment/BACKEND_DEPLOYMENT.md](deployment/BACKEND_DEPLOYMENT.md)
- **Backend API**: [To be deployed]

## 🤝 **Contributing**
1. **Fork the repository**
2. **Create your feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### 📋 **License**
This project is licensed under the **MIT License** - see the LICENSE file for details.

## Recent Updates
- Aug 15, 2025: Added intelligent bidirectional sync automation system
- Aug 15, 2025: Updated comprehensive project documentation and structure
- Aug 15, 2025: Enhanced README with frontend-backend alignment
- Aug 7, 2025: Added frontend-backend synchronization guidelines
- Aug 7, 2025: Updated repository links and connection documentation

---
**Note**: This **BACKEND API** connects to the CapstoneVotingSystem-Frontend. Ensure both repositories are synchronized for proper functionality.

*Backend last updated: Aug 15, 2025*
# SSC Election 2025 - Backend Deployment Guide

## Deployment Status
- **Frontend**: ✅ LIVE at https://sscelection2025.vercel.app
- **Backend**: ⏳ Ready for deployment
- **Integration**: ⏳ Pending backend deployment

## Platform Options (Free Tier)

### 🟢 Render (Recommended)
1. Sign up at [render.com](https://render.com)
2. Connect GitHub repository
3. Create Web Service:
   - Repo: `AdeptEagle/CapstoneVotingSystem-BACKEND`
   - Branch: `hermosa_pm_api`
   - Root Directory: `VotingSystem_api`
4. Configure:
   - Build: `npm install` or `pip install -r requirements.txt`
   - Start: `npm start` or `python app.py`
5. Add environment variables
6. Deploy

### 🟢 Railway  
1. Sign up at [railway.app](https://railway.app)
2. New Project → From GitHub
3. Select repository and branch
4. Set root directory: `VotingSystem_api`
5. Configure environment variables
6. Auto-deploy

### 🟢 Vercel (Serverless)
1. Sign up at [vercel.com](https://vercel.com)
2. Import from GitHub
3. Set root directory: `VotingSystem_api`
4. Add `vercel.json` config file
5. Deploy

## Environment Variables (SSC Election 2025)
```
PORT=3000
NODE_ENV=production
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret_key
CORS_ORIGIN=https://sscelection2025.vercel.app
STUDENT_ID_PATTERN=^[0-9]{8,12}$
ENCRYPTION_KEY=your_encryption_key
VOTE_START_DATE=2025-08-01T00:00:00Z
VOTE_END_DATE=2025-08-31T23:59:59Z
ADMIN_EMAIL=admin@ssc.edu
SUPER_ADMIN_EMAIL=superadmin@ssc.edu
```

## Deployment Checklist (SSC Election 2025)
- [ ] Platform account created (Render/Railway/Vercel)
- [ ] Repository connected  
- [ ] Root directory set to `VotingSystem_api`
- [ ] Build/start commands configured
- [ ] Environment variables added (SSC Election specific)
- [ ] Database configured and connected
- [ ] CORS configured for frontend domain
- [ ] Student ID validation pattern set
- [ ] Deployment successful
- [ ] API health check tested
- [ ] Frontend-backend integration tested
- [ ] Backend URL updated in frontend environment
- [ ] URL documented in main README

## Post-Deployment Integration
1. **Update Frontend Environment**
   ```
   REACT_APP_API_URL=https://your-backend-url.com/api
   ```
2. **Test Critical Endpoints**
   - Student login functionality
   - Voter registration
   - Candidate retrieval
   - Vote submission
   - Real-time results

## Testing Deployed API
```bash
# Health check
curl https://your-api-url.com/api/health

# Test student login
curl -X POST https://your-api-url.com/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"studentId":"12345678","password":"testpass"}'
```

Expected response:
```json
{
  "status": "OK", 
  "message": "SSC Election 2025 API is running",
  "version": "1.0.0",
  "frontend": "https://sscelection2025.vercel.app"
}
```

---
*SSC Election 2025 Backend Deployment - Hermosa PM Branch*

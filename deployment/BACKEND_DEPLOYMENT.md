# Backend Deployment Guide

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

## Environment Variables
```
PORT=3000
NODE_ENV=production
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
CORS_ORIGIN=*
```

## Deployment Checklist
- [ ] Platform account created
- [ ] Repository connected  
- [ ] Root directory set to `VotingSystem_api`
- [ ] Build/start commands configured
- [ ] Environment variables added
- [ ] Deployment successful
- [ ] API health check tested
- [ ] URL documented in main README

## Testing Deployed API
```bash
curl https://your-api-url.com/api/health
```

Expected response:
```json
{"status": "OK", "message": "API is running"}
```

---
*Deployment Instructions - Hermosa PM*

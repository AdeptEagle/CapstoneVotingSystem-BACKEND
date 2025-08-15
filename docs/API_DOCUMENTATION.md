# SSC Election 2025 - API Reference Documentation

## Base URL
- Development: `http://localhost:3000/api`
- Production: `https://your-backend-api-url.com/api`
- Frontend: `https://sscelection2025.vercel.app`

## Authentication
JWT tokens required for protected endpoints.
```
Authorization: Bearer <token>
```

## Core API Endpoints

### Health Check
```
GET /api/health
```
Response: `{"status": "OK", "message": "SSC Election 2025 API Running"}`

### Authentication (Student-based)
```
POST /api/auth/login
Body: {"studentId": "12345678", "password": "password"}
Response: {"token": "jwt_token", "user": {...}, "role": "user|admin|super_admin"}

POST /api/auth/register  
Body: {
  "studentId": "12345678", 
  "password": "...", 
  "firstName": "...", 
  "lastName": "...",
  "course": "...",
  "yearLevel": "..."
}

POST /api/auth/forgot-password
Body: {"studentId": "12345678"}

POST /api/auth/reset-password
Body: {"token": "reset_token", "newPassword": "..."}
```

### User Management
```
GET /api/users/profile (Authenticated)
PUT /api/users/profile (Authenticated)
GET /api/users (Admin/Super Admin only)
PUT /api/users/:id/role (Super Admin only)
```

### Election Management
```
GET /api/elections (Public - basic info)
GET /api/elections/current (Public - active election)
POST /api/elections (Super Admin only)
PUT /api/elections/:id (Super Admin only)
```

### Candidates
```
GET /api/candidates (Public during election)
GET /api/candidates/:position (Public - by position)
POST /api/candidates (Admin/Super Admin only)
PUT /api/candidates/:id (Admin/Super Admin only)
DELETE /api/candidates/:id (Super Admin only)
```

### Voting
```
POST /api/votes
Body: {"candidateId": "id", "position": "President"}
Headers: Authorization Required

GET /api/votes/verify/:userId (Admin - verify vote status)
GET /api/votes/audit (Super Admin - audit trail)
```

### Results & Analytics
```
GET /api/results (Public after voting or Admin/Super Admin anytime)
GET /api/results/live (Real-time results - Admin/Super Admin)
GET /api/results/:position (Results by position)
GET /api/analytics/participation (Admin/Super Admin)
```

## Error Responses
- `400` Bad Request
- `401` Unauthorized  
- `403` Forbidden
- `404` Not Found
- `500` Server Error

## Database Schema (SSC Election 2025)

### Users (Students)
```
id, studentId (unique), password (hashed), firstName, lastName, 
course, yearLevel, role (user/admin/super_admin), hasVoted, 
isVerified, createdAt, updatedAt
```

### Elections
```
id, title, description, startDate, endDate, isActive, 
createdBy, settings (JSON), createdAt, updatedAt
```

### Candidates  
```
id, name, position, description, imageUrl, platform, 
electionId, voteCount, isActive, createdAt, updatedAt
```

### Votes
```
id, userId, candidateId, position, electionId, 
ipAddress (encrypted), createdAt
```

### Audit_Logs
```
id, userId, action, details (JSON), ipAddress, 
userAgent, createdAt
```

---
*SSC Election 2025 API Reference - Hermosa PM Branch*

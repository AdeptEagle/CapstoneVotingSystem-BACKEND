# API Reference Documentation

## Base URL
- Development: `http://localhost:3000/api`
- Production: `https://your-api-url.com/api`

## Authentication
JWT tokens required for protected endpoints.
```
Authorization: Bearer <token>
```

## Endpoints

### Health Check
```
GET /api/health
```
Response: `{"status": "OK"}`

### Authentication
```
POST /api/auth/login
Body: {"email": "user@example.com", "password": "password"}

POST /api/auth/register  
Body: {"email": "...", "password": "...", "firstName": "...", "lastName": "..."}
```

### Candidates
```
GET /api/candidates
POST /api/candidates (Admin only)
```

### Voting
```
POST /api/votes
Body: {"candidateId": "id", "position": "President"}
```

### Results
```
GET /api/results (Admin or after voting ends)
```

## Error Responses
- `400` Bad Request
- `401` Unauthorized  
- `403` Forbidden
- `404` Not Found
- `500` Server Error

## Database Schema

### Users
```
id, email, password, firstName, lastName, role, hasVoted
```

### Candidates  
```
id, name, position, description, imageUrl
```

### Votes
```
id, userId, candidateId, position, createdAt
```

---
*API Reference - Hermosa PM*

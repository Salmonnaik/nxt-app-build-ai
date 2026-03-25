# 🚀 API Endpoints Documentation

Complete API endpoints for testing the AI-Powered Web App Builder backend.

## 🌐 Base URL
```
Production: https://your-backend-url.com/api
Local: http://localhost:5000/api
```

## 🔐 Authentication Endpoints

### 1. Register User
```http
POST /auth/register
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (201):**
```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
      "name": "John Doe",
      "email": "john@example.com",
      "createdAt": "2024-01-01T00:00:00.000Z"
    }
  }
}
```

### 2. Login User
```http
POST /auth/login
```

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
      "name": "John Doe",
      "email": "john@example.com",
      "createdAt": "2024-01-01T00:00:00.000Z"
    }
  }
}
```

### 3. Get Current User
```http
GET /auth/me
```

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
    "name": "John Doe",
    "email": "john@example.com",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

### 4. Logout User
```http
POST /auth/logout
```

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

## 📁 Project Management Endpoints

### 1. Get All Projects
```http
GET /projects
```

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "success": true,
  "data": [
    {
      "_id": "64f8a1b2c3d4e5f6a7b8c9d1",
      "title": "Portfolio Website",
      "generatedCode": "<html>...</html>",
      "messages": [
        {
          "role": "user",
          "content": "Create a portfolio website",
          "timestamp": "2024-01-01T00:00:00.000Z"
        }
      ],
      "versions": [],
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

### 2. Get Single Project
```http
GET /projects/:projectId
```

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d1",
    "title": "Portfolio Website",
    "generatedCode": "<html>...</html>",
    "messages": [
      {
        "role": "user",
        "content": "Create a portfolio website",
        "timestamp": "2024-01-01T00:00:00.000Z"
      },
      {
        "role": "assistant",
        "content": "I've created a modern portfolio website for you...",
        "timestamp": "2024-01-01T00:00:00.000Z"
      }
    ],
    "versions": [],
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

### 3. Create New Project
```http
POST /projects
```

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "title": "My New Project"
}
```

**Response (201):**
```json
{
  "success": true,
  "data": {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d2",
    "title": "My New Project",
    "generatedCode": "",
    "messages": [],
    "versions": [],
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

### 4. Update Project
```http
PUT /projects/:projectId
```

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "title": "Updated Project Title",
  "generatedCode": "<html>Updated code...</html>"
}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d2",
    "title": "Updated Project Title",
    "generatedCode": "<html>Updated code...</html>",
    "messages": [],
    "versions": [],
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T01:00:00.000Z"
  }
}
```

### 5. Delete Project
```http
DELETE /projects/:projectId
```

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "success": true,
  "message": "Project deleted successfully"
}
```

## 🤖 AI Generation Endpoints

### 1. Generate Code
```http
POST /generate/:projectId
```

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "prompt": "Create a responsive landing page with a hero section, features section, and contact form"
}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "message": {
      "role": "assistant",
      "content": "I've created a modern, responsive landing page with all the sections you requested...",
      "timestamp": "2024-01-01T00:00:00.000Z"
    },
    "generatedCode": "<!DOCTYPE html>\n<html>\n<head>\n  <title>Landing Page</title>\n  <style>\n    /* CSS styles */\n  </style>\n</head>\n<body>\n  <!-- HTML structure -->\n</body>\n</html>",
    "versionIndex": 1
  }
}
```

## 🧪 Testing Examples

### Using curl

#### 1. Register and Login
```bash
# Register
curl -X POST https://your-backend-url.com/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"password123"}'

# Login
curl -X POST https://your-backend-url.com/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"password123"}'
```

#### 2. Create Project
```bash
curl -X POST https://your-backend-url.com/api/projects \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{"title":"My Test Project"}'
```

#### 3. Generate Code
```bash
curl -X POST https://your-backend-url.com/api/generate/PROJECT_ID_HERE \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{"prompt":"Create a simple todo list application"}'
```

### Using JavaScript (Axios)

```javascript
// Base URL
const API_BASE = 'https://your-backend-url.com/api';

// Login
const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE}/auth/login`, {
      email,
      password
    });
    
    const { token, user } = response.data.data;
    
    // Store token for future requests
    localStorage.setItem('token', token);
    
    return { token, user };
  } catch (error) {
    console.error('Login failed:', error.response.data);
  }
};

// Create project
const createProject = async (title) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.post(`${API_BASE}/projects`, 
      { title },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    
    return response.data.data;
  } catch (error) {
    console.error('Create project failed:', error.response.data);
  }
};

// Generate code
const generateCode = async (projectId, prompt) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.post(`${API_BASE}/generate/${projectId}`,
      { prompt },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    
    return response.data.data;
  } catch (error) {
    console.error('Generation failed:', error.response.data);
  }
};
```

### Using Postman

1. **Import Collection:** Copy and paste this collection into Postman
```json
{
  "info": {
    "name": "AI Web App Builder API",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "variable": [
    {
      "key": "baseUrl",
      "value": "https://your-backend-url.com/api"
    },
    {
      "key": "token",
      "value": ""
    }
  ],
  "item": [
    {
      "name": "Auth",
      "item": [
        {
          "name": "Register",
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n  \"name\": \"John Doe\",\n  \"email\": \"john@example.com\",\n  \"password\": \"password123\"\n}"
            },
            "url": {
              "raw": "{{baseUrl}}/auth/register",
              "host": ["{{baseUrl}}"],
              "path": ["auth", "register"]
            }
          }
        },
        {
          "name": "Login",
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n  \"email\": \"john@example.com\",\n  \"password\": \"password123\"\n}"
            },
            "url": {
              "raw": "{{baseUrl}}/auth/login",
              "host": ["{{baseUrl}}"],
              "path": ["auth", "login"]
            }
          },
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "if (pm.response.code === 200) {",
                  "    const response = pm.response.json();",
                  "    pm.collectionVariables.set('token', response.data.token);",
                  "}"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Projects",
      "item": [
        {
          "name": "Get All Projects",
          "request": {
            "method": "GET",
            "header": [
              {
                "key": "Authorization",
                "value": "Bearer {{token}}"
              }
            ],
            "url": {
              "raw": "{{baseUrl}}/projects",
              "host": ["{{baseUrl}}"],
              "path": ["projects"]
            }
          }
        },
        {
          "name": "Create Project",
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              },
              {
                "key": "Authorization",
                "value": "Bearer {{token}}"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n  \"title\": \"My Test Project\"\n}"
            },
            "url": {
              "raw": "{{baseUrl}}/projects",
              "host": ["{{baseUrl}}"],
              "path": ["projects"]
            }
          }
        }
      ]
    }
  ]
}
```

## 🚨 Error Responses

### Authentication Errors
```json
{
  "success": false,
  "message": "Invalid credentials"
}
```

### Validation Errors
```json
{
  "success": false,
  "message": "Please fill in all fields"
}
```

### Authorization Errors
```json
{
  "success": false,
  "message": "Access denied. No token provided."
}
```

### Not Found Errors
```json
{
  "success": false,
  "message": "Project not found"
}
```

### Server Errors
```json
{
  "success": false,
  "message": "Internal server error"
}
```

## 📊 Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error

## 🔧 Testing Tips

1. **Always include the Authorization header** for protected routes
2. **Use the token from the login response** for subsequent requests
3. **Test error cases** by sending invalid data
4. **Check response times** for performance monitoring
5. **Monitor rate limiting** if implemented
6. **Test with different user roles** if applicable

## 🚀 Production Testing

Before deploying to production, test:

1. **All endpoints** with valid and invalid data
2. **Authentication flow** completely
3. **Error handling** scenarios
4. **Load testing** for performance
5. **Security testing** for vulnerabilities
6. **CORS configuration** with your frontend domain

---

**Ready for testing! 🎉**

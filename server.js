import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Load environment variables
dotenv.config();

const app = express();

// Simple in-memory user store (for demo purposes)
const users = [];

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running', timestamp: new Date().toISOString() });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'NxtBuild AI Server is running!' });
});

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Auth endpoints
app.post('/api/auth/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: 'Name, email, and password are required.' });
    }
    
    if (password.length < 6) {
      return res.status(400).json({ success: false, message: 'Password must be at least 6 characters.' });
    }
    
    // Check if user already exists
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      return res.status(409).json({ success: false, message: 'Email already registered.' });
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create user
    const user = {
      id: Date.now().toString(),
      name,
      email,
      password: hashedPassword,
      createdAt: new Date()
    };
    
    users.push(user);
    
    // Generate token
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET || 'fallback_secret', { expiresIn: '2000d' });
    
    res.status(201).json({
      success: true,
      data: {
        token,
        user: { id: user.id, name: user.name, email: user.email }
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password are required.' });
    }
    
    // Find user
    const user = users.find(u => u.email === email);
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid email or password.' });
    }
    
    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid email or password.' });
    }
    
    // Generate token
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET || 'fallback_secret', { expiresIn: '2000d' });
    
    res.json({
      success: true,
      data: {
        token,
        user: { id: user.id, name: user.name, email: user.email }
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.get('/api/auth/me', (req, res) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ success: false, message: 'No token provided.' });
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret');
    const user = users.find(u => u.id === decoded.id);
    
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found.' });
    }
    
    res.json({
      success: true,
      data: { id: user.id, name: user.name, email: user.email, createdAt: user.createdAt }
    });
  } catch (error) {
    res.status(401).json({ success: false, message: 'Invalid token.' });
  }
});

// Mock AI generation endpoint
app.post('/api/generate/:projectId', (req, res) => {
  try {
    const { prompt } = req.body;
    
    // Simple mock HTML response
    const mockHTML = `<!DOCTYPE html>
<html>
<head>
    <title>Generated App</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; }
        .container { max-width: 800px; margin: 0 auto; }
        h1 { color: #333; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Generated from: ${prompt}</h1>
        <p>This is a demo response from the AI service.</p>
    </div>
</body>
</html>`;
    
    res.json({
      success: true,
      data: {
        message: {
          role: 'assistant',
          content: `I've created a web app based on your prompt: "${prompt}"`,
          timestamp: new Date().toISOString()
        },
        generatedCode: mockHTML,
        versionIndex: 1
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Generation failed' });
  }
});

// Mock projects endpoints
app.get('/api/projects', (req, res) => {
  res.json({
    success: true,
    data: []
  });
});

app.post('/api/projects', (req, res) => {
  const { title } = req.body;
  res.status(201).json({
    success: true,
    data: {
      id: Date.now().toString(),
      title,
      generatedCode: '',
      messages: [],
      versions: [],
      createdAt: new Date(),
      updatedAt: new Date()
    }
  });
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './server/src/routes/auth.routes.js';
import projectRoutes from './server/src/routes/project.routes.js';
import generateRoutes from './server/src/routes/generate.routes.js';
import connectDB from './server/src/config/db.config.js';

// Load environment variables
dotenv.config();

const app = express();

// Health check endpoint - before DB connection
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running', timestamp: new Date().toISOString() });
});

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Connect to database (non-blocking)
connectDB().catch(err => {
  console.error('Database connection failed, but server continues:', err.message);
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/generate', generateRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

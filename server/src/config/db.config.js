import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

const connectDB = async () => {
  try {
    // Try to connect to MongoDB Atlas first
    const mongoURI = process.env.MONGODB_URI;

    if (mongoURI && !mongoURI.includes('localhost') && process.env.NODE_ENV === 'production') {
      // Production MongoDB Atlas
      console.log('Connecting to MongoDB Atlas...');
      const conn = await mongoose.connect(mongoURI, {
        serverSelectionTimeoutMS: 5000,
        connectTimeoutMS: 10000,
      });
      console.log(`MongoDB Atlas Connected: ${conn.connection.host}`);
    } else if (process.env.NODE_ENV === 'production') {
      // Production fallback - use Railway's MongoDB or create a simple in-memory DB
      console.log('Using in-memory database for production...');
      const mongod = await MongoMemoryServer.create();
      const uri = mongod.getUri();
      const conn = await mongoose.connect(uri);
      console.log(`MongoDB In-Memory Connected: ${conn.connection.host}`);
    } else {
      // Development - local MongoDB or in-memory
      const mongod = await MongoMemoryServer.create();
      const uri = mongod.getUri();
      const conn = await mongoose.connect(uri);
      console.log(`MongoDB In-Memory Connected: ${conn.connection.host}`);
    }
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    
    // For Railway deployment, we'll continue even if DB fails
    if (process.env.NODE_ENV === 'production') {
      console.log('Continuing without database connection...');
      return;
    }
    
    process.exit(1);
  }
};

export default connectDB;

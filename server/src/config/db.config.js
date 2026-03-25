import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

const connectDB = async () => {
  try {
    // Try to connect to MongoDB Atlas first
    const mongoURI = process.env.MONGODB_URI;

    if (mongoURI && !mongoURI.includes('localhost')) {
      // Production MongoDB Atlas
      const conn = await mongoose.connect(mongoURI);
      console.log(`MongoDB Atlas Connected: ${conn.connection.host}`);
    } else {
      // Local or in-memory MongoDB for development
      const mongod = await MongoMemoryServer.create();
      const uri = mongod.getUri();
      const conn = await mongoose.connect(uri);
      console.log(`MongoDB In-Memory Connected: ${conn.connection.host}`);
    }
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;

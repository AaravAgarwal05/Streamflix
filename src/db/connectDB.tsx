import mongoose, { Connection } from "mongoose";

const connectDB = async (): Promise<Connection | void> => {
  if (mongoose.connection.readyState >= 1) {
    return mongoose.connection;
  }

  try {
    await mongoose.connect(`${process.env.MONGODB_URL as string}`, {
      serverSelectionTimeoutMS: 6000,
    });
    console.log("Connected to MongoDB!");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    throw err;
  }
};

export default connectDB;

import mongoose, { Error } from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // Pass the URI here);

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error Connecting to MONGODB", error);
    process.exit(1); // Exit the process with failure
  }
};

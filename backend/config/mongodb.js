import mongoose from "mongoose";

const connectDB = async () => {
  console.log("Mongo URI =", process.env.MONGODB_URI);

  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;

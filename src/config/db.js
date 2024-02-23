import mongoose from "mongoose";
import { DB_URL } from "./serverConfig.js";

const connectDB = async () => {
  await mongoose.connect(DB_URL);
  console.log("connected to database successfully".blue);
};

export default connectDB;

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

import { JWT_KEY } from "../config/serverConfig.js";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Name is required"],
  },
  email: {
    type: String,
    require: [true, "email is required"],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "Password is required"],
  },
});

userSchema.pre("save", async function () {
  if (!this.isModified) {
    return;
  }
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (plainPassword) {
  return await bcrypt.compare(plainPassword, this.password);
};
userSchema.methods.createJWT = async function () {
  return jwt.sign({ userId: this._id }, JWT_KEY, { expiresIn: "1d" });
};

export default mongoose.model("user", userSchema);

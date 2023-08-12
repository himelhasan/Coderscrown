import mongoose, { Schema, model, models } from "mongoose";
import { IUser } from "./userSignUp.interface";

const userSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  isVerified: { type: Boolean, default: false },
  isAdmin: { type: Boolean, default: false },
  forgetPasswordToken: { type: String },
  forgetPasswordTokenExpiry: { type: Date },
  verifyToken: { type: String },
  verifyTokenExpiry: { type: Date },
});

const User = models.users || model("users", userSchema);

export default User;

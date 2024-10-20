import mongoose, { Schema, model } from "mongoose";

interface IUser {
  email: string;
  contact?: string;
  name?: string;
  password: string;
  username: string;
  profilePic?: string;
  isVerified?: boolean;
  verificationToken?: string;
  verificationTokenExpires?: Date;
}

const userSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    contact: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
    },
    verificationTokenExpires: {
      type: Date,
    },
  },
  { timestamps: true }
);

export default mongoose.models.User || model<IUser>("User", userSchema);

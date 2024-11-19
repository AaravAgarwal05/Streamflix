import mongoose, { Schema, model } from "mongoose";

interface IUser {
  name?: string;
  username: string;
  email: string;
  password: string;
  contact?: string;
  profilePic?: string;
  isVerified?: boolean;
  isSubscribed?: boolean;
  subscriptionType?: string;
  subscriptionStartDate?: Date;
  subscriptionEndDate?: Date;
  verificationToken?: string;
  verificationTokenExpires?: Date;
}

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      default: "",
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      default: "",
    },
    profilePic: {
      type: String,
      default: "",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isSubscribed: {
      type: Boolean,
      default: false,
    },
    subscriptionType: {
      type: String,
      default: "",
    },
    subscriptionStartDate: {
      type: Date,
    },
    subscriptionEndDate: {
      type: Date,
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

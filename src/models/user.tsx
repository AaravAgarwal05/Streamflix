import mongoose, { Schema, model } from "mongoose";

interface IUser {
  email: string;
  contact?: string;
  name?: string;
  password: string;
  username: string;
  profilePic?: string;
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
  },
  { timestamps: true }
);

export default mongoose.models.User || model<IUser>("User", userSchema);

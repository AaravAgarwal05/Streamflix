import mongoose, { Schema, model } from "mongoose";

interface IPayment {
  username: string;
  email: string;
  paymentId: string;
  paymentStatus?: string;
  amount: number;
}

const userSchema = new Schema<IPayment>(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    paymentId: {
      type: String,
      required: true,
      unique: true,
    },
    paymentStatus: {
      type: String,
      default: "pending",
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Payment ||
  model<IPayment>("Payment", userSchema);

"use server";
import connectDB from "@/db/connectDB";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { sendMail } from "./mailer";
import Razorpay from "razorpay";
import Payment from "@/models/payment";

export const createUser = async (email: string, password: string) => {
  try {
    await connectDB();

    const existingUser = await User.findOne({
      email: email,
    });

    if (existingUser) {
      return {
        status: 400,
        message: "Account already exists with same email 😥",
      };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username: email.split("@")[0],
      email: email,
      password: hashedPassword,
    });
    await newUser.save();
    sendVerificationEmail(email);
    return { status: 200, message: "Account Created Successfully 🥳" };
  } catch (err) {
    console.error("Failed to create user", err);
    throw err;
  }
};

export const fetchUser = async (email: string) => {
  try {
    await connectDB();
    const user = await User.findOne({ email: email });
    if (user) {
      return {
        status: 200,
        message: "User found",
        user: user,
      };
    } else {
      return {
        status: 400,
        message: "User not found",
      };
    }
  } catch (err) {
    console.error("Failed to find user", err);
    throw err;
  }
};

export const verifyJWTToken = async (token: string) => {
  try {
    const session = jwt.verify(token, process.env.JWT_SECRET_KEY!);
    return {
      status: 200,
      message: "Token verified successfully 🥳",
      session: session,
    };
  } catch (err) {
    return {
      status: 400,
      message: "Invalid token",
      err,
    };
  }
};

export const getSession = async () => {
  const token = await cookies().get("token");
  if (!token) {
    return {
      status: 400,
      message: "Token not found in cookies 😥",
    };
  }

  const value = token.value;

  const user = jwt.verify(value, process.env.JWT_SECRET_KEY!);
  return {
    status: 200,
    message: "Session retrieved successfully 🥳",
    user: user,
  };
};

export const signIn = async (email: string, password: string) => {
  try {
    await connectDB();

    const user = await User.findOne({
      email: email,
    });

    if (!user) {
      return {
        status: 400,
        message: "Account doesn't exist with this email 😥",
      };
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return {
        status: 400,
        message: "Invalid Password 😥",
      };
    }

    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
      isVerified: user.isVerified,
      isSubscribed: user.isSubscribed,
      subscriptionType: user.subscriptionType,
      subscriptionStartDate: user.subscriptionStartDate,
      subscriptionEndDate: user.subscriptionEndDate,
    };

    const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY!, {
      expiresIn: "1d",
    });

    return {
      status: 200,
      message: "Sign In Successful 🥳",
      token: token,
      user: tokenData,
    };
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("Failed to sign in user:", err.message);
    } else {
      console.error("Failed to sign in user: An unknown error occurred");
    }
    throw err;
  }
};

export const signOut = async () => {
  try {
    cookies().delete("token");
    return {
      status: 200,
      message: "Sign Out Successful 😥",
    };
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("Failed to sign out user:", err.message);
    } else {
      console.error("Failed to sign out user: An unknown error occurred");
    }
    throw err;
  }
};

export const sendVerificationEmail = async (email: string) => {
  await sendMail(email, "verify");
  console.log("Verification email sent successfully");
};

export const updateJWTToken = async (email: string) => {
  await connectDB();

  const user = await User.findOne({
    email: email,
  });

  const tokenData = {
    id: user._id,
    username: user.username,
    email: user.email,
    isVerified: user.isVerified,
    isSubscribed: user.isSubscribed,
    subscriptionType: user.subscriptionType,
    subscriptionStartDate: user.subscriptionStartDate,
    subscriptionEndDate: user.subscriptionEndDate,
  };

  const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY!, {
    expiresIn: "1d",
  });

  return {
    status: 200,
    message: "Token Updation Successful 🥳",
    token: token,
  };
};

export const verifyToken = async (token: string) => {
  try {
    await connectDB();
    const user = await User.findOne({
      verificationToken: token,
      verificationTokenExpires: { $gt: Date.now() },
    });
    if (!user) {
      return {
        status: 400,
        message: "Invalid token",
      };
    }
    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpires = undefined;
    await user.save();
    await signOut();
    const response = await updateJWTToken(user.email);
    console.log(response);
    return {
      status: 200,
      message: "User verified successfully 🥳",
      token: response.token,
    };
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("Failed to sign in user:", err.message);
    } else {
      console.error("Failed to sign in user: An unknown error occurred");
    }
    throw err;
  }
};

export const initiatePayment = async (email: string, amount: string) => {
  try {
    const response = await fetchUser(email);

    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });

    const options = {
      amount: parseInt(amount, 10) * 100,
      currency: "INR",
      receipt: `order_rcptid_${Date.now()}`,
      notes: {
        description: "Payment for StreamFlix subscription",
      },
    };

    const order = await instance.orders.create(options);

    const payment = new Payment({
      paymentId: order.id,
      email: email,
      username: response.user.username,
      amount: amount,
    });
    await payment.save();
    return {
      status: 200,
      message: "Payment initiated successfully 🥳",
      order: order,
    };
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("Failed to initiate payment:", err.message);
    } else {
      console.error("Failed to initiate payment: An unknown error occurred");
    }
    throw err;
  }
};

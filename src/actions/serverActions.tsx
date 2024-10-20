"use server";

import connectDB from "@/db/connectDB";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import { getIronSession, SessionOptions } from "iron-session";
import { cookies } from "next/headers";
import { sendMail } from "./mailer";

export const createUser = async (email: string, password: string) => {
  try {
    await connectDB();

    const saltRounds = 10;
    const plainPassword = password;

    const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

    const user = new User({
      email: email,
      password: hashedPassword,
      username: email.split("@")[0],
    });

    await user.save();
    console.log("User created successfully");
    verifyEmail(email);
    console.log("Verification email sent successfully");
  } catch (err) {
    console.error("Failed to create user", err);
    throw err;
  }
};

export const findUser = async (email: string) => {
  try {
    await connectDB();

    const user = await User.findOne({ email: email });
    console.log("User found successfully");
    if (user) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.error("Failed to find user", err);
    throw err;
  }
};

interface sessionData {
  userID: string;
  email: string;
  username: string;
  isPro: boolean;
  isVerified: boolean;
  isBanned: boolean;
  isLoggedIn: boolean;
}

const sessionOptions: SessionOptions = {
  cookieName: "session",
  password: process.env.SECRET_COOKIE_PASSWORD!,
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production" ? true : false,
  },
};

export const getSession = async () => {
  const session = await getIronSession<sessionData>(cookies(), sessionOptions);
  return session;
};

export const signIn = async (userEmail: string, userPassword: string) => {
  try {
    const session = await getSession();

    await connectDB();

    const user = await User.findOne({
      email: userEmail,
    });

    if (user && (await bcrypt.compare(userPassword, user.password))) {
      session.userID = user._id;
      session.email = user.email;
      session.username = user.username;
      session.isPro = user.isPro;
      session.isVerified = user.isVerified;
      session.isBanned = user.isBanned;
      session.isLoggedIn = true;
      await session.save();
      return { success: true };
    } else {
      throw new Error("Invalid email or password");
    }
  } catch (err: unknown) {
    return { success: false, message: (err as Error).message };
  }
};

export const signOut = async () => {
  const session = await getSession();
  session.destroy();
  console.log("User signed out successfully");
};

export const verifyEmail = async (email: string) => {
  await sendMail(email, "verify");
  console.log("Verification email sent successfully");
};

export const verifyToken = async (token: string) => {
  try {
    await connectDB();
    console.log(token);
    const user = await User.findOne({
      verificationToken: token,
      verificationTokenExpires: { $gt: Date.now() },
    });
    if (user) {
      user.isVerified = true;
      user.verificationToken = undefined;
      user.verificationTokenExpires = undefined;
      await user.save();
      console.log("User verified successfully");
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (err) {
    console.error("Failed to verify user", err);
    throw err;
  }
};

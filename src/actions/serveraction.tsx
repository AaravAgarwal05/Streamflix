"use server";

import connectDB from "@/db/connectDB";
import User from "@/models/user";

export const createUser = async (email: string, password: string) => {
  try {
    await connectDB();

    const user = new User({
      email: email,
      password: password,
      username: email.split("@")[0],
    });

    await user.save();
    console.log("User created successfully");
  } catch (err) {
    console.error("Failed to create user", err);
    throw err;
  }
};

export const getUser = async (email: string) => {
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

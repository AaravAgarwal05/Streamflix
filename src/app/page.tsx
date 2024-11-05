"use client";
import React, { useEffect } from "react";
import Hero from "../components/home/hero";
import axios from "axios";

export default function Home() {
  useEffect(() => {
    connectDB();
  }, []);

  const connectDB = async () => {
    try {
      const res = await axios.get("/api/users/connectToDB");
      if (res.data.status === 200) {
        console.log("Connected to database");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("An unknown error occurred");
      }
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Hero />
    </div>
  );
}

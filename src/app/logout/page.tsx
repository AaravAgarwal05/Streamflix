"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Logout = () => {
  const [counter, setCounter] = useState(30);
  const router = useRouter();

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (counter == 0) {
        router.push("/");
      } else {
        setCounter((prev) => prev - 1);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <div className="w-full h-full flex justify-center items-center bg-background">
      <h1 className="text-4xl text-white">Logged Out</h1>
      <h1 className="text-4xl text-white">Redirecting in {counter} seconds</h1>
      <h1 className="text-4xl text-white">or</h1>
      <h1 className="text-4xl text-white">
        Click{" "}
        <span
          onClick={() => {
            handleLogout();
          }}
        >
          here
        </span>{" "}
        to go back immediately.
      </h1>
    </div>
  );
};

export default Logout;

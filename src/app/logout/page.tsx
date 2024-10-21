"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Logout = () => {
  const [counter, setCounter] = useState(30);
  const router = useRouter();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter === 0) {
          router.push("/");
          clearInterval(intervalId);
        }
        return prevCounter > 0 ? prevCounter - 1 : 0;
      });
    }, 1000);
  }, []);

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <div className="w-full h-full flex flex-col gap-5 justify-center items-center bg-background">
      <h1 className="text-4xl text-white">Logged Out</h1>
      <h1 className="text-4xl text-white">Redirecting in {counter} seconds</h1>
      <h1 className="text-4xl text-white">or</h1>
      <h1 className="text-4xl text-white">
        Click{" "}
        <span
          className="text-customRed cursor-pointer"
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

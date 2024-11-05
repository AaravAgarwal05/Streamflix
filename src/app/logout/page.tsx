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
      <div className="w-1/4 bg-foreground text-background flex flex-col gap-5 p-10">
        <div className="text-4xl font-streamflixMedium">Leaving So Soon?</div>
        <div className="text-lg font-streamflixRegular">
          Just so you know, you don’t always need to sign out of Netflix. It’s
          only necessary if you’re on a shared or public computer.
        </div>
        <div className="text-lg font-streamflixRegular">
          You’ll be redirected to streamflix-smoky.vercel .app in {counter} seconds.
        </div>
        <button
          className="flex text-foreground items-center justify-center gap-3 px-6 py-3 text-2xl bg-customRed rounded font-streamflixBold w-full"
          onClick={() => {
            handleLogout();
          }}
        >
          Go Now
        </button>
      </div>
    </div>
  );
};

export default Logout;

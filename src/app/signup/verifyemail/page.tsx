"use client";
import React, { useState, useEffect } from "react";
import { verifyToken } from "@/actions/serverActions";
import { useRouter } from "next/navigation";

const Verify = () => {
  const [email, setEmail] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const isVerified = localStorage.getItem("isVerified");
    if (isVerified) {
      router.push("/signup");
    }
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    if (token) {
      verify(token);
    }
  }, []);

  const verify = async (token: string) => {
    const response = await verifyToken(token);
    console.log(response.success);
    if (response.success) {
      localStorage.setItem("isVerified", "true");
      router.push("/signup");
    }
  };

  return (
    <div className="h-full mx-auto w-1/4 flex-[1] flex flex-col justify-center items-center font-streamflixRegular gap-4">
      <div className="self-start">
        STEP&nbsp;
        <span className="font-streamflixBold">2</span>&nbsp;OF&nbsp;
        <span className="font-streamflixBold">4</span>
      </div>
      <div className="font-streamflixMedium text-4xl">
        Great, now let us verify your email
      </div>
      <div className="font-streamflixRegular text-lg self-start w-full">
        Click the link we sent to {email} to verify.
      </div>
      <div className="font-streamflixRegular text-lg self-start">
        Verifying your email will improve account security and help you receive
        important Netflix communications.
      </div>
      <button className="mt-4 flex items-center justify-center w-full px-6 py-4 text-3xl bg-customGray rounded font-streamflixMedium">
        Skip
      </button>
    </div>
  );
};

export default Verify;

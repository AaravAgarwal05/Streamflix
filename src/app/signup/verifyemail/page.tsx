"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { getSession } from "@/server/serverActions";
import showToast from "@/components/showToast/showToast";

const Verify = () => {
  const [email, setEmail] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const session = await getSession();
        if (
          session &&
          session.user &&
          typeof session.user !== "string" &&
          session.user.email
        ) {
          if (session.user.isVerified) {
            router.push("/signup");
          }
          setEmail(session.user.email);
        }
      } catch (error) {
        console.error("Error fetching session:", error);
      }
    };
    fetchSession();
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    if (token) {
      verify(token);
    }
  }, []);

  const verify = async (token: string) => {
    try {
      const res = await axios.post("/api/users/verifyemail", { token: token });
      console.log(res.data);
      if (res.data.status === 200) {
        showToast(res.data.message, "success");
        setTimeout(() => {
          router.push("/signup");
        }, 5000);
      } else {
        showToast(res.data.message, "error");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Failed to verify user:", error.message);
      } else {
        console.error("Failed to verify user: An unknown error occurred");
      }
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

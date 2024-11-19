"use client";
import React, { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { TailSpin } from "react-loader-spinner";
import axios from "axios";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isBlur, setIsBlur] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleEmail = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setIsEmailValid(emailRegex.test(email));
  };

  const handleLogin = async () => {
    localStorage.setItem("email", email);
    try {
      const res = await axios.post("/api/users/fetchUser", { email: email });
      if (res.data.message === "User found") {
        router.push("/login");
      } else {
        router.push("/signup/regform");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("An unknown error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div
      className="w-2/5 h-full"
      style={{ backgroundImage: "url(/background.avif)" }}
    >
      <div className="flex flex-col items-center justify-center w-full h-full gap-2 p-16 login">
        <div className="flex flex-col items-start justify-center w-full gap-5 texts">
          <span className="heading font-streamflixBolder text-7xl bg-background p-1">
            Endless movies & TV shows to enjoy with friends
          </span>
          <span className="text-xl heading font-streamflixMedium bg-background p-1">
            Starts at ₹149. Cancel anytime.
          </span>
          <span className="text-lg heading font-streamflixMedium bg-background p-1">
            Ready to watch? Enter your email to create or restart your
            membership.
          </span>
        </div>
        <div className="relative flex w-full gap-2 mt-2 email">
          <label
            htmlFor="email"
            className={`absolute ${
              isFocus ? "top-1 text-sm" : "top-4 text-lg"
            } left-4 text-customGray font-streamflixRegular transition-all duration-300 ease-in-out select-none cursor-text`}
          >
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={email}
            id="email"
            className={`w-full h-14 pb-2 pt-5 px-4 bg-background text-foreground text-lg border ${
              !isEmailValid && email !== "" && isBlur
                ? "border-red-500"
                : "border-[rgba(118,118,118)]"
            } rounded`}
            onFocus={() => {
              setIsFocus(true);
              setIsBlur(false);
            }}
            onBlur={(e) => {
              setIsBlur(true);
              if (e.target.value === "") {
                setIsFocus(false);
              }
            }}
            onChange={handleEmail}
          />
          <button
            className="flex text-foreground items-center justify-center gap-3 px-6 py-3 text-2xl bg-customRed rounded font-streamflixBold w-80"
            onClick={() => {
              if (isEmailValid && email !== "" && !isLoading) {
                handleLogin();
                setIsLoading(true);
              }
            }}
          >
            {isLoading ? (
              <TailSpin
                visible={true}
                height="30"
                width="30"
                color="var(--foreground)"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
              />
            ) : (
              "Get Started"
            )}
          </button>
        </div>
        <span
          className={`text-sm text-red-500 ${
            !isEmailValid && email !== "" && isBlur
              ? "opacity-100"
              : "opacity-0"
          } font-streamflixRegular self-start gap-1 flex`}
        >
          Valid Email is required.
        </span>
      </div>
    </div>
  );
};

export default Login;

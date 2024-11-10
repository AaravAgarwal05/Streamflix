"use client";
import React, { useState, ChangeEvent, useEffect } from "react";
import { useRouter } from "next/navigation";
import { TailSpin } from "react-loader-spinner";
import ClosedEye from "@/components/eyes/closedeye";
import OpenEye from "@/components/eyes/openeye";
import axios from "axios";

const RegForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);
  const [isEmailFocus, setIsEmailFocus] = useState<boolean>(true);
  const [isPasswordFocus, setIsPasswordFocus] = useState<boolean>(false);
  const [isEmailBlur, setIsEmailBlur] = useState<boolean>(false);
  const [isPasswordBlur, setIsPasswordBlur] = useState<boolean>(true);
  const [passwordError, setPasswordError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem("isVerified");
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const handleEmail = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
    validatePassword(e.target.value);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setIsEmailValid(emailRegex.test(email));
  };

  const validatePassword = (password: string) => {
    const passwordLowerCaseRegex = /[a-z]/;
    const passwordUpperCaseRegex = /[A-Z]/;
    const passwordNumberRegex = /[0-9]/;
    const passwordSpecialCharRegex = /[!@#$%^&*]/;
    const passwordLengthRegex = /.{8,}/;
    setIsPasswordValid(
      passwordLowerCaseRegex.test(password) &&
        passwordUpperCaseRegex.test(password) &&
        passwordNumberRegex.test(password) &&
        passwordSpecialCharRegex.test(password) &&
        passwordLengthRegex.test(password)
    );
    if (!passwordLowerCaseRegex.test(password)) {
      setPasswordError("Password should contain atleast one lowercase letter.");
    } else if (!passwordUpperCaseRegex.test(password)) {
      setPasswordError("Password should contain atleast one uppercase letter.");
    } else if (!passwordNumberRegex.test(password)) {
      setPasswordError("Password should contain atleast one number.");
    } else if (!passwordSpecialCharRegex.test(password)) {
      setPasswordError(
        "Password should contain atleast one special character [!@#$%^&*]."
      );
    } else if (!passwordLengthRegex.test(password)) {
      setPasswordError("Password should be atleast 8 characters long.");
    } else {
      setPasswordError("");
    }
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post("/api/users/signup", {
        email: email,
        password: password,
      });
      if (res.data.status === 200) {
        router.push("/signup/verifyemail");
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
    <>
      <div className="h-full mx-auto w-1/4 flex-[1] flex flex-col justify-center items-center font-streamflixRegular gap-4">
        <div className="self-start">
          STEP&nbsp;
          <span className="font-streamflixBold">1</span>&nbsp;OF&nbsp;
          <span className="font-streamflixBold">4</span>
        </div>
        <div className="font-streamflixMedium text-4xl">
          Create a password to start your membership
        </div>
        <div className="font-streamflixRegular text-xl self-start">
          <div>Just a few more steps and you&apos;re done!</div>
          <div>We hate paperwork, too.</div>
        </div>
        <div className="relative flex flex-col w-full gap-2 email">
          <label
            htmlFor="email"
            className={`absolute ${
              isEmailFocus ? "top-1 text-sm" : "top-4 text-lg"
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
              !isEmailValid && isEmailBlur
                ? "border-red-500"
                : "border-[rgba(118,118,118)]"
            } rounded`}
            onFocus={() => {
              setIsEmailFocus(true);
              setIsEmailBlur(false);
            }}
            onBlur={(e) => {
              setIsEmailBlur(true);
              if (e.target.value === "") {
                setIsEmailFocus(false);
              }
            }}
            onChange={handleEmail}
          />
          {!isEmailValid && isEmailBlur && (
            <span
              className={`text-sm text-red-500 font-streamflixRegular self-start gap-1 flex`}
            >
              Valid Email is required.
            </span>
          )}
        </div>
        <div className="relative flex flex-col w-full gap-2 email">
          <label
            htmlFor="password"
            className={`absolute ${
              isPasswordFocus ? "top-1 text-sm" : "top-4 text-lg"
            } left-4 text-customGray font-streamflixRegular transition-all duration-300 ease-in-out select-none cursor-text`}
          >
            Add a password
          </label>
          {isPasswordFocus && (
            <div
              className="absolute right-4 top-4 cursor-pointer"
              onClick={() => setIsPasswordVisible((prev) => !prev)}
            >
              {isPasswordVisible ? (
                <OpenEye color="var(--foreground)" />
              ) : (
                <ClosedEye color="var(--foreground)" />
              )}
            </div>
          )}
          <input
            type={isPasswordVisible ? "text" : "password"}
            name="password"
            value={password}
            id="password"
            className={`w-full h-14 pb-2 pt-5 px-4 bg-background text-foreground text-lg border ${
              !isPasswordValid && password !== "" && isPasswordBlur
                ? "border-red-500"
                : "border-[rgba(118,118,118)]"
            } rounded`}
            onFocus={() => {
              setIsPasswordFocus(true);
              setIsPasswordBlur(false);
            }}
            onBlur={(e) => {
              setIsPasswordBlur(true);
              if (e.target.value === "") {
                setIsPasswordFocus(false);
              }
            }}
            onChange={handlePassword}
          />
          {!isPasswordValid && password !== "" && isPasswordBlur && (
            <span
              className={`text-sm text-red-500 font-streamflixRegular self-start gap-1 flex`}
            >
              {passwordError}
            </span>
          )}
        </div>
        <button
          className="mt-4 flex items-center justify-center w-full px-6 py-4 text-2xl bg-customRed rounded font-streamflixMedium"
          onClick={() => {
            if (
              isEmailValid &&
              email !== "" &&
              isPasswordValid &&
              password !== "" &&
              !isLoading
            ) {
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
            "Next"
          )}
        </button>
      </div>
    </>
  );
};

export default RegForm;

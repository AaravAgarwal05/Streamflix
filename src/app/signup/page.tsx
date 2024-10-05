"use client";
import React from "react";

const Reasons = [
  "No commitments, cancel anytime.",
  "Everything on Netflix for one low price.",
  "No ads and no extra fees. Ever.",
];

const tickIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="40"
      width="40"
      fill="red"
      viewBox="0 0 40 40"
      id="tick"
    >
      <path d="M15.48 28.62a1 1 0 0 1-.71-.29l-7.54-7.54a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l6.83 6.83L32.12 9.57a1 1 0 0 1 1.41 0 1 1 0 0 1 0 1.42L16.18 28.33a1 1 0 0 1-.7.29Z"></path>
    </svg>
  );
};

const SignUp = () => {
  return (
    <>
      <div className="h-full w-1/5 mx-auto flex-[1] flex flex-col gap-2 justify-center items-center font-streamflixRegular">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="60"
          height="60"
        >
          <path
            fill="red"
            d="M32 58a26 26 0 1 1 26-26 26 26 0 0 1-26 26Zm0-48a22 22 0 1 0 22 22 22 22 0 0 0-22-22Z"
          />
          <path
            fill="red"
            d="M28.32 41.64h-.12a5 5 0 0 1-3.67-1.74l-5.64-6.56a2 2 0 1 1 3-2.61l5.64 6.56a1 1 0 0 0 .74.35 1 1 0 0 0 .75-.31l13.1-13.82a2 2 0 0 1 2.9 2.75L32 40.08a5 5 0 0 1-3.68 1.56Z"
          />
        </svg>
        <div className="mt-5">
          STEP&nbsp;
          <span className="font-streamflixBold">3</span>&nbsp;OF&nbsp;
          <span className="font-streamflixBold">4</span>
        </div>
        <div className="font-streamflixMedium text-4xl">Choose your plan.</div>
        <ul className="flex flex-col justify-center items-start gap-5 mt-8">
          {Reasons.map((reason, index) => (
            <li
              key={index}
              className="font-streamflixRegular text-xl flex items-center gap-2"
            >
              {tickIcon()}
              {reason}
            </li>
          ))}
        </ul>
        <button className="mt-4 flex items-center justify-center w-full px-6 py-4 text-2xl bg-customRed rounded font-streamflixMedium">
          Next
        </button>
      </div>
    </>
  );
};

export default SignUp;

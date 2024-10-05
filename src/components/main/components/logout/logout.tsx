"use client";
import React, { useState } from "react";

interface LogoutIconProps {
  color1?: string;
}

const LogoutIcon: React.FC<LogoutIconProps> = ({ color1 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="30"
      height="30"
      fill={color1}
    >
      <path d="M21.9,11.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-2-2c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l0.3,0.3H16    c-0.6,0-1,0.4-1,1s0.4,1,1,1h2.6l-0.3,0.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l2-2    C21.8,11.6,21.9,11.5,21.9,11.4z" />
      <path d="M17,14c-0.6,0-1,0.4-1,1v1c0,0.6-0.4,1-1,1h-1V8.4c0-1.3-0.8-2.4-1.9-2.8L10.5,5H15c0.6,0,1,0.4,1,1v1c0,0.6,0.4,1,1,1    s1-0.4,1-1V6c0-1.7-1.3-3-3-3H5c0,0,0,0,0,0C4.9,3,4.8,3,4.7,3.1c0,0,0,0,0,0c-0.1,0-0.2,0.1-0.2,0.1c0,0,0,0,0,0c0,0,0,0-0.1,0.1    C4.3,3.3,4.2,3.4,4.2,3.5c0,0,0,0,0,0.1C4.1,3.6,4,3.7,4,3.8c0,0,0,0,0,0c0,0,0,0,0,0.1C4,3.9,4,4,4,4v14c0,0.4,0.3,0.8,0.6,0.9    l6.6,2.5c0.2,0.1,0.5,0.1,0.7,0.1c0.4,0,0.8-0.1,1.1-0.4c0.5-0.4,0.9-1,0.9-1.6V19h1c1.7,0,3-1.3,3-3v-1C18,14.5,17.6,14,17,14z" />
    </svg>
  );
};

const Logout = () => {
  const [logoutColors, setLogoutColors] = useState(["gray"]);
  return (
    <div className="flex-[1] h-full w-full flex px-14 items-center justify-start font-streamflixMedium">
      <button
        className="flex items-center gap-5 text-sm transition-all ease-in-out text-customGray hover:text-foreground hover:text-lg"
        onMouseEnter={() => setLogoutColors(["var(--foreground)"])}
        onMouseLeave={() => setLogoutColors(["gray"])}
      >
        <LogoutIcon color1={logoutColors[0]} />
        Log Out
      </button>
    </div>
  );
};
export default Logout;
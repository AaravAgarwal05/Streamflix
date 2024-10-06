import React from "react";
import Image from "next/image";
import ProfilePic from "@/assets/images/Profile Pic.png"

const Followers = () => {
  return (
    <div className="flex-[3.5] h-full w-full text-lg text-customGray font-streamflixMedium px-14 flex flex-col justify-center items-start gap-5">
      <span>Following</span>
      <div className="w-full overflow-y-auto h-96">
        <ul>
          {Array.from({ length: 10 }, (_, i) => (
            <li
              key={i}
              className="flex items-center justify-between w-full h-16"
            >
              <div className="flex items-center justify-between gap-4 text-sm">
                <Image
                  src={ProfilePic}
                  height="32"
                  width="32"
                  alt="User Avatar"
                  className="w-8 h-8 bg-center bg-cover rounded-full"
                />
                <span className="">Username</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Followers;

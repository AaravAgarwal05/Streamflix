import React from "react";

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
                <img
                  src="https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABbOdxVGFQdDOSc_7_L0-hjORAtpBTqRGJTW_EtUxvzax0sWSE-nfu338JptRALo21408x4T7pJn8NOyyx4a5lg1CtOSag3NkAXCK.png?r=b38"
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

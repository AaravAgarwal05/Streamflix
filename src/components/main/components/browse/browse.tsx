"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ExploreIconProps {
  color1?: string;
  color2?: string;
  color3?: string;
}

const ExploreIcon: React.FC<ExploreIconProps> = ({
  color1,
  color2,
  color3,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      height="30"
      width="30"
      id="compass"
    >
      <path
        d="M16 0C7.164 0 0 7.164 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0zm7.848 9.53-2.324 3.724-1.55 2.484c.006.088.026.172.026.262 0 2.21-1.79 4-4 4-.09 0-.174-.02-.262-.026l-2.486 1.55-3.722 2.324a1.006 1.006 0 0 1-1.238-.14.996.996 0 0 1-.14-1.236l2.324-3.724 1.55-2.484C12.02 16.174 12 16.09 12 16c0-2.21 1.79-4 4-4 .09 0 .174.02.262.026l2.486-1.55 3.722-2.324a1 1 0 0 1 1.236.142c.332.328.39.84.142 1.236zM14 16a2 2 1080 1 0 4 0 2 2 1080 1 0-4 0z"
        fill={color1}
      ></path>
      <path
        d="M16 0C7.164 0 0 7.164 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0zm0 30C8.28 30 2 23.72 2 16S8.28 2 16 2s14 6.28 14 14-6.28 14-14 14zm6.47-21.848-3.722 2.324-2.486 1.55a3.977 3.977 0 0 1 3.712 3.712l1.55-2.484 2.324-3.724a1 1 0 0 0-1.378-1.378zm-10.444 8.11-1.55 2.486-2.324 3.724A.996.996 0 0 0 9 24c.184 0 .368-.05.53-.152l3.722-2.324 2.486-1.55a3.979 3.979 0 0 1-3.712-3.712zm4.236-4.236C16.174 12.02 16.09 12 16 12c-2.21 0-4 1.79-4 4 0 .09.02.174.026.262a3.979 3.979 0 0 0 3.712 3.712c.088.006.172.026.262.026 2.21 0 4-1.79 4-4 0-.09-.02-.174-.026-.262a3.979 3.979 0 0 0-3.712-3.712zM14 16c0-1.102.898-2 2-2s2 .898 2 2-.898 2-2 2-2-.898-2-2z"
        fill={color2}
      ></path>
      <path
        d="M16 0C7.164 0 0 7.164 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0zm0 30C8.28 30 2 23.72 2 16S8.28 2 16 2s14 6.28 14 14-6.28 14-14 14zm6.47-21.848-3.722 2.324-2.486 1.55a3.977 3.977 0 0 1 3.712"
        fill={color3}
      ></path>
    </svg>
  );
};

interface WatchListIconProps {
  color1?: string;
  color2?: string;
}

const WatchListIcon: React.FC<WatchListIconProps> = ({ color1, color2 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1792 1792"
      id="heart"
      width="30"
      height="30"
    >
      <path
        d="M896 1664q-26 0-44-18l-624-602q-10-8-27.5-26T145 952.5 77 855 23.5 734 0 596q0-220 127-344t351-124q62 0 126.5 21.5t120 58T820 276t76 68q36-36 76-68t95.5-68.5 120-58T1314 128q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18z"
        fill={color1}
      ></path>
      <path
        d="M1664 596q0-81-21.5-143t-55-98.5T1506 295t-94-31-98-8-112 25.5-110.5 64-86.5 72-60 61.5q-18 22-49 22t-49-22q-24-28-60-61.5t-86.5-72-110.5-64T478 256t-98 8-94 31-81.5 59.5-55 98.5T128 596q0 168 187 355l581 560 580-559q188-188 188-356zm128 0q0 221-229 450l-623 600q-18 18-44 18t-44-18l-624-602q-10-8-27.5-26T145 952.5 77 855 23.5 734 0 596q0-220 127-344t351-124q62 0 126.5 21.5t120 58T820 276t76 68q36-36 76-68t95.5-68.5 120-58T1314 128q224 0 351 124t127 344z"
        fill={color2}
      ></path>
    </svg>
  );
};

interface ComingSoonIconProps {
  color1?: string;
  color2?: string;
  color3?: string;
}

const ComingSoonIcon: React.FC<ComingSoonIconProps> = ({
  color1,
  color2,
  color3,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="30"
      width="30"
      viewBox="0 0 32 32"
      fill={color1}
    >
      <g data-name="40">
        <rect width="24" height="22" x="4" y="5" rx="4" ry="4" fill={color2} />
        <path d="M27 11H5a1 1 0 0 1-1-1V8a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v2a1 1 0 0 1-1 1M6 9h20V8a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1Z" />
        <path d="M25 27H7a3 3 0 0 1-3-3V10a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v14a3 3 0 0 1-3 3M6 11v13a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V11zm16-3a1 1 0 0 1-1-1V5a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1M10 8a1 1 0 0 1-1-1V5a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1" />
        <rect width="4" height="4" x="8" y="13" rx="1" ry="1" fill={color3} />
        <rect width="4" height="4" x="8" y="19" rx="1" ry="1" fill={color3} />
        <rect width="4" height="4" x="14" y="13" rx="1" ry="1" fill={color3} />
        <rect width="4" height="4" x="14" y="19" rx="1" ry="1" fill={color3} />
        <rect width="4" height="4" x="20" y="13" rx="1" ry="1" fill={color3} />
        <rect width="4" height="4" x="20" y="19" rx="1" ry="1" fill={color3} />
      </g>
    </svg>
  );
};

const Browse = () => {
  const [exploreColors, setExploreColors] = useState([
    "var(--background)",
    "gray",
    "gray",
  ]);
  const [watchListColors, setWatchListColors] = useState([
    "var(--background)",
    "gray",
  ]);
  const [comingSoonColors, setComingSoonColors] = useState([
    "gray",
    "var(--background)",
    "gray",
  ]);
  const [isExploreHovered, setIsExploreHovered] = useState(false);
  const [isWatchListHovered, setIsWatchListHovered] = useState(false);
  const [isComingSoonHovered, setIsComingSoonHovered] = useState(false);
  const pathname = usePathname();
  const isActive = (path: string) => {
    return pathname === path;
  };

  useEffect(() => {
    if (isActive("/home")) {
      setExploreColors(["red", "white", "red"]);
    } else if (isActive("/watchlist")) {
      setWatchListColors(["red", "red"]);
    } else if (isActive("/comingsoon")) {
      setComingSoonColors(["red", "red", "white"]);
    }
  }, [pathname]);

  return (
    <div className="flex-[2.5] h-full w-full flex flex-col justify-center items-start gap-14 ">
      <div className="flex text-xl font-streamflixBold px-14">
        <span>STREAM</span>
        <span className="text-customRed">FLIX</span>
      </div>
      <div className="flex flex-col gap-5 text-lg text font-streamflixMedium text-customGray">
        <span className="px-14">Entertainment Hub</span>
        <div className="flex flex-col items-start justify-center gap-5 text-sm text-foreground">
          <div className="flex items-center justify-start w-full h-full">
            {(isActive("/home") || isExploreHovered) && (
              <span className="w-1 h-full rounded-r-lg bg-customRed"></span>
            )}
            <Link href={"/home"}>
              <button
                id="Browse"
                className={`${
                  isActive("/home")
                    ? "text-foreground text-lg"
                    : "text-customGray text-sm"
                } px-14 flex items-center justify-start w-full gap-5 hover:text-foreground hover:text-lg transition-all ease-in-out`}
                onMouseEnter={() => {
                  if (!isActive("/home")) {
                    setExploreColors(["red", "white", "red"]);
                    setIsExploreHovered(true);
                  }
                }}
                onMouseLeave={() => {
                  if (!isActive("/home")) {
                    setExploreColors(["var(--background)", "gray", "gray"]);
                    setIsExploreHovered(false);
                  }
                }}
              >
                <ExploreIcon
                  color1={exploreColors[0]}
                  color2={exploreColors[1]}
                  color3={exploreColors[2]}
                />
                Browse
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-5 text-sm text-foreground">
          <div className="flex items-center justify-start w-full h-full">
            {(isActive("/watchlist") || isWatchListHovered) && (
              <span className="w-1 h-full rounded-r-lg bg-customRed"></span>
            )}
            <Link href={"/watchlist"}>
              <button
                id="Browse"
                className={`${
                  isActive("/watchlist")
                    ? "text-foreground text-lg"
                    : "text-customGray text-sm"
                } px-14 flex items-center justify-start w-full gap-5 hover:text-foreground hover:text-lg transition-all ease-in-out`}
                onMouseEnter={() => {
                  if (!isActive("/watchlist")) {
                    setWatchListColors(["red", "red"]);
                    setIsWatchListHovered(true);
                  }
                }}
                onMouseLeave={() => {
                  if (!isActive("/watchlist")) {
                    setWatchListColors(["var(--background)", "gray"]);
                    setIsWatchListHovered(false);
                  }
                }}
              >
                <WatchListIcon
                  color1={watchListColors[0]}
                  color2={watchListColors[1]}
                />
                Watchlist
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-5 text-sm transition-all ease-in-out text-foreground">
          <div className="flex items-center justify-start w-full h-full">
            {(isActive("/comingsoon") || isComingSoonHovered) && (
              <span className="w-1 h-full rounded-r-lg bg-customRed"></span>
            )}
            <Link href={"/comingsoon"}>
              <button
                id="Browse"
                className={`${
                  isActive("/comingsoon")
                    ? "text-foreground text-lg"
                    : "text-customGray text-sm"
                } px-14 flex items-center justify-start w-full gap-5 hover:text-foreground hover:text-lg transition-all ease-in-out`}
                onMouseEnter={() => {
                  if (!isActive("/comingsoon")) {
                    setComingSoonColors(["red", "red", "white"]);
                    setIsComingSoonHovered(true);
                  }
                }}
                onMouseLeave={() => {
                  if (!isActive("/comingsoon")) {
                    setComingSoonColors(["gray", "var(--background)", "gray"]);
                    setIsComingSoonHovered(false);
                  }
                }}
              >
                <ComingSoonIcon
                  color1={comingSoonColors[0]}
                  color2={comingSoonColors[1]}
                  color3={comingSoonColors[2]}
                />
                Coming Soon
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;

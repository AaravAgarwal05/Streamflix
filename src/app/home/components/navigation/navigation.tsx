import React, { useState } from "react";
import StreamflixCard from "../streamflixCard/streamflixCard";

const CarouselSection = ({
  title,
  items,
}: {
  title: string;
  items: { title: string; image: string }[];
}) => {
  const [startIndex, setStartIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const itemsPerPage = 5;

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + itemsPerPage >= items.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex - itemsPerPage < 0
        ? items.length - itemsPerPage
        : prevIndex - itemsPerPage
    );
  };

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const currentPage = Math.floor(startIndex / itemsPerPage);

  return (
    <div className="mb-16 overflow-hidden">
      <div className="flex justify-between items-center mb-5">
        <div className="text-2xl font-streamflixBold text-white">{title}</div>
        <ul className="pagination-indicator flex space-x-0.5 self-end">
          {Array.from({ length: totalPages }).map((_, index) => (
            <li
              key={index}
              className={`w-4 h-1 rounded-full ${
                index === currentPage ? "bg-white" : "bg-gray-600"
              }`}
            ></li>
          ))}
        </ul>
      </div>

      <div className="relative">
        <div className="flex overflow-hidden">
          <div
            className="flex transition-all duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${startIndex * 310.66}px)`,
            }}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="w-[20%] px-1 flex-shrink-0 transition-all duration-1000 ease-in-out"
                onMouseEnter={() => setTimeout(() => { setHoveredIndex(index); }, 100)}
                onMouseLeave={() => setTimeout(() => { setHoveredIndex(null); }, 100)}
              >
                {hoveredIndex === index ? (
                  <div className="z-10">
                    <StreamflixCard
                      title={item.title}
                      image={item.image}
                      seasons="Season 1"
                      tags={["Drama", "Thriller"]}
                      isHovered={true}
                    />
                  </div>
                ) : (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full rounded-lg object-cover transition-all duration-1000 ease-in-out"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="absolute left-0 h-full w-10 top-0 flex justify-center items-center hover:bg-background transition-all ease-in-out duration-300">
          <button
            className="text-7xl text-transparent hover:text-white transition-all ease-in-out duration-300"
            onClick={() => {
              handlePrev();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30"
              width="30"
              viewBox="0 0 256 512"
              fill="currentColor"
            >
              <path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z" />
            </svg>
          </button>
        </div>
        <div className="absolute right-0 h-full w-10 top-0 flex justify-center items-center hover:bg-background transition-all ease-in-out duration-300">
          <button
            className="text-7xl h-full w-full text-transparent hover:text-white transition-all ease-in-out duration-300"
            onClick={() => {
              handleNext();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30"
              width="30"
              viewBox="0 0 256 512"
              fill="currentColor"
            >
              <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const carousels = [
  {
    title: "Dark Hindi-Language Movies",
    items: [
      {
        title: "Do Patti1",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti1",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti1",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti2",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti3",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti4",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti5",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti6",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti7",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti8",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti9",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti11",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti22",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti33",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti44",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti55",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti66",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti77",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti88",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti99",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti111",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti222",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti333",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti444",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti555",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
    ],
  },
  {
    title: "Dark Hindi-Language Movies",
    items: [
      {
        title: "Do Patti1",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti2",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti3",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti4",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti5",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti6",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti7",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti8",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti9",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti11",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti22",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti33",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti44",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti55",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti66",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti77",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti88",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti99",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti111",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti222",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti333",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti444",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti555",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
    ],
  },
  {
    title: "Dark Hindi-Language Movies",
    items: [
      {
        title: "Do Patti1",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti2",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti3",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti4",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti5",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti6",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti7",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti8",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti9",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti11",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti22",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti33",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti44",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti55",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti66",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti77",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti88",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti99",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti111",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti222",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti333",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti444",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti555",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
    ],
  },
  {
    title: "Dark Hindi-Language Movies",
    items: [
      {
        title: "Do Patti1",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti2",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti3",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti4",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti5",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti6",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti7",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti8",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti9",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti11",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti22",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti33",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti44",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti55",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti66",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti77",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti88",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti99",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti111",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti222",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti333",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti444",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
      {
        title: "Do Patti555",
        image:
          "https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJxyrH6EDtgyIe3PA7PUbwGZKoRMg5CciKDxHO6Q_8BFdq73p8HR4ufiB15hjoP3T-LBsC-SZHzwUH4ntiUHGV7JOpy_F21R5JN4owj7VE1ZpVJuNYdA22rQAcYNBa74DDX.jpg?r=48d",
      },
    ],
  },
];

const Navigation = () => {
  return (
    <div className="flex-[5] w-full h-full bg-[var(--background)] overflow-y-scroll">
      <div className="text-white min-h-screen p-5 z-0">
        {carousels.map((carousel, key) => (
          <CarouselSection
            key={key}
            title={carousel.title}
            items={carousel.items}
          />
        ))}
      </div>
    </div>
  );
};

export default Navigation;

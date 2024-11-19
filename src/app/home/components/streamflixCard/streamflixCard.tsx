import React from "react";

const StreamflixCard = ({
  title,
  image,
  seasons,
  tags,
  isHovered,
}: {
  title: string;
  image: string;
  seasons: string;
  tags: string[];
  isHovered: boolean;
}) => {
  return (
    <div
      className={`relative bg-black bg-opacity-70 text-white rounded-lg p-4 w-full h-full transition-all duration-300 ease-in-out transform ${
        isHovered ? "scale-105 z-30 shadow-2xl" : "scale-100 z-10"
      }`}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-44 rounded-lg object-cover transition-all duration-1000 ease-in-out"
      />
      <div className="mt-3">
        <div className="text-xl font-semibold">{title}</div>
        <div className="mt-2 text-sm text-gray-400">{seasons}</div>
      </div>
      <div className="w-full flex flex-col justify-between gap-5 mt-4">
        <div className="flex justify-between w-full space-x-4">
          <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-300 transition-all duration-200">
            Play
          </button>
          <button className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-all duration-200">
            More Info
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="text-sm font-streamflixMedium">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StreamflixCard;

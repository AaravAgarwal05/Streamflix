"use client";
import React, { useEffect, useRef } from "react";
import { top10 } from "@/constants/top10";

const CarouselSection = ({
  items,
}: {
  items: { title: string; image: string }[];
}) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<Animation | null>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      const totalWidth = carousel.scrollWidth; // Total width of the content
      const visibleWidth = carousel.offsetWidth; // Visible width of the carousel

      const infiniteScroll = carousel.animate(
        [
          { transform: `translateX(0)` },
          { transform: `translateX(-${totalWidth - visibleWidth + 20}px)` },
        ],
        {
          duration: (totalWidth - visibleWidth) * 15, // Adjust speed (pixels per ms)
          iterations: Infinity,
          easing: "linear",
        }
      );

      animationRef.current = infiniteScroll;

      // Pause animation on hover
      const stopScroll = () => animationRef.current?.pause();
      const startScroll = () => animationRef.current?.play();

      carousel.addEventListener("mouseenter", stopScroll);
      carousel.addEventListener("mouseleave", startScroll);

      return () => {
        animationRef.current?.cancel();
        carousel.removeEventListener("mouseenter", stopScroll);
        carousel.removeEventListener("mouseleave", startScroll);
      };
    }
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={carouselRef}
        className="flex gap-10 p-5"
      >
        {items.concat(items).map((item, index) => (
          <div
            key={index}
            className="w-[35%] relative px-1 flex-shrink-0"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full rounded-lg object-cover"
            />
            <span className="absolute text-9xl bottom-3 -left-6 font-streamflixBolder textStroke">
              {(index % items.length) + 1}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Top10Preview = () => {
  return (
    <div className="h-full w-3/5 py-20 px-10 flex flex-col justify-evenly">
      <div className="w-2/3 text-6xl font-streamflixBolder">
        Top 10 Trending Movies & TV Shows in India Right Now
      </div>
      <CarouselSection items={top10} />
    </div>
  );
};

export default Top10Preview;

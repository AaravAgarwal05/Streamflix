"use client";
import React, { useRef, useEffect } from "react";

const QuarterCircle = () => {
  const quarterRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  useEffect(() => {
    const elements =
      quarterRef.current?.querySelectorAll<HTMLDivElement>(".movie");
    const count = elements?.length || 0;
    const RadiusX = 780;
    const RadiusY = 560;

    let angleOffset = 0;

    const updateAnimation = () => {
      if (elements) {
        elements.forEach((element, index) => {
          const angle = (2 * Math.PI * (index + (angleOffset * -1))) / count;
          const x = RadiusX * Math.sin(angle);
          const y = RadiusY * Math.cos(angle);

          element.style.transform = `translate(${x}px, ${y}px) rotate(${
            angle * -1
          }rad)`;
        });

        angleOffset += 0.005;
      }

      animationFrameRef.current = requestAnimationFrame(updateAnimation);
    };

    animationFrameRef.current = requestAnimationFrame(updateAnimation);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="quarter-circle bg-netflix-black h-full w-3/5 rounded-quarter-circle overflow-x-hidden relative">
      <div className="absolute w-1/2 top-44 left-14 text-6xl font-streamflixBolder">
        Top 10 Trending Movies & TV Shows in India Right Now
      </div>
      <div className="image_container h-full relative" ref={quarterRef}>
      </div>
    </div>
  );
};

export default QuarterCircle;

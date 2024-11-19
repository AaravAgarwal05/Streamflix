"use client";
import VideoPlayer from "@/components/videoPlayer/videoPlayer";
import React, { useRef, useEffect } from "react";
import videojs from "video.js";

const Player = () => {
  const playerRef = useRef(null);
  const videoLink =
    "https://streamflix-smoky.s3.ap-south-1.amazonaws.com/movies/outputs/1080p/index.m3u8";

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(window.innerHeight);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const videoPlayerOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: videoLink,
        type: "application/x-mpegURL",
      },
    ],
  };
  const handlePlayerReady = (player: any) => {
    playerRef.current = player;

    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };
  return (
    <>
      <div className="w-[82.2vw] mx-auto">
        <VideoPlayer options={videoPlayerOptions} onReady={handlePlayerReady} />
      </div>
    </>
  );
};

export default Player;

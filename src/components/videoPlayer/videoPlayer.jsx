import React, { useRef, useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "@videojs/themes/dist/fantasy/index.css";

export const VideoPlayer = (props) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const { options, onReady } = props;

  useEffect(() => {
    if (!playerRef.current) {
      const videoElement = document.createElement("video");
      videoElement.classList.add(
        "video-js",
        "vjs-theme-fantasy",
        "vjs-big-play-centered"
      );

      videoRef.current.appendChild(videoElement);

      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log("player is ready");
        onReady(player);
      }));
    } else {
      const player = playerRef.current;
      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options, onReady]);

  useEffect(() => {
    return () => {
      const player = playerRef.current;
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <div data-vjs-player className="w-full">
      <div ref={videoRef} />
    </div>
  );
};

export default VideoPlayer;

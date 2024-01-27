"use client";

import { XCircle } from "@phosphor-icons/react";
import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const option = {
    width: "300",
    height: "250",
  };

  const handleVideoPlayer = () => {
    return setIsOpen((prevState) => !prevState);
  };
  
  const showVideoPlayer = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          onClick={handleVideoPlayer}
          className="text-color-accent float-right"
        >
          <XCircle size={32} />
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo}
          opts={option}
        />
      </div>
    );
  };

  const buttonOpenTrailer = () => {
    return (
      <div className="fixed bottom-5 right-5">
        <button
          onClick={handleVideoPlayer}
          className="text-color-dark bg-color-accent font-bold text-md p-2 rounded"
        >
          Tonton trailer
        </button>
      </div>
    );
  };

  return isOpen ? showVideoPlayer() : buttonOpenTrailer();
};

export default VideoPlayer;

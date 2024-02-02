import React from "react";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-4xl">{title}</h1>
      <p className="py-6 text-lg w-1/4">{description}</p>
      <div className="flex gap-3">
        <button className="bg-white text-black hover:bg-opacity-80 text-xl py-2 px-12 rounded-lg ">
          ▶️ Play
        </button>
        <button className="bg-gray-600 text-white text-xl py-2 px-12 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

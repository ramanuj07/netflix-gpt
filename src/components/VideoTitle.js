import React from "react";
import { playIconSvg, moreInfoSvg } from "../utils/svg/svg";
import { Link } from "react-router-dom";

const VideoTitle = ({ title, description, id }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-4xl">{title}</h1>
      <p className="py-6 text-lg w-1/3">{description}</p>
      <div className="flex gap-3">
        <Link to={`/browse/${id}`}>
          <button className="bg-white text-black hover:bg-opacity-80 text-xl py-2 px-12 rounded-lg flex gap-2 items-center">
            {playIconSvg} Play
          </button>
        </Link>
        <Link to={`/browse/${id}`}>
          <button className="bg-gray-600 text-white hover:bg-opacity-80 text-xl py-2 px-12 rounded-lg flex gap-2 items-center">
            {moreInfoSvg} More Info
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VideoTitle;

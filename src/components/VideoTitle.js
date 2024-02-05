import React from "react";
import { playIconSvg, moreInfoSvg } from "../utils/svg/svg";
import { Link } from "react-router-dom";

const VideoTitle = ({ title, description, id }) => {
  return (
    <div className="w-screen aspect-video pt-[30%] md:pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-semibold md:font-bold text-2xl py-4 md:py-0 md:text-4xl">
        {title}
      </h1>
      <p className="hidden md:inline-block md:text-lg md:w-1/3 md:py-6">
        {description}
      </p>
      <div className="flex gap-3">
        <Link to={`/browse/${id}`}>
          <button className="bg-white text-black hover:bg-opacity-80 md:text-xl py-2 px-4 md:px-12 rounded-lg flex gap-2 items-center">
            {playIconSvg} Play
          </button>
        </Link>
        <Link to={`/browse/${id}`}>
          <button className="bg-gray-600 hidden text-white hover:bg-opacity-80 px-4 md:text-xl py-2 md:px-12 rounded-lg md:flex md:gap-2 md:items-center">
            {moreInfoSvg} More Info
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VideoTitle;

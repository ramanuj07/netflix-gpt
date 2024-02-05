import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_IMAGE } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          src={BG_IMAGE}
          alt="bgImage"
          className="h-screen object-cover md:object-none md:w-screen"
        />
      </div>
      <div>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;

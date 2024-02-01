import React from "react";

const MovieCard = ({ data }) => {
  const { title } = data;
  return (
    <div className="flex">
      <div className="p-2 m-2 border border-gray-200 w-68">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default MovieCard;

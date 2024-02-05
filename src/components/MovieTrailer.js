import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const MovieTrailer = () => {
  const { id } = useParams();

  const movieTrailer = useSelector((store) => store.movies.trailerVideo);

  useMovieTrailer(id);

  return (
    <div className="h-full w-full relative">
      {movieTrailer && (
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${movieTrailer?.key}`}
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default MovieTrailer;

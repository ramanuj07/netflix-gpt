import MovieTrailer from "./MovieTrailer";
import MovieDetails from "./MovieDetails";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

const MoviePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row  bg-black h-screen">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="flex-1 h-full">
            <MovieTrailer />
          </div>

          <div className="flex-1 h-full">
            <MovieDetails />
          </div>
        </>
      )}
    </div>
  );
};

export default MoviePage;

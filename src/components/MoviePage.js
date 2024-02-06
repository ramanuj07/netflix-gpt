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
    <div className="flex flex-col gap-4 md:gap-0 md:flex-row bg-black overflow-x-hidden h-screen">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="flex-1 h-1/2 md:h-full">
            <MovieTrailer />
          </div>

          <div className="flex-1 h-1/2 md:h-full">
            <MovieDetails />
          </div>
        </>
      )}
    </div>
  );
};

export default MoviePage;

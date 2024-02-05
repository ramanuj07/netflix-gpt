import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-4 ">
      <h1 className="text-3xl font-semibold py-6 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex gap-4">
          {movies &&
            movies.map((movie) => (
              <MovieCard
                key={movie?.id}
                posterPath={movie?.poster_path}
                id={movie?.id}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

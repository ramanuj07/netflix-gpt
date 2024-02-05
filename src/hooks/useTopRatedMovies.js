import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, TOP_RATED_MOVIES } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  useEffect(() => {
    !topRatedMovies && fetchMovieList();
    // eslint-disable-next-line
  }, []);

  const fetchMovieList = async () => {
    const options = API_OPTIONS;
    const result = await fetch(TOP_RATED_MOVIES, options);
    const json = await result.json();

    dispatch(addTopRatedMovies(json.results));
  };
};

export default useTopRatedMovies;

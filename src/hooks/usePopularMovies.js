import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, POPULAR_MOVIES } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchMovieList();
    // eslint-disable-next-line
  }, []);

  const fetchMovieList = async () => {
    const options = API_OPTIONS;
    const result = await fetch(POPULAR_MOVIES, options);
    const json = await result.json();
    console.log(json);

    dispatch(addPopularMovies(json.results));
  };
};

export default usePopularMovies;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, UPCOMING_MOVIES } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  useEffect(() => {
    !upcomingMovies && fetchMovieList();
    // eslint-disable-next-line
  }, []);

  const fetchMovieList = async () => {
    const options = API_OPTIONS;
    const result = await fetch(UPCOMING_MOVIES, options);
    const json = await result.json();

    dispatch(addUpcomingMovies(json.results));
  };
};

export default useUpcomingMovies;

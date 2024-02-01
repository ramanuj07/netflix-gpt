import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, NOW_PLAYING_MOVIES } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchMovieList();
  }, []);

  const fetchMovieList = async () => {
    const options = API_OPTIONS;
    const result = await fetch(NOW_PLAYING_MOVIES, options);
    const json = await result.json();

    dispatch(addNowPlayingMovies(json.results));
  };
};

export default useNowPlayingMovies;

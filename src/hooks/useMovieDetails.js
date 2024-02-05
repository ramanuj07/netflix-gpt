import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addMovieDetails } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useMovieDetails = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  const fetchMovieDetails = async () => {
    const movieData = await fetch(
      `https://api.themoviedb.org/3/movie/${id}`,
      API_OPTIONS
    );
    const json = await movieData.json();

    dispatch(addMovieDetails(json));
  };
};

export default useMovieDetails;

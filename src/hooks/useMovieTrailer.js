import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (id) => {
  const dispatch = useDispatch();

  // fetch the video trailer here
  useEffect(() => {
    fetchMovieTrailer();
  }, []);

  const fetchMovieTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((r) => r.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));
  };
};

export default useMovieTrailer;

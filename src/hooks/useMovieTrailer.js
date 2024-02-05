import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo, clearTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (id) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  // fetch the video trailer here
  useEffect(() => {
    if (trailerVideo) {
      dispatch(clearTrailerVideo());
    }

    fetchMovieTrailer();
    // eslint-disable-next-line
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
  return trailerVideo;
};

export default useMovieTrailer;

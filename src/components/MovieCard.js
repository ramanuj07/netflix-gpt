import { IMG_BASE_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    posterPath && (
      <div className="w-56 cursor-pointer">
        <img alt="Movie Card" src={IMG_BASE_CDN_URL + posterPath} />
      </div>
    )
  );
};

export default MovieCard;

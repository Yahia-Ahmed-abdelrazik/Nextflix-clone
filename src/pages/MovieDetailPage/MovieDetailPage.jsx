import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import { MovieContext } from "../../context/MovieContext";
import { IoMdStar } from "react-icons/io"; // Importing icons for rating
import { FavoritesContext } from "../../context/FavoriteContext";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

function MovieDetailPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { fetchVideo, video } = useContext(MovieContext);
  const movie = location.state?.movie || {};
  const isFetchedRef = useRef(false); // Track if fetchVideo has been called

  const { addFavorite, removeFavorite, isFavorite } =
    useContext(FavoritesContext);

  useEffect(() => {
    if (movie.id && !isFetchedRef.current) {
      // console.log(movie);
      fetchVideo(movie.id);
      isFetchedRef.current = true; // Mark as fetched
      // console.log("fetchVideo called");
    }
  }, [movie.id, fetchVideo]);

  const handleBackClick = () => {
    navigate(-1); // Navigate to the previous page
  };

  const handleFavoriteClick = ({ movie }) => {
    if (isFavorite(movie.id)) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <div className="select-none bg-zinc-900 text-white min-h-screen lg:h-screen p-8">
      <button
        onClick={handleBackClick}
        className="text-white bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition mb-4"
      >
        &larr; Back
      </button>

      <span
        onClick={() => handleFavoriteClick({ movie })}
        className={`absolute top-4 right-4 p-2 text-4xl  ${
          isFavorite(movie.id) ? "text-red-500" : "text-gray-500"
        }`}
      >
        {isFavorite(movie.id) ? <MdFavorite /> : <MdFavoriteBorder />}
      </span>

      <div className="flex flex-col md:flex-row">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full md:w-1/3 lg:w-[30%] rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
        />

        <div className="md:ml-8 mt-4 md:mt-0">
          <h1 className="text-4xl font-bold mb-4 text-red-600">
            {movie.title}
          </h1>

          <p className="mb-4 text-white/85 tracking-wider leading-10 text-xl max-w-[85%]">
            {movie.overview}
          </p>

          <div className="flex items-center space-x-4">
            <span className="bg-red-600 px-3 py-1 rounded text-sm flex items-center">
              <IoMdStar className="text-yellow-400 mr-1" /> {movie.vote_average}{" "}
              / 10
            </span>

            <span className="bg-gray-700 px-3 py-1 rounded text-sm">
              {new Date(movie.release_date).toLocaleDateString()}{" "}
            </span>
          </div>

          {/* Movie Credits  */}
        </div>
      </div>

      {video && (
        <div className="mt-8 align-middle select-none">
          <iframe
            src={`https://www.youtube.com/embed/${video.key}`}
            title={movie.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="mx-auto rounded-lg shadow-lg w-full lg:w-[90%] h-[50vh] lg:h-[80vh]"
          />
        </div>
      )}
    </div>
  );
}

export default MovieDetailPage;

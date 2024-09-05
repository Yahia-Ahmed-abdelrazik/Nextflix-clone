import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import StarRating from "../stars/StarRating";
import { FavoritesContext } from "../../context/FavoriteContext";
import { useContext } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

// eslint-disable-next-line react/prop-types
function MovieSlider({ movies, loading, sliderId }) {
  const { addFavorite, removeFavorite, isFavorite } =
    useContext(FavoritesContext);
  const navigate = useNavigate();

  if (loading) return <div>Loading...</div>;

  const handleClick = (movie) => {
    navigate(`/movie/${movie.id}`, { state: { movie } }); // Navigate to the movie detail page and pass movie data
  };

  const handleFavoriteClick = ({ movie }) => {
    if (isFavorite(movie.id)) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <div id={sliderId} className="p-4 select-none">
      <Swiper
        spaceBetween={12}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
        className="mySwiper"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id} className="relative">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute  top-0 left-0 h-full w-full bg-black bg-opacity-50 p-2 text-white text-sm opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center align-middle">
              <div className="mt-20">
                <h3 className="font-bold text-lg text-red-500 whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px]">
                  {movie.title}
                </h3>
                <p className="truncate mt-3">{movie.overview}</p>
                <StarRating rating={movie.vote_average} />
              </div>

              {/* Favorite button */}
              <span
                onClick={() => handleFavoriteClick({ movie })}
                className={`absolute top-4 right-4 p-2 text-4xl  ${
                  isFavorite(movie.id) ? "text-red-500" : "text-gray-500"
                }`}
              >
                {isFavorite(movie.id) ? <MdFavorite /> : <MdFavoriteBorder />}
              </span>

              {/* <button
                onClick={() => handleFavoriteClick({ movie })}
                className={`absolute top-4 right-4 text-white p-2 rounded ${
                  isFavorite(movie.id) ? "bg-red-500" : "bg-gray-500"
                }`}
              >
                {isFavorite(movie.id) ? "Unfavorite" : "Favorite"}
              </button> */}

              <button
                onClick={() => handleClick(movie)}
                className="mt-auto mb-2  bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
              >
                View Details
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MovieSlider;

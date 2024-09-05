import { useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { FavoritesContext } from "../../context/FavoriteContext";

function MyList() {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  const handleRemove = (movieId) => {
    removeFavorite(movieId);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-6 pt-[10%] select-none">
        <h2 className="text-3xl font-semibold text-white mb-6">
          Your Favorites
        </h2>

        {favorites.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 gap-6">
            {favorites.map((movie) => (
              <div
                key={movie.id}
                className="relative bg-gray-800 p-4 rounded-lg shadow-lg "
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-auto mb-4 rounded"
                />
                <h3 className="text-xl mt-auto font-semibold text-white whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px]">
                  {movie.title}
                </h3>
                <p className="text-gray-400">{movie.release_date}</p>
                <p className="text-gray-400">Rating: {movie.vote_average}/10</p>

                {/* Remove Button */}
                <button
                  onClick={() => handleRemove(movie.id)}
                  className="mt-3 w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                >
                  Remove from Favorites
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400">No favorite movies yet.</p>
        )}
      </div>
    </div>
  );
}

export default MyList;

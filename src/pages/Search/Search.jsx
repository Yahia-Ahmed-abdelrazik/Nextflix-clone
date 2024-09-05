import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjUyZGIzYjA4OTNkYThiYzQ2N2Y1MzA1ZGEwOGEyNiIsIm5iZiI6MTcyNTQzODc4OC44OTE5MzYsInN1YiI6IjY2ZDE2Y2JiNmNiZjk2MjNlNjgxMWE1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RL11i8ws_cGnDmAiakixdv2lIN0YNWHF220cBd52JJA",
  },
};

function Search() {
  const [movies, setMovies] = useState([]);
  const query = useQuery();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState(query.get("query") || "");

  useEffect(() => {
    if (searchTerm) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=1`,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          setMovies(response.results);
        })
        .catch((err) => console.error(err));
    }
  }, [searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`);
    }
  };

  const handleClick = (movie) => {
    navigate(`/movie/${movie.id}`, { state: { movie } });
  };

  const handleBackClick = () => {
    navigate(-1); // Navigates to the previous page
  };

  return (
    <div className="container mx-auto px-4 py-6 select-none ">
      <button
        onClick={handleBackClick}
        className="text-white bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition mb-4"
      >
        &larr; Back
      </button>

      <form onSubmit={handleSearchSubmit} className="mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search for a movie..."
          className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </form>

      {movies.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="relative bg-gray-800 p-4 rounded-lg shadow-lg group"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full  h-[75%] mb-4 rounded"
              />
              <h3 className="text-xl font-semibold text-white whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px]">
                {movie.title}
              </h3>
              <p className="text-gray-400">{movie.release_date}</p>

              <button
                onClick={() => handleClick(movie)}
                className="mt-4  w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-400">No results found for "{searchTerm}".</p>
      )}
    </div>
  );
}

export default Search;

import { useContext } from "react";
import { MovieContext } from "../../context/MovieContext";
import MovieSlider from "./MovieSlider";

function PlayedMoviesSlider() {
  const { movies, loading } = useContext(MovieContext);

  return <MovieSlider movies={movies} loading={loading} sliderId="played" />;
}

export default PlayedMoviesSlider;

import { useContext } from "react";
import { MovieContext } from "../../context/MovieContext";
import MovieSlider from "./MovieSlider";

function PopularMoviesSlider() {
  const { popularMovies, loading } = useContext(MovieContext);

  return (
    <MovieSlider movies={popularMovies} loading={loading} sliderId="popular" />
  );
}

export default PopularMoviesSlider;

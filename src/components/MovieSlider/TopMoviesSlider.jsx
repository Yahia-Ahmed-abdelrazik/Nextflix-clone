import { useContext } from "react";
import { MovieContext } from "../../context/MovieContext";
import MovieSlider from "./MovieSlider";

function PopularMoviesSlider() {
  const { topMovies, loading } = useContext(MovieContext);

  return <MovieSlider movies={topMovies} loading={loading} sliderId="top" />;
}

export default PopularMoviesSlider;

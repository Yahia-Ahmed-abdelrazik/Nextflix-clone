import { useContext } from "react";
import { MovieContext } from "../../context/MovieContext";
import MovieSlider from "./MovieSlider";

function Upcoming() {
  const { upComingMovies, loading } = useContext(MovieContext);

  return <MovieSlider movies={upComingMovies} loading={loading} />;
}

export default Upcoming;

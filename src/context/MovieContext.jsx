import { createContext, useState, useEffect } from "react";

export const MovieContext = createContext();

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjUyZGIzYjA4OTNkYThiYzQ2N2Y1MzA1ZGEwOGEyNiIsIm5iZiI6MTcyNTAwMjk4My40MTQ3MTcsInN1YiI6IjY2ZDE2Y2JiNmNiZjk2MjNlNjgxMWE1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zF9djG0LaG3vb6Rvd4o9Xi4ozdeQEJ9qWqFb8r5dZSM",
  },
};

export function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [upComingMovies, setUpComingMovies] = useState([]);
  const [randomMovie, setRandomMovie] = useState(null);
  const [video, setVideo] = useState(null); // Add state for video
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [airingToday, setAiringToday] = useState([]);
  const [onTheAir, setOnTheAir] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);

  useEffect(() => {
    // console.log("useEffect called");
    // Fetch movies
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setLoading(false);
      });
    // Fetch popular movies
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setPopularMovies(data.results);
      })
      .catch((error) => {
        console.error("Error fetching popular movies:", error);
      });
    // Fetch top movies
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setTopMovies(data.results);
      })
      .catch((error) => {
        console.error("Error fetching top movies:", error);
      });

    // Fetch upcoming movies
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setUpComingMovies(response.results);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (movies.length > 1) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      setRandomMovie(movies[randomIndex]);
      // fetchVideo(movies[randomIndex].id);
    }
  }, [movies]);

  //featch details of a movie
  // const fetchMovieDetails = (movieId) => {
  //   fetch(
  //     `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
  //     options
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setMovieDetails(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching movie details:", error);
  //     });
  // };

  //featch video of a movie

  const fetchVideo = (movieId) => {
    // console.log("featch");
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        const trailer = data.results.find((video) => video.type === "Trailer");
        setVideo(trailer);
      })
      .catch((error) => {
        console.error("Error fetching video:", error);
      });
  };

  //SERIES
  const FetchSeries = (series) => {
    // console.log("featch series");
    fetch(
      ` https://api.themoviedb.org/3/tv/${series}?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        if (series == "airing_today") {
          setAiringToday(response.results);
        } else if (series == "on_the_air") {
          setOnTheAir(response.results);
        } else if (series == "popular") {
          setPopularSeries(response.results);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        randomMovie,
        video,
        loading,
        popularMovies,
        topMovies,
        upComingMovies,
        fetchVideo,
        FetchSeries,
        airingToday,
        onTheAir,
        popularSeries,
        // fetchMovieDetails,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

import MovieSlider from "../../components/MovieSlider/MovieSlider";
import Navbar from "../../components/Navbar/Navbar";
import { useContext, useEffect } from "react";
import { MovieContext } from "../../context/MovieContext";

function Series() {
  const { airingToday, FetchSeries, onTheAir, popularSeries, loading } =
    useContext(MovieContext);

  useEffect(() => {
    FetchSeries("airing_today");

    FetchSeries("on_the_air");
    FetchSeries("popular");
  }, []);
  //   console.log(onTheAir);
  return (
    <div className="">
      <Navbar />

      <div className="pt-[20%] lg:pt-[10%]">
        <h2 className="text-2xl font-bold text-white p-4">Airing Today</h2>
        <MovieSlider
          movies={airingToday}
          loading={loading}
          sliderId="airingToday"
        />

        <h2 className="text-2xl font-bold text-white p-4">Popular</h2>
        <MovieSlider
          movies={popularSeries}
          loading={loading}
          sliderId="popularSeries"
        />

        <h2 className="text-2xl font-bold text-white p-4">On The Air</h2>
        <MovieSlider movies={onTheAir} loading={loading} sliderId="onTheAir" />
      </div>
    </div>
  );
}

export default Series;

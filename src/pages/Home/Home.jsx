//components
import Navbar from "../../components/Navbar/Navbar";
import Billbord from "../../components/Billbord/Billbord";
import PopularMoviesSlider from "../../components/MovieSlider/PopulerMoviesSlider";
import PlayedMoviesSlider from "../../components/MovieSlider/PlayedMoviesSlider";
import TopMoviesSlider from "../../components/MovieSlider/TopMoviesSlider";
import Upcoming from "../../components/MovieSlider/Upcoming";
import Footer from "../../components/Footer/Footer";

function Home() {
  // console.log("Home");
  return (
    <div>
      <Navbar />

      <Billbord />

      <h2 className="text-2xl font-bold text-white p-4">Popular Movies</h2>
      <PopularMoviesSlider />

      <h2 className="text-2xl font-bold text-white p-4">Top Rated</h2>
      <TopMoviesSlider />

      <h2 className="text-2xl font-bold text-white p-4">Playing Now</h2>
      <PlayedMoviesSlider />

      <h2 className="text-2xl font-bold text-white p-4">Coming Soon</h2>
      <Upcoming />

      <Footer />
    </div>
  );
}

export default Home;

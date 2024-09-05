import { useContext } from "react";
import { MovieContext } from "../../context/MovieContext";
import { CgInfo } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

function Billboard() {
  const navigate = useNavigate();
  const { randomMovie } = useContext(MovieContext);
  const handleClick = (movie) => {
    navigate(`/movie/${movie.id}`, { state: { movie } }); // Navigate to the movie detail page and pass movie data
  };

  return (
    <div className="relative max-h-[100vh] h-[56.25vw] select-none  overflow-hidden  ">
      <img
        src={`https://image.tmdb.org/t/p/original${randomMovie?.backdrop_path}`}
        alt={randomMovie?.title}
        className="w-full h-[56.25vw] object-cover brightness-[60%] "
      />
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-2xl">
          {randomMovie?.title}
        </p>

        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 lg:w-[50%] md:w-[80%] w-[90%] drop-shadow-2xl line-clamp-3">
          {randomMovie?.overview}
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <button
            onClick={() => handleClick(randomMovie)}
            className="text-white bg-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition"
          >
            <CgInfo className="mr-1" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}

// function Billboard() {
//   const { randomMovie, video, loading } = useContext(MovieContext);

//   if (loading) return <p>Loading...</p>;

//   if (!randomMovie) return <p>No movie available</p>;

//   const videoUrl = video ? `https://www.youtube.com/embed/${video.key}` : null;

//   return (
//     <div className="relative h-screen bg-gray-800 text-white">
//       <div className="absolute inset-0">
//         <img
//           src={`https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`}
//           alt={randomMovie.title}
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//       </div>
//       <div className="relative z-10 p-8">
//         <h1 className="text-4xl font-bold mb-4">{randomMovie.title}</h1>
//         <p className="text-lg mb-4">{randomMovie.overview}</p>
//         {videoUrl && (
//           <div className="mt-4">
//             <iframe
//               width="560"
//               height="315"
//               src={videoUrl}
//               title={randomMovie.title}
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           </div>
//         )}
//         <button className="bg-red-600 text-white px-4 py-2 rounded">
//           Watch Now
//         </button>
//       </div>
//     </div>
//   );
// }

export default Billboard;

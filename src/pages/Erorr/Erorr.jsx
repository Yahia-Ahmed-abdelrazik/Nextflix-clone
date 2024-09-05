import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); // Redirect to the homepage
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="text-center text-white">
        <h1 className="text-9xl font-bold">404</h1>
        <h2 className="text-3xl md:text-5xl mt-4">Oops! Page Not Found</h2>
        <p className="text-lg md:text-2xl mt-4">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <button
          onClick={handleGoHome}
          className="mt-6 px-6 py-3 bg-red-600 text-white text-lg rounded hover:bg-red-700 transition"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;

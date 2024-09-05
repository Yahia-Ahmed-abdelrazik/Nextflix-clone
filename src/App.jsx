import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
//pages
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
//firebase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
//toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MovieDetailPage from "./pages/MovieDetailPage/MovieDetailPage";
import ErrorPage from "./pages/Erorr/Erorr";
import Search from "./pages/Search/Search";
import Series from "./pages/Series/Series";
import MyList from "./pages/MyList/MyList";

function App() {
  const navigate = useNavigate();

  // Prevent user not logged in
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (window.location.pathname === "/login") {
          navigate("/"); // Redirect to home if user is on login page and authenticated
        }
      } else {
        if (window.location.pathname !== "/login") {
          navigate("/login"); // Redirect to login if not authenticated
        }
      }
    });
  }, [navigate]);

  return (
    <>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movie/:movieId" element={<MovieDetailPage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/series" element={<Series />} />
        <Route path="/mylist" element={<MyList />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;

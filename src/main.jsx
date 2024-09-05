import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom"; // Import Router
import App from "./App.jsx";
import "./index.css";
import { MovieProvider } from "./context/MovieContext.jsx";
import { FavoritesProvider } from "./context/FavoriteContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <MovieProvider>
        <FavoritesProvider>
          <App />
        </FavoritesProvider>
      </MovieProvider>
    </Router>
  </StrictMode>
);

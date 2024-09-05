# Movie Project

## Overview

This project is a movie application built with React and Vite. It features browsing popular movies, viewing detailed movie information, and managing favorite movies. The app fetches data from various APIs and includes functionalities for series exploration and user interaction.

## Features

- **Movie Browsing:** View popular, top-rated, and upcoming movies.
- **Movie Details:** Access detailed movie information and watch trailers.
- **Favorites Management:** Add or remove movies from a favorites list.
- **Series Exploration:** Discover TV series that are airing today, popular series, and those currently on the air.
- **Responsive Design:** Optimized for both desktop and mobile devices.

## Tech Stack

- **React:** A library for building user interfaces.
- **Vite:** A fast build tool for development and production.
- **Tailwind CSS:** A utility-first CSS framework for styling.
- **TMDb API:** Provides movie and series data.
- **Firebase:** For authentication (if used).

## Setup

1. **Clone the Repository:**

   ```bash
   git clone <https://github.com/Yahia-Ahmed-abdelrazik/Nextflix-clone>
   cd <Nextflix-clone>
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Run the Development Server:**

   ```bash
   npm run dev
   ```

4. **Build the Project:**
   ```bash
   npm run build
   ```

## API Endpoints

- **Movies:**

  ```plaintext
  Now Playing: https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1
  Popular: https://api.themoviedb.org/3/movie/popular?language=en-US&page=1
  Top Rated: https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1
  Upcoming: https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1
  Video: https://api.themoviedb.org/3/movie/{movieId}/videos?language=en-US
  ```

- **Series:**
  ```plaintext
  Airing Today: https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1
  On The Air: https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1
  Popular: https://api.themoviedb.org/3/tv/popular?language=en-US&page=1
  ```

## Components

- **MovieSlider:** A reusable component for displaying movie sliders.
- **StarRating:** Displays movie ratings with star icons.
- **AccountMenu:** For user account management and logout.
- **MobileMenu:** Responsive navigation menu for mobile devices.
- **MovieDetailPage:** Shows detailed movie information and trailers.

## Contexts

- **MovieContext:** Manages movie data, including fetching movies, handling video details, and series data.
- **FavoritesContext:** Manages the favorites list, including adding, removing, and checking favorites.

## Contributing

Feel free to fork the repository and submit pull requests. For major changes, please discuss them via issues before contributing.

## License

Licensed under the MIT License. Yahi Ahmed .

## Acknowledgments

- [Vite](https://vitejs.dev/) for the fast build tool.
- [React](https://reactjs.org/) for building the UI.
- [TMDb API](https://www.themoviedb.org/documentation/api) for movie and series data.

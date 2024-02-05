import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    trailerVideo: null,
    movieDetails: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },

    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },

    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },

    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },

    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    clearTrailerVideo: (state, action) => {
      state.trailerVideo = null;
    },
    addMovieDetails: (state, action) => {
      state.movieDetails = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  clearTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addMovieDetails,
} = moviesSlice.actions;
export default moviesSlice.reducer;

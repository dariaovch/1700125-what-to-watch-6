import {createReducer} from '@reduxjs/toolkit';
import {
  loadMovies,
  getMovieData,
  getMovieReviews,
  getFavoriteMovies,
  getPromoMovie,
} from 'src/store/actions/data-actions';
import {filterListByGenre} from 'src/store/actions/list-actions';


const initialState = {
  genre: `All Genres`,
  movies: [],
  moviesFilteredByGenere: [],
  currentMovie: null,
  movieReviews: [],
  favoriteMovies: [],
  promoMovie: null,
  isDataLoaded: false,
};

const data = createReducer(initialState, (builder) => {
  builder.addCase(loadMovies, (state, action) => {
    state.movies = action.payload;
    state.isDataLoaded = true;
  });
  builder.addCase(getMovieData, (state, action) => {
    state.currentMovie = action.payload;
  });
  builder.addCase(getMovieReviews, (state, action) => {
    state.movieReviews = action.payload;
  });
  builder.addCase(filterListByGenre, (state, action) => {
    state.genre = action.payload;
  });
  builder.addCase(getFavoriteMovies, (state, action) => {
    state.favoriteMovies = action.payload;
  });
  builder.addCase(getPromoMovie, (state, action) => {
    state.promoMovie = action.payload;
  });
});

export {data};

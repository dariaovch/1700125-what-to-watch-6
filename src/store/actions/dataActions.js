import {ActionType} from './actionType';

export const loadMovies = (movies) => ({
  type: ActionType.LOAD_MOVIES,
  payload: movies,
});

export const getMovieData = (movieData) => ({
  type: ActionType.GET_MOVIE_DATA,
  payload: movieData,
});

export const getMovieReviews = (comments) => ({
  type: ActionType.GET_COMMENTS,
  payload: comments,
});

export const getFavoriteMovies = (movies) => ({
  type: ActionType.GET_FAVORITE_MOVIES,
  payload: movies,
});

export const getPromoMovie = (movie) => ({
  type: ActionType.GET_PROMO_MOVIE,
  payload: movie,
});

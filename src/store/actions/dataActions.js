import {createAction} from '@reduxjs/toolkit';
import {ActionType} from 'src/store/actions/actionType';

export const loadMovies = createAction(ActionType.LOAD_MOVIES, (movies) => {
  return {
    payload: movies,
  };
});

export const getMovieData = createAction(ActionType.GET_MOVIE_DATA, (movieData) => {
  return {
    payload: movieData,
  };
});

export const getMovieReviews = createAction(ActionType.GET_COMMENTS, (comments) => {
  return {
    payload: comments,
  };
});

export const getFavoriteMovies = createAction(ActionType.GET_FAVORITE_MOVIES, (movies) => {
  return {
    payload: movies,
  };
});

export const getPromoMovie = createAction(ActionType.GET_PROMO_MOVIE, (movie) => {
  return {
    payload: movie,
  };
});

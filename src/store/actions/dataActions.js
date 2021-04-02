import {ActionType} from 'src/store/actions/actionType';

export const loadMovies = (movies) => ({
  type: ActionType.LOAD_MOVIES,
  payload: movies,
});

export const getMovieData = (movieData) => ({
  type: ActionType.GET_MOVIE_DATA,
  payload: movieData,
});

export const getComments = (comments) => ({
  type: ActionType.GET_COMMENTS,
  payload: comments,
});

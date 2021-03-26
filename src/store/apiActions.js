import {ActionCreator} from "src/store/action";
import {AuthStatus} from 'src/store/auth';

export const fetchMovies = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => dispatch(ActionCreator.loadMovies(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreator.requireAuth(AuthStatus.AUTH)))
    .catch(() => dispatch(ActionCreator.requireAuth(AuthStatus.NO_AUTH)))
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.requireAuth(AuthStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/`)))
);

export const getCurrentUser = () => (dispatch, _getState, api) => (
  api.get(`login`)
    .then(({data}) => dispatch(ActionCreator.getUserData(data)))
);

export const getCurrentMovieData = (movieId) => (dispatch, _getState, api) => (
  api.get(`films/${movieId}`)
    .then(({data}) => dispatch(ActionCreator.getMovieData(data)))
);

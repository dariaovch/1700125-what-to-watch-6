import {ActionCreator} from "src/store/action";
import {AuthStatus} from "src/utils/auth";


export const fetchMovies = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => dispatch(ActionCreator.loadMovies(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreator.requireAuth(AuthStatus.AUTH)))
    .catch(() => {})
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.requireAuth(AuthStatus.AUTH)))
);

export const getCurrentUser = () => (dispatch, _getState, api) => (
  api.get(`login`)
    .then(({data}) => dispatch(ActionCreator.getUserData(data)))
);

export const getCurrentMovieData = (movieId) => (dispatch, _getState, api) => (
  api.get(`films/${movieId}`)
    .then(({data}) => dispatch(ActionCreator.getMovieData(data)))
);

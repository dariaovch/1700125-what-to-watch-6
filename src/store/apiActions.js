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

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`login`, {email, password})
    .then(() => dispatch(ActionCreator.requireAuth(AuthStatus.AUTH)))
);

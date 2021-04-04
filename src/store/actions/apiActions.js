import {AuthStatus} from 'src/store/auth';
import {redirectToRoute} from 'src/store/actions/appActions';
import {getMovieData, loadMovies, getMovieReviews, getFavoriteMovies, getPromoMovie} from 'src/store/actions/dataActions';
import {getUserData, requireAuth} from 'src/store/actions/userActions';

export const fetchMovies = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => dispatch(loadMovies(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(requireAuth(AuthStatus.AUTH)))
    .catch(() => dispatch(requireAuth(AuthStatus.NO_AUTH)))
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(requireAuth(AuthStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(`/`)))
);

export const getCurrentUser = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(({data}) => dispatch(getUserData(data)))
);

export const getCurrentMovieData = (movieId) => (dispatch, _getState, api) => (
  api.get(`/films/${movieId}`)
    .then(({data}) => dispatch(getMovieData(data)))
);

export const getComments = (movieId) => (dispatch, _getState, api) => (
  api.get(`/comments/${movieId}`)
    .then(({data}) => dispatch(getMovieReviews(data)))
);

export const postComment = (movieId, {rating, comment}) => (dispatch, _getState, api) => (
  api.post(`/comments/${movieId}`, {rating, comment})
    .then(({data}) => dispatch(getMovieReviews(data)))
    .then(() => dispatch(redirectToRoute(`/films/${movieId}`)))
);

export const getMoviesToWatch = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => dispatch(getFavoriteMovies(data)))
);

export const changeFavoriteStatus = (movieId, statusCode) => (dispatch, _getState, api) => (
  api.post(`/favorite/${movieId}/${statusCode}`)
    .then(() => dispatch(redirectToRoute(`/mylist`)))
);

export const getPromo = () => (dispatch, _getState, api) => (
  api.get(`/films/promo`)
    .then(({data}) => dispatch(getPromoMovie(data)))
);


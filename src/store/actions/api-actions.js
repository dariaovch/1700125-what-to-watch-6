import {AuthStatus} from 'src/store/auth';
import {redirectToRoute} from 'src/store/actions/app-actions';
import {getMovieData, loadMovies, getMovieReviews, getFavoriteMovies, getPromoMovie} from 'src/store/actions/data-actions';
import {getUserData, requireAuth} from 'src/store/actions/user-actions';
import {formatMovieObjectKeys} from 'src/utils/format-movie-object-keys';

export const fetchMovies = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => {
      const movies = data.map((item) => formatMovieObjectKeys(item));
      dispatch(loadMovies(movies));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(requireAuth(AuthStatus.AUTH)))
    .catch(() => dispatch(requireAuth(AuthStatus.NO_AUTH)))
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(({data}) => dispatch(getUserData(data)))
    .then(() => dispatch(requireAuth(AuthStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(`/`)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(`/logout`)
    .then(() => dispatch(requireAuth(AuthStatus.NO_AUTH)))
    .then(() => dispatch(getUserData(null)))
    .then(() => dispatch(redirectToRoute(`/`)))
);

export const getCurrentUser = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(({data}) => dispatch(getUserData(data)))
);

export const getCurrentMovieData = (movieId) => (dispatch, _getState, api) => (
  api.get(`/films/${movieId}`)
    .then(({data}) => {
      const movie = formatMovieObjectKeys(data);
      dispatch(getMovieData(movie));
    })
    .then(() => dispatch(redirectToRoute(`/films/${movieId}`)))
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
    .then(({data}) => {
      const movies = data.map((item) => formatMovieObjectKeys(item));
      dispatch(getFavoriteMovies(movies));
    })
);

export const changeFavoriteStatus = (movieId, statusCode) => (dispatch, _getState, api) => (
  api.post(`/favorite/${movieId}/${statusCode}`)
    .then(() => dispatch(redirectToRoute(`/mylist`)))
    .catch(() => dispatch(redirectToRoute(`/login`)))
);

export const getPromo = () => (dispatch, _getState, api) => (
  api.get(`/films/promo`)
    .then(({data}) => {
      const movie = formatMovieObjectKeys(data);
      dispatch(getPromoMovie(movie));
    })
);


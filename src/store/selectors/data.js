import {createSelector} from 'reselect';
import {NameSpace} from 'src/store/reducers/rootReducer';
import {filterMoviesListByGenre} from 'src/utils/filterMoviesListByGenre';

export const getMovies = (state) => state[NameSpace.DATA].movies;

export const getCurrentMovie = (state) => state[NameSpace.DATA].currentMovie;

export const getMovieReviews = (state) => state[NameSpace.DATA].movieReviews;

export const getGenre = (state) => state[NameSpace.DATA].genre;

export const getDataLoadedStatus = (state) => state[NameSpace.DATA].isDataLoaded;

export const getFavoriteMovies = (state) => state[NameSpace.DATA].favoriteMovies;

export const getPromoMovie = (state) => state[NameSpace.DATA].promoMovie;

export const getMoviesByGenre = createSelector(
    getMovies,
    getGenre,
    (movies, genre) => filterMoviesListByGenre(movies, genre)
);

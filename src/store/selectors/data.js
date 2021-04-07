import {createSelector} from 'reselect';
import {NameSpace} from 'src/store/reducers/root-reducer';
import {filterMoviesListByGenre} from 'src/utils/filter-movies-list-by-genre';
import {filterMoviesListBySimilarity} from 'src/utils/filter-movies-list-by-similiarity';

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

export const getSimiliarMovies = createSelector(
    getMovies,
    getCurrentMovie,
    (movies, currentMovie) => filterMoviesListBySimilarity(movies, currentMovie)
);

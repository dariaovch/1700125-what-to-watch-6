import {NameSpace} from 'src/store/rootReducer';

export const getMovies = (state) => state[NameSpace.DATA].movies;

export const getCurrentMovie = (state) => state[NameSpace.DATA].currentMovie;

export const getMovieReviews = (state) => state[NameSpace.DATA].movieReviews;

export const getGenre = (state) => state[NameSpace.DATA].genre;

export const getDataLoadedStatus = (state) => state[NameSpace.DATA].isDataLoaded;

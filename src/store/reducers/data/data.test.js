import {data} from './data';
import {ActionType} from '../../actions/actionType';
import {mockMovies} from '../../../mocks/films';
import {mockReviews} from '../../../mocks/reviews';

describe(`Data reducers work correctly`, () => {
  it(`Should return initial state`, () => {
    const state = {
      genre: `All Genres`,
      movies: [],
      moviesFilteredByGenere: [],
      currentMovie: null,
      movieReviews: [],
      favoriteMovies: [],
      promoMovie: null,
      isDataLoaded: false,
    };

    expect(data(undefined, {})).toEqual(state);
  });

  it(`Should return movies array`, () => {
    const state = {movies: [], isDataLoaded: false};
    const loadMovies = {
      type: ActionType.LOAD_MOVIES,
      payload: mockMovies,
    };

    expect(data(state, loadMovies)).toEqual({movies: mockMovies, isDataLoaded: true});
  });

  it(`Should return selected movie object`, () => {
    const state = {currentMovie: null};
    const getCurrentMovie = {
      type: ActionType.GET_MOVIE_DATA,
      payload: mockMovies[1],
    };

    expect(data(state, getCurrentMovie)).toEqual({currentMovie: mockMovies[1]});
  });

  it(`Should return reviews array`, () => {
    const state = {movieReviews: []};
    const getComments = {
      type: ActionType.GET_COMMENTS,
      payload: mockReviews,
    };

    expect(data(state, getComments)).toEqual({movieReviews: mockReviews});
  });

  it(`Should return new genre title`, () => {
    const state = {genre: `All genres`};
    const filterList = {
      type: ActionType.FILTER_LIST,
      payload: `Drama`,
    };

    expect(data(state, filterList)).toEqual({genre: `Drama`});
  });

  it(`Should return favorite movies array`, () => {
    const state = {favoriteMovies: []};
    const getFavorite = {
      type: ActionType.GET_FAVORITE_MOVIES,
      payload: mockMovies,
    };

    expect(data(state, getFavorite)).toEqual({favoriteMovies: mockMovies});
  });

  it(`Should return promo movie object`, () => {
    const state = {promoMovie: null};
    const getPromo = {
      type: ActionType.GET_PROMO_MOVIE,
      payload: mockMovies[0],
    };

    expect(data(state, getPromo)).toEqual({promoMovie: mockMovies[0]});
  });
});

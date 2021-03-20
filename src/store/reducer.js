import {ActionType} from 'src/store/action';
import {movies} from '../mocks/films';


const initialState = {
  genre: `All Genres`,
  moviesList: movies,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FILTER_CRIME:
      return {
        ...state,
        genre: `Crime`,
        moviesList: action.payload,
      };

    case ActionType.FILTER_DOCUMENTARY:
      return {
        ...state,
        genre: `Documentary`,
        moviesList: action.payload,
      };

    case ActionType.FILTER_DRAMAS:
      return {
        ...state,
        genre: `Dramas`,
        moviesList: action.payload,
      };

    case ActionType.FILTER_HORROR:
      return {
        ...state,
        genre: `Horror`,
        moviesList: action.payload,
      };

    case ActionType.FILTER_FAMILY:
      return {
        ...state,
        genre: `Kids & Family`,
        moviesList: action.payload,
      };

    case ActionType.FILTER_SCIFI:
      return {
        ...state,
        genre: `Sci-Fi`,
        moviesList: action.payload,
      };

    case ActionType.FILTER_ROMANCE:
      return {
        ...state,
        genre: `Romance`,
        moviesList: action.payload,
      };

    case ActionType.FILTER_THRILLER:
      return {
        ...state,
        genre: `Thriller`,
        moviesList: action.payload,
      };

    case ActionType.RESET_LIST:
      return {
        ...initialState,
      };

  }

  return state;
};

export {reducer};


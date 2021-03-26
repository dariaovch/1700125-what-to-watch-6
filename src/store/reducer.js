import {ActionType} from 'src/store/action';
import {AuthStatus} from 'src/store/auth';

const initialState = {
  genre: `All Genres`,
  movies: [],
  authStatus: AuthStatus.NO_AUTH,
  userData: null,
  currentMovie: null,
  isDataLoaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return {
        ...state,
        movies: action.payload,
        isDataLoaded: true,
      };
    case ActionType.FILTER_LIST:
      return {
        ...state,
        genre: action.payload.genre,
        movies: action.payload.movies,
      };
    case ActionType.REQUIRE_AUTH:
      return {
        ...state,
        authStatus: action.payload,
      };
    case ActionType.GET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    case ActionType.GET_MOVIE_DATA:
      return {
        ...state,
        currentMovie: action.payload,
      };
  }

  return state;
};

export {reducer};


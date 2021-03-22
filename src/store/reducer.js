import {ActionType} from 'src/store/action';
import {AuthStatus} from 'src/utils/auth';

const initialState = {
  genre: `All Genres`,
  movies: [],
  isDataLoaded: false,
  authStatus: AuthStatus.NO_AUTH,
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
  }

  return state;
};

export {reducer};


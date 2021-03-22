import {ActionType} from 'src/store/action';

const initialState = {
  genre: `All Genres`,
  movies: [],
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

  }

  return state;
};

export {reducer};


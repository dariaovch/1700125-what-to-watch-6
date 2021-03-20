import {ActionType} from 'src/store/action';
import {movies} from 'src/mocks/films';


const initialState = {
  genre: `All Genres`,
  movies,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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


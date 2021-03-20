import {ActionType} from 'src/store/action';
import {movies} from '../mocks/films';


const initialState = {
  genre: `All Genres`,
  moviesList: movies,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FILTER_LIST:
      return {
        ...state,
        genre: action.payload.genre,
        moviesList: action.payload.moviesList,
      };
  }

  return state;
};

export {reducer};


import {ActionType} from 'src/store/actions/actionType';

const initialState = {
  genre: `All Genres`,
  movies: [],
  currentMovie: null,
  movieReviews: [],
  isDataLoaded: false,
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return {
        ...state,
        movies: action.payload,
        isDataLoaded: true,
      };
    case ActionType.GET_MOVIE_DATA:
      return {
        ...state,
        currentMovie: action.payload,
      };
    case ActionType.GET_COMMENTS:
      return {
        ...state,
        movieReviews: action.payload,
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

export {data};

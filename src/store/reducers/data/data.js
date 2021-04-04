import {ActionType} from '../../actions/actionType';

const initialState = {
  genre: `All Genres`,
  movies: [],
  moviesFilteredByGenere: [],
  currentMovie: null,
  movieReviews: [],
  favoriteMovies: [],
  promoMovie: null,
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
        genre: action.payload,
      };
    case ActionType.GET_FAVORITE_MOVIES:
      return {
        ...state,
        favoriteMovies: action.payload,
      };
    case ActionType.GET_PROMO_MOVIE:
      return {
        ...state,
        promoMovie: action.payload,
      };
  }

  return state;
};

export {data};

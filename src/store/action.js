export const ActionType = {
  FILTER_LIST: `filterMovies/filterListByGenre`,
  LOAD_MOVIES: `data/loadMovies`,
  REDIRECT_TO_ROUTE: `app/redirectToRoute`,
  REQUIRE_AUTH: `user/requireAuth`,
  GET_USER_DATA: `user/getUserData`,
  GET_MOVIE_DATA: `data/getMovieData`,
};

export const ActionCreator = {
  filterListByGenre: (item, movies) => ({
    type: ActionType.FILTER_LIST,
    payload: {
      genre: item,
      movies: item.id === `00` ? movies : movies.filter((movie) => movie.genre === item.title),
    },
  }),
  loadMovies: (movies) => ({
    type: ActionType.LOAD_MOVIES,
    payload: movies,
  }),
  requireAuth: (status) => ({
    type: ActionType.REQUIRE_AUTH,
    payload: status,
  }),
  getUserData: (userData) => ({
    type: ActionType.GET_USER_DATA,
    payload: userData,
  }),
  getMovieData: (movieData) => ({
    type: ActionType.GET_MOVIE_DATA,
    payload: movieData,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
};


export const ActionType = {
  FILTER_LIST: `filterMovies/filterListByGenre`,
  LOAD_MOVIES: `data/loadMovies`,
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
  })
};


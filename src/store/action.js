import {movies} from "src/mocks/films";

export const ActionType = {
  FILTER_LIST: `filterMovies/filterListByGenre`,
};

export const ActionCreator = {
  filterListByGenre: (item) => ({
    type: ActionType.FILTER_LIST,
    payload: {
      genre: item,
      moviesList: item.id === `00` ? movies : movies.filter((movie) => movie.genre === item.title),
    },
  }),
};


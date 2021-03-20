import {filterListByGenre} from "../utils/filterMovies";

export const ActionType = {
  FILTER_LIST: `filterMovies/filterListByGenre`,
};

export const ActionCreator = {
  filterListByGenre: (item) => ({
    type: ActionType.FILTER_LIST,
    payload: {
      genre: item,
      moviesList: filterListByGenre(item),
    },
  }),
};


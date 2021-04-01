import {ActionType} from 'src/store/actions/actionType';

export const filterListByGenre = (item, movies) => ({
  type: ActionType.FILTER_LIST,
  payload: {
    genre: item,
    movies: item.id === `00` ? movies : movies.filter((movie) => movie.genre === item.title),
  },
});

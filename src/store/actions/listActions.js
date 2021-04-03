import {ActionType} from 'src/store/actions/actionType';

export const filterListByGenre = (item) => ({
  type: ActionType.FILTER_LIST,
  payload: {
    genre: item,
  },
});

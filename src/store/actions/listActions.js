import {ActionType} from './actionType';

export const filterListByGenre = (item) => ({
  type: ActionType.FILTER_LIST,
  payload: item,
});

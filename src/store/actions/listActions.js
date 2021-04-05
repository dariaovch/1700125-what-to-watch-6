import {createAction} from '@reduxjs/toolkit';
import {ActionType} from 'src/store/actions/actionType';

export const filterListByGenre = createAction(ActionType.FILTER_LIST, (item) => {
  return {
    payload: item,
  };
});

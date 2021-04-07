import {createAction} from '@reduxjs/toolkit';
import {ActionType} from 'src/store/actions/action-type.js';

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => {
  return {
    payload: url,
  };
});

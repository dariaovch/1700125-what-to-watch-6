import {ActionType} from 'src/store/actions/actionType.js';

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

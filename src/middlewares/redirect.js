import browserHistory from 'src/utils/browserHistory';
import {ActionType} from 'src/store/action';

export const redirect = (_store) => (next) => (action) => {
  if (action.type === ActionType.REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload);
  }

  return next(action);
};

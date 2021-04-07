import browserHistory from 'src/utils/browser-history';
import {ActionType} from 'src/store/actions/action-type';

export const redirect = (_store) => (next) => (action) => {
  if (action.type === ActionType.REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload);
  }

  return next(action);
};

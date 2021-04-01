import browserHistory from 'src/utils/browserHistory';
import {ActionType} from 'src/store/actions/actionType';

export const redirect = (_store) => (next) => (action) => {
  if (action.type === ActionType.REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload);
  }

  return next(action);
};

import {ActionType} from './actionType';

export const requireAuth = (status) => ({
  type: ActionType.REQUIRE_AUTH,
  payload: status,
});

export const getUserData = (userData) => ({
  type: ActionType.GET_USER_DATA,
  payload: userData,
});

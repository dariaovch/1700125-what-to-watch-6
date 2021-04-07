import {createAction} from '@reduxjs/toolkit';
import {ActionType} from 'src/store/actions/action-type';

export const requireAuth = createAction(ActionType.REQUIRE_AUTH, (status) => {
  return {
    payload: status,
  };
});

export const getUserData = createAction(ActionType.GET_USER_DATA, (userData) => {
  return {
    payload: userData,
  };
});

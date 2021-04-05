import {createReducer} from '@reduxjs/toolkit';
import {AuthStatus} from 'src/store/auth';
import {
  requireAuth,
  getUserData,
} from 'src/store/actions/userActions';

const initialState = {
  authStatus: AuthStatus.NO_AUTH,
  userData: null,
};

const user = createReducer(initialState, (builder) => {
  builder.addCase(requireAuth, (state, action) => {
    return {
      ...state,
      authStatus: action.payload,
    };
  });
  builder.addCase(getUserData, (state, action) => {
    return {
      ...state,
      userData: action.payload,
    };
  });
});

export {user};

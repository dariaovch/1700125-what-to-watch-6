import {createReducer} from '@reduxjs/toolkit';
import {AuthStatus} from 'src/store/auth';
import {
  requireAuth,
  getUserData,
} from 'src/store/actions/user-actions';

const initialState = {
  authStatus: AuthStatus.NO_AUTH,
  userData: null,
};

const user = createReducer(initialState, (builder) => {
  builder.addCase(requireAuth, (state, action) => {
    state.authStatus = action.payload;
  });
  builder.addCase(getUserData, (state, action) => {
    state.userData = action.payload;
  });
});

export {user};

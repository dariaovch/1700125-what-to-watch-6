import {ActionType} from 'src/store/actions/actionType';
import {AuthStatus} from 'src/store/auth';

const initialState = {
  authStatus: AuthStatus.NO_AUTH,
  userData: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTH:
      return {
        ...state,
        authStatus: action.payload,
      };
    case ActionType.GET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
  }

  return state;
};

export {user};

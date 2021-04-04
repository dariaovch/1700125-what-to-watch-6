import {user} from './user';
import {ActionType} from '../../actions/actionType';
import {AuthStatus} from '../../auth';


describe(`User reducers work correctly`, () => {
  it(`Should return initial state`, () => {
    const state = {
      authStatus: AuthStatus.NO_AUTH,
      userData: null,
    };

    expect(user(undefined, {})).toEqual(state);
  });

  it(`Should return update auth status to 'AUTH`, () => {
    const state = {authStatus: AuthStatus.NO_AUTH};
    const requireAuth = {
      type: ActionType.REQUIRE_AUTH,
      payload: AuthStatus.AUTH,
    };

    expect(user(state, requireAuth)).toEqual({authStatus: AuthStatus.AUTH});
  });

  it(`Should return user data object`, () => {
    const state = {userData: null};
    const getUserData = {
      type: ActionType.GET_USER_DATA,
      payload: {
        id: 1,
        email: `Oliver.conner@gmail.com`,
        name: `Oliver.conner`,
        avatarUrl: `img/1.png`
      },
    };

    expect(user(state, getUserData)).toEqual({userData: {
      id: 1,
      email: `Oliver.conner@gmail.com`,
      name: `Oliver.conner`,
      avatarUrl: `img/1.png`
    }
    });
  });
});

import {
  requireAuth,
  getUserData,
} from './userActions';
import {ActionType} from './actionType';
import {AuthStatus} from '../auth';

describe(`User action creators work correctly`, () => {
  it(`Action creator for requiring auth returns correct action`, () => {

    const expectedAction = {
      type: ActionType.REQUIRE_AUTH,
      payload: AuthStatus.AUTH,
    };

    expect(requireAuth(AuthStatus.AUTH)).toEqual(expectedAction);
  });

  it(`Action creator for getting current movie returns correct action`, () => {
    const userData =
      {
        id: 1,
        email: `Oliver.conner@gmail.com`,
        name: `Oliver.conner`,
        avatarUrl: `img/1.png`
      };

    const expectedAction = {
      type: ActionType.GET_USER_DATA,
      payload: userData,
    };

    expect(getUserData(userData)).toEqual(expectedAction);
  });
});

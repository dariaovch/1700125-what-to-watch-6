import {
  redirectToRoute
} from 'src/store/actions/appActions';
import {ActionType} from 'src/store/actions/actionType';

describe(`App action creators work correctly`, () => {
  it(`Action creator for redirect returns correct action`, () => {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: `/`,
    };

    expect(redirectToRoute(`/`)).toEqual(expectedAction);
  });
});


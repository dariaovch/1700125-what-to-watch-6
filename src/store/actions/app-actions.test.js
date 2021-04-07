import {
  redirectToRoute
} from 'src/store/actions/app-actions';
import {ActionType} from 'src/store/actions/action-type';

describe(`App action creators work correctly`, () => {
  it(`Action creator for redirect returns correct action`, () => {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: `/`,
    };

    expect(redirectToRoute(`/`)).toEqual(expectedAction);
  });
});


import {redirect} from 'src/middlewares/redirect';
import {redirectToRoute} from 'src/store/actions/app-actions';

const mockRedux = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };

  const next = jest.fn();
  const invoke = (action) => redirect(store)(next)(action);
  return {store, next, invoke};
};

const fakeHistory = {
  location: {pathname: ``},
  push(path) {
    this.location.pathname = path;
  }
};

jest.mock(`src/utils/browserHistory`, () => fakeHistory);

describe(`Redirect middleware works correctly`, () => {
  it(`Action passes to next middleware`, () => {
    const {invoke, next} = mockRedux();
    const action = redirectToRoute(`/`);

    invoke(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  it(`Redirect route should be added to mockHistory`, () => {
    const {invoke} = mockRedux();

    invoke(redirectToRoute(`/mylist`));
    expect(fakeHistory.location.pathname).toBe(`/mylist`);

    invoke(redirectToRoute(`/films/42`));
    expect(fakeHistory.location.pathname).toBe(`/films/42`);
  });

  it(`Not redirected because of bad action`, () => {
    const url = `/test-route`;
    const {invoke} = mockRedux();

    invoke({type: `TEST_ACTION_TYPE`, payload: url});
    expect(fakeHistory.location.pathname).not.toBe(url);
  });
});

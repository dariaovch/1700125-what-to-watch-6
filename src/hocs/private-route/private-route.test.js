import React from 'react';
import {Router, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {AuthStatus} from 'src/store/auth';
import PrivateRoute from 'src/hocs/private-route/private-route';
import {NameSpace} from 'src/store/reducers/root-reducer';

const mockStore = configureStore({});
let history;

describe(`Private route works correctly`, () => {
  beforeEach(() => {
    history = createMemoryHistory();
    history.push(`/private`);
  });

  it(`Should render public route component when user is not authorized`, () => {
    const store = mockStore({
      [NameSpace.USER]: {
        authStatus: AuthStatus.NO_AUTH,
      }
    });

    render(
        <Provider store={store}>
          <Router history={history}>
            <Route exact path="/login">
              <h1>Public route</h1>
            </Route>
            <PrivateRoute exact path="/private">
              <h1>Private route</h1>
            </PrivateRoute>
          </Router>
        </Provider>
    );

    expect(screen.getByText(/Public route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Private route/i)).not.toBeInTheDocument();
  });

  it(`Should render private route component when user is authorized`, () => {
    const store = mockStore({
      [NameSpace.USER]: {
        authStatus: AuthStatus.AUTH,
      }
    });

    render(
        <Provider store={store}>
          <Router history={history}>
            <Route exact path="/login">
              <h1>Public route</h1>
            </Route>
            <PrivateRoute exact path="/private">
              <h1>Private route</h1>
            </PrivateRoute>
          </Router>
        </Provider>
    );

    expect(screen.getByText(/Private route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Public route/i)).not.toBeInTheDocument();
  });
});

import React from 'react';
import {Router} from 'react-router-dom';
import {render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import Header from 'src/components/Layout/Header/Header';
import {Provider} from 'react-redux';
import {NameSpace} from 'src/store/reducers/rootReducer';
import {AuthStatus} from 'src/store/auth';
import {mockUser} from 'src/mocks/user';

describe(`Header component should render correctly`, () => {
  const history = createMemoryHistory();
  const mockStore = configureStore({});

  it(`Header renders correctly when user is not authorized`, () => {
    history.push(`/`);
    const store = mockStore({
      [NameSpace.USER]: {
        authStatus: AuthStatus.NO_AUTH,
      },
    });

    const {getByText} = render(
        <Provider store={store}>
          <Router history={history}>
            <Header />
          </Router>
        </Provider>);

    const signInElement = getByText(/Sign in/i);

    expect(signInElement).toBeInTheDocument();
  });

  it(`Header renders correctly when user is authorized and on route /mylist`, () => {
    history.push(`/mylist`);
    const store = mockStore({
      [NameSpace.USER]: {
        authStatus: AuthStatus.AUTH,
        userData: mockUser,
      },
    });

    const {getByText} = render(
        <Provider store={store}>
          <Router history={history}>
            <Header />
          </Router>
        </Provider>);

    const myListElement = getByText(/My list/i);
    const emailElement = getByText(`${mockUser.email}`);

    expect(myListElement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();
  });
});

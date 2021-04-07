import React from 'react';
import {Router} from 'react-router-dom';
import {render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {NameSpace} from 'src/store/reducers/rootReducer';
import {AuthStatus} from 'src/store/auth';
import SignIn from 'src/components/pages/sign-in/sign-in';

test(`SignIn component should render correctly`, () => {
  const history = createMemoryHistory();
  const mockStore = configureStore({});
  const store = mockStore({
    [NameSpace.USER]: {
      authStatus: AuthStatus.NO_AUTH,
    },
  });

  const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <SignIn />
        </Router>
      </Provider>);

  expect(container).toMatchSnapshot();
});

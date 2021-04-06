import React from 'react';
import {Router} from 'react-router-dom';
import {render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import SignIn from 'src/components/Pages/SignIn/SignIn';
import {Provider} from 'react-redux';
import {NameSpace} from 'src/store/reducers/rootReducer';
import {AuthStatus} from 'src/store/auth';

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

import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';
import SignInForm from 'src/components/screens/sign-in/sign-in-form/sign-in-form';

const mockStore = configureStore({});

it(`SignInForm componets render is correct`, () => {
  const history = createMemoryHistory();

  render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <SignInForm />
        </Router>
      </Provider>
  );

  expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();

  userEvent.type(screen.getByTestId(`email`), `test@exapmle.com`);
  userEvent.type(screen.getByTestId(`password`), `qwerty123`);

  expect(screen.getByDisplayValue(/test@exapmle.com/i)).toBeInTheDocument();
  expect(screen.getByDisplayValue(/qwerty123/i)).toBeInTheDocument();
});

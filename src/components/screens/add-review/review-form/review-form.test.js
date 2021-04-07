import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';
import ReviewForm from 'src/components/screens/add-review/review-form/review-form';
import {stars} from 'src/utils/constants';

const mockStore = configureStore({});

it(`Review components render is correct`, () => {
  const history = createMemoryHistory();

  render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <ReviewForm stars={stars} />
        </Router>
      </Provider>
  );

  expect(screen.getByText(/Post/i)).toBeInTheDocument();

  userEvent.type(screen.getByTestId(`comment`), `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`);

  expect(screen.getByDisplayValue(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`)).toBeInTheDocument();
});

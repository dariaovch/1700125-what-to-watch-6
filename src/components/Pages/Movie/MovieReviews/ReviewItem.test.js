/* eslint-disable camelcase */
import React from 'react';
import {Router} from 'react-router-dom';
import {render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import ReviewItem from 'src/components/Pages/Movie/MovieReviews/ReviewItem';
import {Provider} from 'react-redux';
import {NameSpace} from 'src/store/reducers/rootReducer';
import {AuthStatus} from 'src/store/auth';

test(`ReviewItem component should render correctly`, () => {
  const history = createMemoryHistory();
  const mockStore = configureStore({});
  const store = mockStore({
    [NameSpace.USER]: {
      authStatus: AuthStatus.AUTH,
    },
  });

  const mockItem = {
    id: 2,
    user: {
      id: 17,
      name: `Emily`
    },
    rating: 7.2,
    comment: `This movie is just plain bad. There must be some big payola going round this awards season. Badly written, average acting at best, all the characters are unrelatable and inlikeable. 2 hours of my life wasted.`,
    date: `2021-02-22T08:04:28.658Z`
  };

  const {getByText} = render(
      <Provider store={store}>
        <Router history={history}>
          <ReviewItem item={mockItem} />
        </Router>
      </Provider>);

  const commentElement = getByText(`${mockItem.comment}`);
  const nameElement = getByText(`${mockItem.user.name}`);

  expect(commentElement).toBeInTheDocument();
  expect(nameElement).toBeInTheDocument();
});

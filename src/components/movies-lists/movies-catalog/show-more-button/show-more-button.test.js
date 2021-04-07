import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import ShowMoreButton from 'src/components/movies-lists/movies-catalog/show-more-button/show-more-button';

test(`ShowMoreButton component should render correctly`, () => {
  const history = createMemoryHistory();

  const {container} = render(
      <Router history={history}>
        <ShowMoreButton />
      </Router>);

  expect(container).toMatchSnapshot();
});

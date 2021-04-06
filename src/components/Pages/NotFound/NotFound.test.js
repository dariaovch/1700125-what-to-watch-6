import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import NotFound from 'src/components/Pages/NotFound/NotFound';

it(`NotFound component should render correctly`, () => {
  const history = createMemoryHistory();
  const {getByText} = render(
      <Router history={history}>
        <NotFound />
      </Router>
  );

  const mainTextElement = getByText(`404 Page Not Found`);
  const linkTextElement = getByText(`Return to Main Page`);

  expect(mainTextElement).toBeInTheDocument();
  expect(linkTextElement).toBeInTheDocument();
});

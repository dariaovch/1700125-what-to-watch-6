import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Footer from 'src/components/Layout/Footer/Footer';

it(`Footer component should render correctly`, () => {
  const history = createMemoryHistory();
  const {getByText} = render(
      <Router history={history}>
        <Footer />
      </Router>);

  const copyrightElement = getByText(`© 2019 What to watch Ltd.`);

  expect(copyrightElement).toBeInTheDocument();
});

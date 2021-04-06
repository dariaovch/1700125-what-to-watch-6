import React from 'react';
import {Router} from 'react-router-dom';
import {render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import Breadcrumbs from 'src/components/Layout/Breadcrumbs/Breadcrumbs';

let history;
let movie;
describe(`Breadcrumbs component works correctly`, () => {
  beforeEach(() => {
    history = createMemoryHistory();
    history.push(`/films/1/review`);
    movie = {
      name: `Grand Hotel Budapest`,
      id: 1,
    };
  });
  it(`Breadcrumbs render correctly`, () => {
    const {getByText} = render(
        <Router history={history}>
          <Breadcrumbs movie={movie} />
        </Router>
    );

    const movieName = getByText(`${movie.name}`);

    expect(movieName).toBeInTheDocument();
  });
});

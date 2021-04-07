import React from 'react';
import {Router} from 'react-router-dom';
import {render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {NameSpace} from 'src/store/reducers/root-reducer';
import {mockMovies} from 'src/mocks/films';
import MoviesGenres from 'src/components/movies/movies-genres/movies-genres';

test(`MoviesGenres component should render correctly`, () => {
  const history = createMemoryHistory();
  const mockStore = configureStore({});
  const store = mockStore({
    [NameSpace.DATA]: {
      movies: mockMovies,
      genre: `All genres`,
    },
  });

  const {getByText} = render(
      <Provider store={store}>
        <Router history={history}>
          <MoviesGenres />
        </Router>
      </Provider>);

  const allGenresElement = getByText(`All genres`);
  const dramaElement = getByText(`Drama`);

  expect(allGenresElement).toBeInTheDocument();
  expect(dramaElement).toBeInTheDocument();
});

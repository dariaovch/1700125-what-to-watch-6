import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import Player from 'src/components/pages/player-page/player-page';
import {NameSpace} from 'src/store/reducers/root-reducer';
import {mockMovies} from 'src/mocks/films';
import {mockUser} from 'src/mocks/user';
import {AuthStatus} from 'src/store/auth';
const mockStore = configureStore({});

describe(`Player component works correctly`, () => {
  beforeAll(() => {
    window.HTMLMediaElement.prototype.play = () => {};
    window.HTMLMediaElement.prototype.pause = () => {};
  });

  it(`Player page renders correctly`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        genre: `All genres`,
        movies: mockMovies,
        currentMovie: mockMovies[0],
        promoMovie: mockMovies[0],
        isDataLoaded: true,
      },
      [NameSpace.USER]: {
        authStatus: AuthStatus.AUTH,
        userData: mockUser,
      },
    });

    const history = createMemoryHistory();
    const rendered = render(
        <redux.Provider store={store}>
          <Router history={history}>
            <Player />
          </Router>
        </redux.Provider>
    );

    expect(rendered.getByText(/Exit/i)).toBeInTheDocument();
    expect(rendered.getByText(/Play/i)).toBeInTheDocument();
    expect(rendered.getByText(/Full screen/i)).toBeInTheDocument();
  });

  it.todo(`Player should play video when data is loaded`);
});

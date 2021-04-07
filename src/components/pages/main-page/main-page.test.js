import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import Main from 'src/components/pages/main-page/main-page';
import {NameSpace} from 'src/store/reducers/root-reducer';
import {mockMovies} from 'src/mocks/films';
import {mockUser} from 'src/mocks/user';
import {AuthStatus} from 'src/store/auth';

const mockStore = configureStore({});

describe(`Main page component works correctly`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);

  it(`Main page renders correctly`, () => {
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
            <Main />
          </Router>
        </redux.Provider>
    );

    expect(rendered.getByText(/All genres/i)).toBeInTheDocument();
    expect(rendered.getByText(/Catalog/i)).toBeInTheDocument();
  });

  it.todo(`Click on genre returns filtered movies list`);
});

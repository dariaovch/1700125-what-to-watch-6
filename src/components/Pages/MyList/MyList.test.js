import React from 'react';
import {Router} from 'react-router-dom';
import {render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import MyList from 'src/components/Pages/MyList/MyList';
import {Provider} from 'react-redux';
import {NameSpace} from 'src/store/reducers/rootReducer';
import {AuthStatus} from 'src/store/auth';
import {mockMovies} from 'src/mocks/films';

describe(`MyList component should render correctly`, () => {
  const history = createMemoryHistory();
  const mockStore = configureStore({});

  it(`MyList component renders correctly`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        favoriteMovies: mockMovies,
      },
      [NameSpace.USER]: {
        authStatus: AuthStatus.NO_AUTH,
      },
    });

    const {getByText} = render(
        <Provider store={store}>
          <Router history={history}>
            <MyList />
          </Router>
        </Provider>);


    const catalogElement = getByText(/Catalog/i);

    expect(catalogElement).toBeInTheDocument();
  });
});

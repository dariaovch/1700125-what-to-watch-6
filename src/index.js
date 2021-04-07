import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from '@reduxjs/toolkit';
import {createAPI} from 'src/utils/api';
import {Provider} from 'react-redux';
import {Router as BrowserRouter} from 'react-router-dom';
import App from 'src/components/app/app';
import rootReducer from 'src/store/reducers/root-reducer';
import {NameSpace} from 'src/store/reducers/root-reducer';
import {AuthStatus} from 'src/store/auth';
import {checkAuth} from 'src/store/actions/api-actions';
import {redirect} from 'src/middlewares/redirect';
import {requireAuth} from 'src/store/actions/user-actions';
import browserHistory from 'src/utils/browser-history';

const api = createAPI(
    () => store.dispatch(requireAuth(AuthStatus.NO_AUTH))
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
  preloadedState: {
    [NameSpace.DATA]: {
      genre: `All genres`,
      movies: [],
      currentMovie: null,
      movieReviews: [],
      favoriteMovies: [],
      isDataLoaded: false,
    },
    [NameSpace.USER]: {
      authStatus: AuthStatus.NO_AUTH,
      userData: null,
    },
  },
});

store.dispatch(checkAuth());

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter history={browserHistory}>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
    document.getElementById(`root`)
);

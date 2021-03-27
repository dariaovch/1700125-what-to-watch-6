import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createAPI} from 'src/utils/api';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from 'src/components/App/App.js';
import {reducer} from 'src/store/reducer';
import {genres} from 'src/utils/constants';
import {ActionCreator} from 'src/store/action';
import {AuthStatus} from 'src/store/auth';
import {checkAuth} from 'src/store/apiActions';
import {redirect} from 'src/middlewares/redirect';

const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuth(AuthStatus.NO_AUTH))
);

const store = createStore(
    reducer,
    {
      genre: genres[0],
      movies: [],
      authStatus: AuthStatus.NO_AUTH,
      userData: null,
      currentMovie: null,
      movieReviews: [],
      isDataLoaded: false,
    },
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect),
    )
);

store.dispatch(checkAuth());

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById(`root`)
);

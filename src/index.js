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
import {AuthStatus} from 'src/store/auth';
import {checkAuth} from 'src/store/actions/apiActions';
import {redirect} from 'src/middlewares/redirect';
import {requireAuth} from 'src/store/actions/userActions';

const api = createAPI(
    () => store.dispatch(requireAuth(AuthStatus.NO_AUTH))
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

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createAPI} from 'src/utils/api';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from 'src/components/App/App.js';
import rootReducer from 'src/store/reducers/rootReducer';
import {NameSpace} from 'src/store/reducers/rootReducer';
import {AuthStatus} from 'src/store/auth';
import {checkAuth} from 'src/store/actions/apiActions';
import {redirect} from 'src/middlewares/redirect';
import {requireAuth} from 'src/store/actions/userActions';

const api = createAPI(
    () => store.dispatch(requireAuth(AuthStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    {
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

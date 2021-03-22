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

const api = createAPI();

const store = createStore(
    reducer,
    {
      genre: genres[0],
      movies: [],
      isDataLoaded: false,
    },
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById(`root`)
);

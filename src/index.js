import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {movies} from 'src/mocks/films.js';
import App from 'src/components/App/App.js';
import {reducer} from 'src/store/reducer';

const store = createStore(
    reducer,
    composeWithDevTools()
);

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App movies={movies} />
      </Provider>
    </React.StrictMode>,
    document.getElementById(`root`)
);

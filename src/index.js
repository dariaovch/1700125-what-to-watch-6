import React from 'react';
import ReactDOM from 'react-dom';
import {movies} from 'src/mocks/db.js';
import App from 'src/components/App/App.js';

ReactDOM.render(
    <React.StrictMode>
      <App movies={movies} />
    </React.StrictMode>,
    document.getElementById(`root`)
);

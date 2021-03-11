import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {genres, stars} from 'src/utils/constants.js';
// import {movies} from 'src/db.js';
import Main from 'src/components/Main/Main.js';
import SignIn from 'src/components/SignIn/SignIn';
import MyList from 'src/components/MyList/MyList';
import Movie from 'src/components/Movie/Movie';
import AddReview from 'src/components/AddReview/AddReview';
import Player from 'src/components/Player/Player';
import NotFound from 'src/components/NotFound/NotFound';

function App({movies}) {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main genres={genres} movies={movies} />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/mylist">
          <MyList movies={movies} />
        </Route>
        <Route exact path="/films/:id">
          <Movie movies={movies} />
        </Route>
        <Route exact path="/films/:id/review">
          <AddReview movies={movies} stars={stars} />
        </Route>
        <Route exact path="/player/:id">
          <Player movies={movies} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string,
    ratingScore: PropTypes.string,
    ratingLevel: PropTypes.string,
    ratingCount: PropTypes.string,
    director: PropTypes.string,
    starring: PropTypes.string,
    descriptionShort: PropTypes.string,
    descriptionFull: PropTypes.string,
    videoLink: PropTypes.string,
  })),
};

export default App;

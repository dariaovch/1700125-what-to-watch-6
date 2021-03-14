import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {genres, stars} from 'src/utils/constants';
import Main from 'src/components/Pages/Main/Main';
import SignIn from 'src/components/Pages/SignIn/SignIn';
import MyList from 'src/components/Pages/MyList/MyList';
import Movie from 'src/components/Pages/Movie/Movie';
import Review from 'src/components/Pages/Review/Review';
import Player from 'src/components/Pages/Player/Player';
import NotFound from 'src/components/Pages/NotFound/NotFound';

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
          <Review movies={movies} stars={stars} />
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

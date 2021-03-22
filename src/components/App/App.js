/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {genres, stars} from 'src/utils/constants';
import Main from 'src/components/Pages/Main/Main';
import SignIn from 'src/components/Pages/SignIn/SignIn';
import MyList from 'src/components/Pages/MyList/MyList';
import Movie from 'src/components/Pages/Movie/Movie';
import Review from 'src/components/Pages/Review/Review';
import Player from 'src/components/Pages/Player/Player';
import NotFound from 'src/components/Pages/NotFound/NotFound';
import {fetchMovies} from 'src/store/apiActions';
import Preloader from '../Pages/Preloader/Preloader';

function App(props) {
  const {movies, isDataLoaded, onLoadMovies} = props;


  React.useEffect(() => {
    if (!isDataLoaded) {
      onLoadMovies();
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <Preloader />
    );
  }

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
    name: PropTypes.string,
    poster_image: PropTypes.string,
    preview_image: PropTypes.string,
    background_image: PropTypes.string,
    background_color: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number,
    scores_count: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.array,
    run_time: PropTypes.number,
    genre: PropTypes.string,
    released: PropTypes.number,
    id: PropTypes.number,
    is_favorite: PropTypes.bool,
    video_link: PropTypes.string,
    preview_video_link: PropTypes.string,
  })),
  isDataLoaded: PropTypes.bool,
  onLoadMovies: PropTypes.func,
};

const mapStateToProps = (state) => ({
  movies: state.movies,
  isDataLoaded: state.isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadMovies() {
    dispatch(fetchMovies());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

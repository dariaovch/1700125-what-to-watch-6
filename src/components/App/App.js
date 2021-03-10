import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {genres, stars} from 'src/utils/constants.js';
import {movies} from 'src/db.js';
import Main from 'src/components/Main/Main.js';
import SignIn from 'src/components/SignIn/SignIn';
import MyList from 'src/components/MyList/MyList';
import Movie from 'src/components/Movie/Movie';
import AddReview from 'src/components/AddReview/AddReview';
import Player from 'src/components/Player/Player';
import NotFound from 'src/components/NotFound/NotFound';

function App() {

  const [movie, setMovie] = React.useState({
    id: ``,
    image: ``,
    alt: ``,
    title: ``,
    genre: ``,
    year: ``,
    poster: ``,
    ratingScore: ``,
    ratingLevel: ``,
    ratingCount: ``,
    director: ``,
    starring: ``,
    descriptionShort: ``,
    descriptionFull: ``,
    videoLink: ``,
  });

  function handleMovieClick(item) {
    setMovie(item);
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main genres={genres} movies={movies} handleCardClick={handleMovieClick} />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/mylist">
          <MyList />
        </Route>
        <Route exact path="/films/:id">
          <Movie movies={movies} movie={movie} />
        </Route>
        <Route exact path="/films/:id/review">
          <AddReview stars={stars} />
        </Route>
        <Route exact path="/player/:id">
          <Player movie={movies[0]} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

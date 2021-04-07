/* eslint-disable camelcase */
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Main from 'src/components/screens/main-page/main-page';
import SignIn from 'src/components/screens/sign-in/sign-in';
import MyList from 'src/components/screens/my-list/my-list';
import Movie from 'src/components/screens/film/film';
import Review from 'src/components/screens/add-review/add-review';
import Player from 'src/components/screens/player-page/player-page';
import NotFound from 'src/components/screens/not-found/not-found';
import PrivateRoute from 'src/hocs/private-route/private-route';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route exact path="/login">
        <SignIn />
      </Route>
      <PrivateRoute exact path="/mylist">
        <MyList />
      </PrivateRoute>
      <Route exact path="/films/:id">
        <Movie />
      </Route>
      <PrivateRoute exact path="/films/:id/review">
        <Review />
      </PrivateRoute>
      <Route exact path="/player/:id">
        <Player />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default App;

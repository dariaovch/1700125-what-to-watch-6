import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Main from 'src/components/pages/main-page/main-page';
import SignIn from 'src/components/pages/sign-in/sign-in';
import MyList from 'src/components/pages/my-list/my-list';
import Movie from 'src/components/pages/movie/movie';
import Review from 'src/components/pages/add-review/add-review';
import Player from 'src/components/pages/player-page/player-page';
import NotFound from 'src/components/pages/not-found/not-found';
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

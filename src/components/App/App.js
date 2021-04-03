/* eslint-disable camelcase */
import React from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import Main from 'src/components/Pages/Main/Main';
import SignIn from 'src/components/Pages/SignIn/SignIn';
import MyList from 'src/components/Pages/MyList/MyList';
import Movie from 'src/components/Pages/Movie/Movie';
import Review from 'src/components/Pages/Review/Review';
import Player from 'src/components/Pages/Player/Player';
import NotFound from 'src/components/Pages/NotFound/NotFound';
import PrivateRoute from 'src/hocs/PrivateRoute/PrivateRoute';
import browserHistory from 'src/utils/browserHistory';

function App() {
  return (
    <BrowserRouter history={browserHistory}>
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
    </BrowserRouter>
  );
}

export default App;

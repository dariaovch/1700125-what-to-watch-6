import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from 'src/components/Main/Main.js';
import SignIn from 'src/components/SignIn/SignIn';
import MyList from 'src/components/MyList/MyList';
import Film from 'src/components/Film/Film';
import AddReview from 'src/components/AddReview/AddReview';
import Player from 'src/components/Player/Player';
import NotFound from 'src/components/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main title="The Grand Budapest Hotel" genre="Drama" year="2014" />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/mylist">
          <MyList />
        </Route>
        <Route exact path="/films/:id">
          <Film />
        </Route>
        <Route exact path="/films/:id/review">
          <AddReview />
        </Route>
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

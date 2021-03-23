/* eslint-disable camelcase */
import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from 'src/components/Pages/Main/Main';
import SignIn from 'src/components/Pages/SignIn/SignIn';
import MyList from 'src/components/Pages/MyList/MyList';
import Movie from 'src/components/Pages/Movie/Movie';
import Review from 'src/components/Pages/Review/Review';
import Player from 'src/components/Pages/Player/Player';
import NotFound from 'src/components/Pages/NotFound/NotFound';
import {PrivateRoute} from 'src/hocs/PrivateRoute/PrivateRoute';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/mylist">
          <PrivateRoute
            exact
            path="/mylist"
            component={MyList}
          />
        </Route>
        <Route exact path="/films/:id">
          <Movie />
        </Route>
        <Route exact path="/films/:id/review">
          <PrivateRoute
            exact
            path="/films/:id/review"
            component={Review}
          />
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

// App.propTypes = {
//   movies: PropTypes.arrayOf(PropTypes.shape({
//     name: PropTypes.string,
//     poster_image: PropTypes.string,
//     preview_image: PropTypes.string,
//     background_image: PropTypes.string,
//     background_color: PropTypes.string,
//     description: PropTypes.string,
//     rating: PropTypes.number,
//     scores_count: PropTypes.number,
//     director: PropTypes.string,
//     starring: PropTypes.array,
//     run_time: PropTypes.number,
//     genre: PropTypes.string,
//     released: PropTypes.number,
//     id: PropTypes.number,
//     is_favorite: PropTypes.bool,
//     video_link: PropTypes.string,
//     preview_video_link: PropTypes.string,
//   })),
// };

// const mapStateToProps = (state) => ({
//   movies: state.movies,
// });

export {App};
export default App;

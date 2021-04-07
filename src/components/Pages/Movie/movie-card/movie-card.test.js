/* eslint-disable camelcase */
import React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import {render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import MovieCard from 'src/components/Pages/Movie/MovieCard/MovieCard';
import * as redux from 'react-redux';
import userEvent from '@testing-library/user-event';
import {NameSpace} from 'src/store/reducers/rootReducer';
import {AuthStatus} from 'src/store/auth';
import {mockUser} from 'src/mocks/user';

const mockStore = configureStore({});
let movie;
describe(`Movie Card component should render correctly`, () => {
  const history = createMemoryHistory();
  beforeEach(() => {
    movie = {
      id: 1,
      image: `img/bg-the-grand-budapest-hotel.jpg`,
      name: `The Grand Budapest Hotel`,
      genre: `Drama`,
      released: `2014`,
      poster_image: `img/the-grand-budapest-hotel-poster.jpg`,
      background_image: `img/bg-the-grand-budapest-hotel.jpg`,
      rating: 8.9,
      scores_count: `240 reviews`,
      director: `Wes Anderson`,
      starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
      description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.`,
      video_link: `https://upload.wikimedia.org/wikipedia/commons/0/0d/The_Pink_Panther_trailer_%281963%29.webm`,
    };
  });


  it(`Movie card renders correctly when user is authorized`, () => {
    const store = mockStore({
      [NameSpace.USER]: {
        authStatus: AuthStatus.AUTH,
        userData: mockUser,
      },
    });

    const {getByText} = render(
        <redux.Provider store={store}>
          <Router history={history}>
            <MovieCard movie={movie} />
          </Router>
        </redux.Provider>);

    const nameElement = getByText(`${movie.name}`);
    const genreElement = getByText(`${movie.genre}`);
    const playElement = getByText(/Play/i);
    const reviewElement = getByText(/Add review/i);

    expect(nameElement).toBeInTheDocument();
    expect(genreElement).toBeInTheDocument();
    expect(playElement).toBeInTheDocument();
    expect(reviewElement).toBeInTheDocument();
  });

  it(`Play click redirects to player page`, () => {

    const playBtnClickHandler = jest.fn();

    playBtnClickHandler.mockImplementation(
        () => history.push(`/player/${movie.id}`)
    );

    const rendered = render(
        <redux.Provider store={mockStore({})}>
          <Router history={history}>
            <Switch>
              <Route exact path={`/films/${movie.id}`}>
                <MovieCard onPlayClick={playBtnClickHandler} />
              </Route>
              <Route exact path={`/player/${movie.id}`}>
                <h1>Mock Player Screen</h1>
              </Route>
            </Switch>
          </Router>
        </redux.Provider>
    );

    const playElement = rendered.getByText(/Play/i);
    userEvent.click(playElement);

    expect(playBtnClickHandler).toBeCalled();
    expect(rendered.getByText(/Mock Player Screen/i));
  });
});

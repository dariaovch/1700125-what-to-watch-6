import React from 'react';
import {Router} from 'react-router-dom';
import {render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {NameSpace} from 'src/store/reducers/root-reducer';
import {AuthStatus} from 'src/store/auth';
import Overview from 'src/components/pages/movie/movie-overview/movie-overview';

test(`Overview component should render correctly`, () => {
  const history = createMemoryHistory();
  const mockStore = configureStore({});
  const store = mockStore({
    [NameSpace.USER]: {
      authStatus: AuthStatus.AUTH,
    },
  });

  const mockMovie = {
    id: 1,
    image: `img/bg-the-grand-budapest-hotel.jpg`,
    name: `The Grand Budapest Hotel`,
    genre: `Drama`,
    released: 2014,
    posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
    bgImage: `img/bg-the-grand-budapest-hotel.jpg`,
    rating: 8.9,
    scoresCount: 240,
    director: `Wes Anderson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.`,
    videoLink: `https://upload.wikimedia.org/wikipedia/commons/0/0d/The_Pink_Panther_trailer_%281963%29.webm`,
  };

  const {getByText} = render(
      <Provider store={store}>
        <Router history={history}>
          <Overview movie={mockMovie} />
        </Router>
      </Provider>);

  const directorElement = getByText(`Director: ${mockMovie.director}`);

  expect(directorElement).toBeInTheDocument();
});

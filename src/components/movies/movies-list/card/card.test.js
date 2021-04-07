/* eslint-disable camelcase */
import React from 'react';
import {Router} from 'react-router-dom';
import {render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import Card from 'src/components/movies/movies-list/card/card';

const mockStore = configureStore({});
let history;
let item;
describe(`Card component should render correctly`, () => {
  beforeEach(() => {
    history = createMemoryHistory();
    history.push(`/`);
    item = {
      id: 1,
      image: `img/bg-the-grand-budapest-hotel.jpg`,
      name: `The Grand Budapest Hotel`,
      genre: `Drama`,
      released: `2014`,
      poster_image: `img/the-grand-budapest-hotel-poster.jpg`,
      background_image: `img/bg-the-grand-budapest-hotel.jpg`,
      rating: 8.9,
      scores_count: 240,
      director: `Wes Anderson`,
      starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
      description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.`,
      video_link: `https://upload.wikimedia.org/wikipedia/commons/0/0d/The_Pink_Panther_trailer_%281963%29.webm`,
    };
  });

  it(`Card renders correctly`, () => {
    const {getByText} = render(
        <redux.Provider store={mockStore({})}>
          <Router history={history}>
            <Card item={item} />
          </Router>
        </redux.Provider>);

    const nameElement = getByText(`${item.name}`);

    expect(nameElement).toBeInTheDocument();
  });

  it.todo(`Click on card redirect to respective page`);
});

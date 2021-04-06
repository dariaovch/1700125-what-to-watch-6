import React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import {render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import userEvent from '@testing-library/user-event';
import MyListButton from 'src/components/Pages/MyList/MyListButton/MyListButton';

const mockStore = configureStore({});
let history;
let movie;
describe(`MyListButton component works correctly`, () => {
  jest.spyOn(redux, `useDispatch`);

  beforeEach(() => {
    history = createMemoryHistory();
    history.push(`/films/1`);
    movie = {
      name: `Grand Hotel Budapest`,
      id: 1,
    };
  });

  it(`MyListButton render correctly`, () => {
    const {getByText} = render(
        <redux.Provider store={mockStore({})}>
          <Router history={history}>
            <MyListButton movie={movie} />
          </Router>
        </redux.Provider>
    );

    const buttonTextElement = getByText(/My list/i);

    expect(buttonTextElement).toBeInTheDocument();
  });

  it(`MyListButton click redirects to my list page`, () => {

    const myListBtnClickHandler = jest.fn();

    myListBtnClickHandler.mockImplementation(
        () => history.push(`/mylist`)
    );

    const rendered = render(
        <redux.Provider store={mockStore({})}>
          <Router history={history}>
            <Switch>
              <Route exact path={`/films/${movie.id}`}>
                <MyListButton onMyListClick={myListBtnClickHandler} />
              </Route>
              <Route exact path="/mylist">
                <h1>Mock My List Screen</h1>
              </Route>
            </Switch>
          </Router>
        </redux.Provider>
    );

    userEvent.click(rendered.getByText(`My list`));

    expect(myListBtnClickHandler).toBeCalled();
    expect(rendered.getByText(/Mock My List Screen/i));
  });
});

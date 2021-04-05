/* eslint-disable camelcase */
import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import App from 'src/components/App/App';

const mockStore = configureStore({});

describe(`Test routing`, () => {

  it(`Render Main page when user navigate to '/' url`, () => {

    const history = createMemoryHistory();
    render(
        <redux.Provider store={mockStore({})}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/WTW/i)).toBeInTheDocument();
    expect(screen.getByText(/All genres/i)).toBeInTheDocument();
    expect(screen.getByText(/Play/i)).toBeInTheDocument();
    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
  });

  it(`Render SignIn page when user navigate to '/login' url`, () => {

    const history = createMemoryHistory();
    history.push(`/login`);

    render(
        <redux.Provider store={mockStore({})}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  it(`Render MyList page when user navigate to '/mylist' url`, () => {

    const history = createMemoryHistory();
    history.push(`/mylist`);

    render(
        <redux.Provider store={mockStore({})}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
  });

  it(`Render Movie page when user navigate to '/films/:id' url`, () => {

    const history = createMemoryHistory();
    const mockId = 1;
    history.push(`/films/${mockId}`);

    render(
        <redux.Provider store={mockStore({})}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Details/i)).toBeInTheDocument();
    expect(screen.getByText(/Overview/i)).toBeInTheDocument();
    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
  });

  it(`Render Review page when user navigate to '/films/:id/review' url`, () => {

    const history = createMemoryHistory();
    const mockId = 1;
    history.push(`/films/${mockId}/review`);

    render(
        <redux.Provider store={mockStore({})}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Post/i)).toBeInTheDocument();
  });

  it(`Render Player page when user navigate to '/player/:id' url`, () => {

    const history = createMemoryHistory();
    const mockId = 1;
    history.push(`/player/${mockId}`);

    render(
        <redux.Provider store={mockStore({})}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Exit/i)).toBeInTheDocument();
  });

  it(`Render NotFound page when user navigate to non-existent url`, () => {

    const history = createMemoryHistory();
    history.push(`/non-existent`);

    render(
        <redux.Provider store={mockStore({})}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen. getByText(`404 Page Not Found`)).toBeInTheDocument();
    expect(screen.getByText(`Return to Main Page`)).toBeInTheDocument();
  });
});

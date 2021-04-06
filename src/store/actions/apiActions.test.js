import MockAdapter from 'axios-mock-adapter';
import {createAPI} from 'src/utils/api';
import {ActionType} from 'src/store/actions/actionType';
import {
  fetchMovies,
  checkAuth,
  login,
  getCurrentUser,
  getCurrentMovieData,
  getComments,
  postComment,
  getMoviesToWatch,
  changeFavoriteStatus,
  getPromo,
} from 'src/store/actions/apiActions';
import {AuthStatus} from 'src/store/auth';

const api = createAPI(() => {});

describe(`Async api actions should work correctly`, () => {
  it(`Fetch movies GET request to /films work correctly`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const moviesLoader = fetchMovies();

    apiMock
      .onGet(`/films`)
      .reply(200, [{fake: true}]);

    return moviesLoader(dispatch, () => {}, api)
     .then(() => {
       expect(dispatch).toHaveBeenCalledTimes(1);
       expect(dispatch).toHaveBeenNthCalledWith(1, {
         type: ActionType.LOAD_MOVIES,
         payload: [{fake: true}],
       });
     });
  });

  it(`Check auth GET request to /login work correctly`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(200, [{fake: true}]);

    return checkAuthLoader(dispatch, () => {}, api)
     .then(() => {
       expect(dispatch).toHaveBeenCalledTimes(1);
       expect(dispatch).toHaveBeenNthCalledWith(1, {
         type: ActionType.REQUIRE_AUTH,
         payload: AuthStatus.AUTH,
       });
     });
  });

  it(`Login POST request to /login work correctly`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: `test@example.com`, password: `qwerty123`};
    const loginLoader = login(fakeUser);

    apiMock
      .onPost(`/login`)
      .reply(200, [{fake: true}]);

    return loginLoader(dispatch, () => {}, api)
     .then(() => {
       expect(dispatch).toHaveBeenCalledTimes(2);
       expect(dispatch).toHaveBeenNthCalledWith(1, {
         type: ActionType.REQUIRE_AUTH,
         payload: AuthStatus.AUTH,
       });
       expect(dispatch).toHaveBeenNthCalledWith(2, {
         type: ActionType.REDIRECT_TO_ROUTE,
         payload: `/`,
       });
     });
  });

  it(`Get current user GET request to /login work correctly`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const currentUserLoader = getCurrentUser();

    apiMock
      .onGet(`/login`)
      .reply(200, [{fake: true}]);

    return currentUserLoader(dispatch, () => {}, api)
     .then(() => {
       expect(dispatch).toHaveBeenCalledTimes(1);
       expect(dispatch).toHaveBeenNthCalledWith(1, {
         type: ActionType.GET_USER_DATA,
         payload: [{fake: true}],
       });
     });
  });

  it(`Get current movie GET request to /films/:id work correctly`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const mockMovieId = 2;
    const currentMovieLoader = getCurrentMovieData(mockMovieId);

    apiMock
      .onGet(`/films/${mockMovieId}`)
      .reply(200, [{fake: true}]);

    return currentMovieLoader(dispatch, () => {}, api)
     .then(() => {
       expect(dispatch).toHaveBeenCalledTimes(2);
       expect(dispatch).toHaveBeenNthCalledWith(1, {
         type: ActionType.GET_MOVIE_DATA,
         payload: [{fake: true}],
       });
       expect(dispatch).toHaveBeenNthCalledWith(2, {
         type: ActionType.REDIRECT_TO_ROUTE,
         payload: `/films/${mockMovieId}`,
       });
     });
  });

  it(`Get comments GET request to /comments/:id work correctly`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const mockMovieId = 1;
    const commentsLoader = getComments(mockMovieId);

    apiMock
      .onGet(`/comments/${mockMovieId}`)
      .reply(200, [{fake: true}]);

    return commentsLoader(dispatch, () => {}, api)
     .then(() => {
       expect(dispatch).toHaveBeenCalledTimes(1);

       expect(dispatch).toHaveBeenNthCalledWith(1, {
         type: ActionType.GET_COMMENTS,
         payload: [{fake: true}],
       });
     });
  });

  it(`Post comments POST request to /comments/:id work correctly`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const mockMovieId = 1;
    const fakeComment = {
      rating: 8,
      comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`
    };
    const postCommentLoader = postComment(mockMovieId, {fakeComment});

    apiMock
      .onPost(`/comments/${mockMovieId}`)
      .reply(200, [{fake: true}]);

    return postCommentLoader(dispatch, () => {}, api)
     .then(() => {
       expect(dispatch).toHaveBeenCalledTimes(2);

       expect(dispatch).toHaveBeenNthCalledWith(1, {
         type: ActionType.GET_COMMENTS,
         payload: [{fake: true}],
       });

       expect(dispatch).toHaveBeenNthCalledWith(2, {
         type: ActionType.REDIRECT_TO_ROUTE,
         payload: `/films/${mockMovieId}`,
       });
     });
  });

  it(`Get favorite movies GET request to /favorite work correctly`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteMoviesLoader = getMoviesToWatch();

    apiMock
      .onGet(`/favorite`)
      .reply(200, [{fake: true}]);

    return favoriteMoviesLoader(dispatch, () => {}, api)
     .then(() => {
       expect(dispatch).toHaveBeenCalledTimes(1);
       expect(dispatch).toHaveBeenNthCalledWith(1, {
         type: ActionType.GET_FAVORITE_MOVIES,
         payload: [{fake: true}],
       });
     });
  });

  it(`Change favorite status POST request to /favorite/:id/:code work correctly`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const mockMovieId = 3;
    const statusCode = 1;
    const changeFavoriteStatusLoader = changeFavoriteStatus(mockMovieId, statusCode);

    apiMock
      .onPost(`/favorite/${mockMovieId}/${statusCode}`)
      .reply(200, [{fake: true}]);

    return changeFavoriteStatusLoader(dispatch, () => {}, api)
     .then(() => {
       expect(dispatch).toHaveBeenCalledTimes(2);
       expect(dispatch).toHaveBeenNthCalledWith(2, {
         type: ActionType.REDIRECT_TO_ROUTE,
         payload: `/mylist`,
       });
     });
  });

  it(`Get promo movie GET request to /films/promo work correctly`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const promoMovieLoader = getPromo();

    apiMock
      .onGet(`/films/promo`)
      .reply(200, [{fake: true}]);

    return promoMovieLoader(dispatch, () => {}, api)
     .then(() => {
       expect(dispatch).toHaveBeenCalledTimes(1);
       expect(dispatch).toHaveBeenNthCalledWith(1, {
         type: ActionType.GET_PROMO_MOVIE,
         payload: [{fake: true}],
       });
     });
  });
});

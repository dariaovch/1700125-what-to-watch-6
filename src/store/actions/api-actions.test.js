import MockAdapter from 'axios-mock-adapter';
import {createAPI} from 'src/utils/api';
import {ActionType} from 'src/store/actions/action-type';
import {
  fetchMovies,
  checkAuth,
  login,
  logout,
  getCurrentUser,
  getCurrentMovieData,
  getComments,
  postComment,
  getMoviesToWatch,
  changeFavoriteStatus,
  getPromo,
} from 'src/store/actions/api-actions';
import {AuthStatus} from 'src/store/auth';

const api = createAPI(() => {});

describe(`Async api actions should work correctly`, () => {
  it(`Fetch movies GET request to /films work correctly`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const moviesLoader = fetchMovies();

    apiMock
      .onGet(`/films`)
      .reply(200, [{
        "name": `Macbeth`,
        "poster_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`,
        "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`,
        "background_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`,
        "background_color": `#F1E9CE`,
        "description": `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
        "rating": 3.3,
        "scores_count": 48798,
        "director": `Justin Kurzel`,
        "starring": [
          `Michael Fassbender`,
          `Marion Cotillard`,
          `Jack Madigan`
        ],
        "run_time": 113,
        "genre": `Drama`,
        "released": 2015,
        "id": 1,
        "is_favorite": true,
        "video_link": `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
        "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
      }]);

    return moviesLoader(dispatch, () => {}, api)
     .then(() => {
       expect(dispatch).toHaveBeenCalledTimes(1);
       expect(dispatch).toHaveBeenNthCalledWith(1, {
         type: ActionType.LOAD_MOVIES,
         payload: [{
           name: `Macbeth`,
           posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`,
           previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`,
           bgImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`,
           bgColor: `#F1E9CE`,
           description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
           rating: 3.3,
           scoresCount: 48798,
           director: `Justin Kurzel`,
           starring: [
             `Michael Fassbender`,
             `Marion Cotillard`,
             `Jack Madigan`
           ],
           runTime: 113,
           genre: `Drama`,
           released: 2015,
           id: 1,
           isFavorite: true,
           videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
           previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
         }],
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
       expect(dispatch).toHaveBeenCalledTimes(3);
       expect(dispatch).toHaveBeenNthCalledWith(1, {
         type: ActionType.GET_USER_DATA,
         payload: [{fake: true}],
       });
       expect(dispatch).toHaveBeenNthCalledWith(2, {
         type: ActionType.REQUIRE_AUTH,
         payload: AuthStatus.AUTH,
       });
       expect(dispatch).toHaveBeenNthCalledWith(3, {
         type: ActionType.REDIRECT_TO_ROUTE,
         payload: `/`,
       });
     });
  });


  it(`Logout GET request to /logout work correctly`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const logoutLoader = logout();

    apiMock
      .onGet(`/logout`)
      .reply(200, [{fake: true}]);

    return logoutLoader(dispatch, () => {}, api)
     .then(() => {
       expect(dispatch).toHaveBeenCalledTimes(3);
       expect(dispatch).toHaveBeenNthCalledWith(1, {
         type: ActionType.REQUIRE_AUTH,
         payload: AuthStatus.NO_AUTH,
       });
       expect(dispatch).toHaveBeenNthCalledWith(2, {
         type: ActionType.GET_USER_DATA,
         payload: null,
       });
       expect(dispatch).toHaveBeenNthCalledWith(3, {
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
      .reply(200, {
        "name": `Macbeth`,
        "poster_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`,
        "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`,
        "background_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`,
        "background_color": `#F1E9CE`,
        "description": `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
        "rating": 3.3,
        "scores_count": 48798,
        "director": `Justin Kurzel`,
        "starring": [
          `Michael Fassbender`,
          `Marion Cotillard`,
          `Jack Madigan`
        ],
        "run_time": 113,
        "genre": `Drama`,
        "released": 2015,
        "id": 1,
        "is_favorite": true,
        "video_link": `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
        "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
      });

    return currentMovieLoader(dispatch, () => {}, api)
     .then(() => {
       expect(dispatch).toHaveBeenCalledTimes(2);
       expect(dispatch).toHaveBeenNthCalledWith(1, {
         type: ActionType.GET_MOVIE_DATA,
         payload: {
           name: `Macbeth`,
           posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`,
           previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`,
           bgImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`,
           bgColor: `#F1E9CE`,
           description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
           rating: 3.3,
           scoresCount: 48798,
           director: `Justin Kurzel`,
           starring: [
             `Michael Fassbender`,
             `Marion Cotillard`,
             `Jack Madigan`
           ],
           runTime: 113,
           genre: `Drama`,
           released: 2015,
           id: 1,
           isFavorite: true,
           videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
           previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
         },
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
      .reply(200, [{
        "name": `Macbeth`,
        "poster_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`,
        "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`,
        "background_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`,
        "background_color": `#F1E9CE`,
        "description": `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
        "rating": 3.3,
        "scores_count": 48798,
        "director": `Justin Kurzel`,
        "starring": [
          `Michael Fassbender`,
          `Marion Cotillard`,
          `Jack Madigan`
        ],
        "run_time": 113,
        "genre": `Drama`,
        "released": 2015,
        "id": 1,
        "is_favorite": true,
        "video_link": `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
        "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
      }]);

    return favoriteMoviesLoader(dispatch, () => {}, api)
     .then(() => {
       expect(dispatch).toHaveBeenCalledTimes(1);
       expect(dispatch).toHaveBeenNthCalledWith(1, {
         type: ActionType.GET_FAVORITE_MOVIES,
         payload: [{
           name: `Macbeth`,
           posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`,
           previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`,
           bgImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`,
           bgColor: `#F1E9CE`,
           description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
           rating: 3.3,
           scoresCount: 48798,
           director: `Justin Kurzel`,
           starring: [
             `Michael Fassbender`,
             `Marion Cotillard`,
             `Jack Madigan`
           ],
           runTime: 113,
           genre: `Drama`,
           released: 2015,
           id: 1,
           isFavorite: true,
           videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
           previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
         }],
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
       expect(dispatch).toHaveBeenCalledTimes(1);
       expect(dispatch).toHaveBeenNthCalledWith(1, {
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
      .reply(200, {
        "name": `Macbeth`,
        "poster_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`,
        "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`,
        "background_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`,
        "background_color": `#F1E9CE`,
        "description": `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
        "rating": 3.3,
        "scores_count": 48798,
        "director": `Justin Kurzel`,
        "starring": [
          `Michael Fassbender`,
          `Marion Cotillard`,
          `Jack Madigan`
        ],
        "run_time": 113,
        "genre": `Drama`,
        "released": 2015,
        "id": 1,
        "is_favorite": true,
        "video_link": `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
        "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
      });

    return promoMovieLoader(dispatch, () => {}, api)
     .then(() => {
       expect(dispatch).toHaveBeenCalledTimes(1);
       expect(dispatch).toHaveBeenNthCalledWith(1, {
         type: ActionType.GET_PROMO_MOVIE,
         payload: {
           name: `Macbeth`,
           posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`,
           previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`,
           bgImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`,
           bgColor: `#F1E9CE`,
           description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
           rating: 3.3,
           scoresCount: 48798,
           director: `Justin Kurzel`,
           starring: [
             `Michael Fassbender`,
             `Marion Cotillard`,
             `Jack Madigan`
           ],
           runTime: 113,
           genre: `Drama`,
           released: 2015,
           id: 1,
           isFavorite: true,
           videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
           previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
         },
       });
     });
  });
});

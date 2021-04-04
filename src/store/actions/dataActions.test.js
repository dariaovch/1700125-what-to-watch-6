import {
  loadMovies,
  getMovieData,
  getMovieReviews,
  getFavoriteMovies,
  getPromoMovie,
} from './dataActions';
import {ActionType} from './actionType';

describe(`Data action creators work correctly`, () => {
  it(`Action creator for loading movies returns correct action`, () => {
    const movies = [
      {
        name: ``,
        posterImage: ``,
        previewImage: ``,
        backgroundImage: ``,
        backgroundColor: ``,
        description: ``,
        rating: ``,
        scoresCount: ``,
        director: ``,
        starring: ``,
        runTime: ``,
        genre: ``,
        released: ``,
        id: ``,
        isFavorite: ``,
        videoLink: ``,
        previewVideoLink: ``,
      },
      {
        name: ``,
        posterImage: ``,
        previewImage: ``,
        backgroundImage: ``,
        backgroundColor: ``,
        description: ``,
        rating: ``,
        scoreCount: ``,
        director: ``,
        starring: ``,
        runTime: ``,
        genre: ``,
        released: ``,
        id: ``,
        isFavorite: ``,
        videoLink: ``,
        previewVideoLink: ``,
      },
    ];

    const expectedAction = {
      type: ActionType.LOAD_MOVIES,
      payload: movies,
    };

    expect(loadMovies(movies)).toEqual(expectedAction);
  });

  it(`Action creator for getting current movie returns correct action`, () => {
    const movie = {
      name: ``,
      posterImage: ``,
      previewImage: ``,
      backgroundImage: ``,
      backgroundColor: ``,
      description: ``,
      rating: ``,
      scoresCount: ``,
      director: ``,
      starring: ``,
      runTime: ``,
      genre: ``,
      released: ``,
      id: ``,
      isFavorite: ``,
      videoLink: ``,
      previewVideoLink: ``,
    };


    const expectedAction = {
      type: ActionType.GET_MOVIE_DATA,
      payload: movie,
    };

    expect(getMovieData(movie)).toEqual(expectedAction);
  });

  it(`Action creator for getting comments returns correct action`, () => {
    const comments = [
      {
        id: 1,
        user: {
          id: 4,
          name: `Kate Muir`
        },
        rating: 8.9,
        comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `2019-05-08T14:13:56.569Z`
      },
      {
        id: 1,
        user: {
          id: 4,
          name: `Kate Muir`
        },
        rating: 8.9,
        comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `2019-05-08T14:13:56.569Z`
      },
    ];

    const expectedAction = {
      type: ActionType.GET_COMMENTS,
      payload: comments,
    };

    expect(getMovieReviews(comments)).toEqual(expectedAction);
  });

  it(`Action creator for getting favorite movies returns correct action`, () => {
    const favoriteMovies = [
      {
        name: ``,
        posterImage: ``,
        previewImage: ``,
        backgroundImage: ``,
        backgroundColor: ``,
        description: ``,
        rating: ``,
        scoresCount: ``,
        director: ``,
        starring: ``,
        runTime: ``,
        genre: ``,
        released: ``,
        id: ``,
        isFavorite: ``,
        videoLink: ``,
        previewVideoLink: ``,
      },
      {
        name: ``,
        posterImage: ``,
        previewImage: ``,
        backgroundImage: ``,
        backgroundColor: ``,
        description: ``,
        rating: ``,
        scoreCount: ``,
        director: ``,
        starring: ``,
        runTime: ``,
        genre: ``,
        released: ``,
        id: ``,
        isFavorite: ``,
        videoLink: ``,
        previewVideoLink: ``,
      },
    ];

    const expectedAction = {
      type: ActionType.GET_FAVORITE_MOVIES,
      payload: favoriteMovies,
    };

    expect(getFavoriteMovies(favoriteMovies)).toEqual(expectedAction);
  });

  it(`Action creator for getting promo movie returns correct action`, () => {
    const promoMovie = {
      name: ``,
      posterImage: ``,
      previewImage: ``,
      backgroundImage: ``,
      backgroundColor: ``,
      description: ``,
      rating: ``,
      scoresCount: ``,
      director: ``,
      starring: ``,
      runTime: ``,
      genre: ``,
      released: ``,
      id: ``,
      isFavorite: ``,
      videoLink: ``,
      previewVideoLink: ``,
    };


    const expectedAction = {
      type: ActionType.GET_PROMO_MOVIE,
      payload: promoMovie,
    };

    expect(getPromoMovie(promoMovie)).toEqual(expectedAction);
  });
});

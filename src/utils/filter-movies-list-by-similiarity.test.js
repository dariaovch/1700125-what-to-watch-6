import {filterMoviesListBySimilarity} from 'src/utils/filter-movies-list-by-similiarity';

let movies = null;

describe(`Filter list by similiarity function works correctly`, () => {
  beforeAll(() => {
    movies = [
      {
        id: 1,
        image: ``,
        title: `The Grand Budapest Hotel`,
        genre: `Drama`,
        year: `2014`,
        poster: ``,
      },
      {
        id: 2,
        image: ``,
        title: `Fantastic Beasts: The Crimes of Grindelwald`,
        genre: `Fantasy`,
        year: `2018`,
        poster: ``,
      },
      {
        id: 3,
        image: ``,
        title: `Bohemian Rhapsody`,
        genre: `Musical`,
        year: `2018`,
      },
      {
        id: 4,
        image: ``,
        title: `Macbeth`,
        genre: `History`,
        year: `2015`,
        poster: ``,
      },
      {
        id: 5,
        image: `img/aviator.jpg`,
        alt: `Aviator`,
        title: `Aviator`,
        genre: `Drama`,
        year: `2004`,
        poster: ``,
      },
      {
        id: 6,
        image: ``,
        alt: `What We Do in the Shadows`,
        title: `What We Do in the Shadows`,
        genre: `Comedy`,
        year: `2014`,
      },
    ];
  });

  it(`Filterlist function returns filtered movies array with the same genre`, () => {
    const expectedDramaArr = [
      {
        id: 1,
        image: ``,
        title: `The Grand Budapest Hotel`,
        genre: `Drama`,
        year: `2014`,
        poster: ``,
      },
      {
        id: 5,
        image: `img/aviator.jpg`,
        alt: `Aviator`,
        title: `Aviator`,
        genre: `Drama`,
        year: `2004`,
        poster: ``,
      },
    ];

    let movie = movies[0];
    expect(filterMoviesListBySimilarity(movies, movie)).toHaveLength(2);
    expect(filterMoviesListBySimilarity(movies, movie)).toStrictEqual(expect.arrayContaining(expectedDramaArr));
  });
});

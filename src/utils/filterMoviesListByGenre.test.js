import {filterMoviesListByGenre} from 'src/utils/filterMoviesListByGenre';

let movies = null;
let genre = null;

describe(`Filter list by genre function works correctly`, () => {
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
    const expectedComedyArr = [
      {
        id: 6,
        image: ``,
        alt: `What We Do in the Shadows`,
        title: `What We Do in the Shadows`,
        genre: `Comedy`,
        year: `2014`,
      },
    ];

    genre = `Drama`;
    expect(filterMoviesListByGenre(movies, genre)).toHaveLength(2);
    expect(filterMoviesListByGenre(movies, genre)).toStrictEqual(expect.arrayContaining(expectedDramaArr));

    genre = `Comedy`;
    expect(filterMoviesListByGenre(movies, genre)).toHaveLength(1);
    expect(filterMoviesListByGenre(movies, genre)).toStrictEqual(expect.arrayContaining(expectedComedyArr));

    genre = `All genres`;
    expect(filterMoviesListByGenre(movies, genre)).toHaveLength(6);
    expect(filterMoviesListByGenre(movies, genre)).toStrictEqual(expect.arrayContaining(movies));
  });
});

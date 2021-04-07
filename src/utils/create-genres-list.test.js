import {createGenresList} from 'src/utils/create-genres-list';

let movies = null;
describe(`Create genres list function works correctly`, () => {
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

  it(`Create genres list function returns genres array from movies array`, () => {
    const expectedResult = [`All genres`, `Drama`, `Fantasy`, `Musical`, `History`, `Comedy`];

    expect(createGenresList(movies)).toHaveLength(6);
    expect(createGenresList(movies)).toStrictEqual(expect.arrayContaining(expectedResult));
  });
});

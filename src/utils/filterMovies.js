import {movies} from "src/mocks/films";

export const filterListByGenre = (item) => {
  if (item === `All genres`) {
    return movies;
  }
  return movies.filter((movie) => movie.genre === item);
};

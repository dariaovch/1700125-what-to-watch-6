export const createGenresList = (movies) => {
  const allGenres = movies.map((item) => item.genre);
  const genres = allGenres.filter((item, i) => allGenres.indexOf(item) === i);
  genres.unshift(`All genres`);

  return genres;
};

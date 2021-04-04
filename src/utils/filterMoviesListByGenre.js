export const filterMoviesListByGenre = (movies, genre) => {
  const filteredList = genre === `All genres` ? movies : movies.filter((item) => item.genre === genre);

  return filteredList;
};

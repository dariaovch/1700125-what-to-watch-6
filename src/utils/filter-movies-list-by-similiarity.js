export const filterMoviesListBySimilarity = (moviesArr, currentMovie) => {
  const filteredByGenre = moviesArr.filter((item) => item.genre === currentMovie.genre);
  const moreLikeThisList = filteredByGenre.slice(0, 4);

  return moreLikeThisList;
};

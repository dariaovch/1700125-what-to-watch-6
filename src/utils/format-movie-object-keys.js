export const formatMovieObjectKeys = (item) => {
  return {
    name: item.name,
    posterImage: item.poster_image,
    previewImage: item.preview_image,
    bgImage: item.background_image,
    bgColor: item.background_color,
    description: item.description,
    rating: item.rating,
    scoresCount: item.scores_count,
    director: item.director,
    starring: item.starring,
    runTime: item.run_time,
    genre: item.genre,
    released: item.released,
    id: item.id,
    isFavorite: item.is_favorite,
    videoLink: item.video_link,
    previewVideoLink: item.preview_video_link,
  };
};

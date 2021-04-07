import React from 'react';
import PropTypes from 'prop-types';
import {formatRating} from 'src/utils/format-rating';

function Overview({movie}) {

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{movie.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{formatRating(movie.rating)}</span>
          <span className="movie-rating__count">{movie.scoresCount}</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{movie.description}</p>

        <p>{movie.description}</p>

        <p className="movie-card__director"><strong>Director: {movie.director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {movie.starring.join(`, `)} and others</strong></p>
      </div>
    </>
  );
}

Overview.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string,
    posterImage: PropTypes.string,
    previewImage: PropTypes.string,
    bgImage: PropTypes.string,
    bgColor: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number,
    scoresCount: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.array,
    runTime: PropTypes.number,
    genre: PropTypes.string,
    released: PropTypes.number,
    id: PropTypes.number,
    isFavorite: PropTypes.bool,
    videoLink: PropTypes.string,
    previewVideoLink: PropTypes.string,
  }),
};

export default Overview;

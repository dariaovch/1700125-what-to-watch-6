import React from 'react';
import PropTypes from 'prop-types';

function Overview({movie}) {

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{movie.ratingScore}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{movie.ratingLevel}</span>
          <span className="movie-rating__count">{movie.ratingCount}</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{movie.descriptionShort}</p>

        <p>{movie.descriptionFull}</p>

        <p className="movie-card__director"><strong>Director: {movie.director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {movie.starring.join(`, `)} and others</strong></p>
      </div>
    </>
  );
}

Overview.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string,
    bgImage: PropTypes.string,
    ratingScore: PropTypes.string,
    ratingLevel: PropTypes.string,
    ratingCount: PropTypes.string,
    director: PropTypes.string,
    starring: PropTypes.array,
    descriptionShort: PropTypes.string,
    descriptionFull: PropTypes.string,
  }),
};

export default Overview;

/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import {formatRating} from 'src/utils/formatRating';

function Overview({movie}) {

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{movie.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{formatRating(movie.rating)}</span>
          <span className="movie-rating__count">{movie.scores_count}</span>
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
    poster_image: PropTypes.string,
    preview_image: PropTypes.string,
    background_image: PropTypes.string,
    background_color: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number,
    scores_count: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.array,
    run_time: PropTypes.number,
    genre: PropTypes.string,
    released: PropTypes.number,
    id: PropTypes.number,
    is_favorite: PropTypes.bool,
    video_link: PropTypes.string,
    preview_video_link: PropTypes.string,
  }),
};

export default Overview;

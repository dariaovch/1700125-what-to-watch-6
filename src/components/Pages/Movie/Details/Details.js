/* eslint-disable camelcase */
import React from 'react';
import {Fragment} from 'react';
import PropTypes from 'prop-types';

function Details({movie}) {

  return (
    <>
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{movie.director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {movie.starring.map((item) => {
              return (
                <Fragment key={item}>
                  {item}, <br/>
                </Fragment>
              );
            })}
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{movie.run_time}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{movie.genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{movie.released}</span>
        </p>
      </div>
    </>
  );
}

Details.propTypes = {
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

export default Details;

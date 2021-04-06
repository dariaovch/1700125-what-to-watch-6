/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Breadcrumbs({movie}) {
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to={`/films/${movie.id}`} className="breadcrumbs__link">{movie.name}</Link>
        </li>
        <li className="breadcrumbs__item">
          <Link to={`/films/${movie.id}/review`} className="breadcrumbs__link">Add review</Link>
        </li>
      </ul>
    </nav>
  );
}

Breadcrumbs.propTypes = {
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
  })
};

export default Breadcrumbs;

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
  })
};

export default Breadcrumbs;

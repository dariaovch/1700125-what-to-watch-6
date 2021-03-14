import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Breadcrumbs({movie}) {
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to={`/films/${movie.id}`} className="breadcrumbs__link">{movie.title}</Link>
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
    starring: PropTypes.string,
    descriptionShort: PropTypes.string,
    descriptionFull: PropTypes.string,
    videoLink: PropTypes.string,
  })
};


export default Breadcrumbs;

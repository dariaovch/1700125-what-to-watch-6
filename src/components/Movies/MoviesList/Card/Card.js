import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Card({item, onEnter, onLeave}) {
  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <div className="small-movie-card__image">
        <img src={item.image} alt={item.alt} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${item.id}`}>{item.title}</Link>
      </h3>
    </article>
  );
}

Card.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string,
    ratingScore: PropTypes.string,
    ratingLevel: PropTypes.string,
    ratingCount: PropTypes.string,
    director: PropTypes.string,
    starring: PropTypes.string,
    descriptionShort: PropTypes.string,
    descriptionFull: PropTypes.string,
    videoLink: PropTypes.string,
  }),
  onEnter: PropTypes.func,
  onLeave: PropTypes.func,
};

export default Card;

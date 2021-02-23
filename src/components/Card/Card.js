import React from 'react';
import PropTypes from 'prop-types';

function Card({item}) {

  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={item.image} alt={item.alt} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{item.title}</a>
      </h3>
    </article>
  );
}

Card.propTypes = {
  item: PropTypes.object.isRequired
};

export default Card;

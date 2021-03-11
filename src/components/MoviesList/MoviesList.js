import React from 'react';
import PropTypes from 'prop-types';
import Card from 'src/components/Card/Card.js';

function MoviesList({movies}) {
  const [activeMovie, setActiveMovie] = React.useState({
    id: ``,
    image: ``,
    alt: ``,
    title: ``,
    genre: ``,
    year: ``,
    poster: ``,
    ratingScore: ``,
    ratingLevel: ``,
    ratingCount: ``,
    director: ``,
    starring: ``,
    descriptionShort: ``,
    descriptionFull: ``,
    videoLink: ``,
  });

  function handleCardHover(item) {
    setActiveMovie(item);
  }

  function handleCardLeave() {
    setActiveMovie({
      id: ``,
      image: ``,
      alt: ``,
      title: ``,
      genre: ``,
      year: ``,
      poster: ``,
      ratingScore: ``,
      ratingLevel: ``,
      ratingCount: ``,
      director: ``,
      starring: ``,
      descriptionShort: ``,
      descriptionFull: ``,
      videoLink: ``,
    });
  }

  // eslint-disable-next-line no-console
  console.log(activeMovie);

  return (
    <div className="catalog__movies-list">
      {movies.map((item) => <Card item={item} key={item.id} onCardHover={handleCardHover} onCardLeave={handleCardLeave} />)}
    </div>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
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
  })),
};

export default MoviesList;

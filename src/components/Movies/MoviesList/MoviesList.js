import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card/Card';

function MoviesList({movies}) {
  const [, setActiveMovie] = React.useState();

  return (
    <div className="catalog__movies-list">
      {movies.map((item) =>
        <Card
          key={item.id}
          item={item}
          onEnter={() => setActiveMovie(item)}
          onLeave={() => setActiveMovie()} />
      )}
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

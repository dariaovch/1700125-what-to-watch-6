import React from 'react';
import PropTypes from 'prop-types';
import Card from 'src/components/Movies/MoviesList/Card/Card';

function MoviesList({movies}) {
  const [activeMovie, setActiveMovie] = React.useState();

  function handleCardMouseOver(item, activeVideoRef) {
    setActiveMovie(item);
    setTimeout(() => {
      activeVideoRef.current.play();
    }, 1000);
  }

  function handleCardMouseOut(activeVideoRef) {
    activeVideoRef.current.pause();
    setActiveMovie();
  }

  return (
    <div className="catalog__movies-list">
      {movies.map((item) =>
        <Card
          key={item.id}
          item={item}
          onOver={handleCardMouseOver}
          onOut={handleCardMouseOut}
          activeMovie={activeMovie}
        />
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

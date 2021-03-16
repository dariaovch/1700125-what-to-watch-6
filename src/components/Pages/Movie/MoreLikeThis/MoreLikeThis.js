import React from 'react';
import PropTypes from 'prop-types';
import Card from 'src/components/Movies/MoviesList/Card/Card';

function MoreLikeThis({movies, currentMovie}) {
  const filterMoviesByGenre = (item) => {
    return item.genre === currentMovie.genre;
  };

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <div className="catalog__movies-list">
        {movies.filter(filterMoviesByGenre).slice(0, 4).map((item) => <Card item={item} key={item.id} />)}
      </div>
    </section>
  );
}

MoreLikeThis.propTypes = {
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
    starring: PropTypes.array,
    descriptionShort: PropTypes.string,
    descriptionFull: PropTypes.string,
    videoLink: PropTypes.string,
  })),
  currentMovie: PropTypes.object,
};

export default MoreLikeThis;



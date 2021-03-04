import React from 'react';
import PropTypes from 'prop-types';
import controllersImage from 'src/images/controllersImage.svg';
import MovieCard from 'src/components/MovieCard/MovieCard.js';
import Card from 'src/components/Card/Card.js';
import Footer from 'src/components/Footer/Footer.js';

function Movie({movies}) {
  return (
    <>
      <div className="visually-hidden">
        {/* <!-- inject:svg --> */}
        <img src={controllersImage} />
        {/* <!-- endinject --> */}
      </div>

      <MovieCard movie={movies[0]} />

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__movies-list">
            {movies.slice(1, 5).map((item) => <Card item={item} key={item.id} />)}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

Movie.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
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
  }))
};

export default Movie;

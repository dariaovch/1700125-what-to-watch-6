import React from 'react';
import PropTypes from 'prop-types';
import controllersImage from 'src/images/controllersImage.svg';
import Header from 'src/components/Header/Header.js';
// import {movies} from 'src/db.js';
// import Card from 'src/components/Card/Card.js';
import Footer from 'src/components/Footer/Footer.js';
import MoviesList from '../MoviesList/MoviesList';

function MyList({movies, handleCardClick}) {
  return (
    <>
      <div className="visually-hidden">
        {/* <!-- inject:svg --> */}
        <img src={controllersImage} />
        {/* <!-- endinject --> */}
      </div>

      <div className="user-page">
        <Header theme="user" hasAvatar={true} />

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <MoviesList movies={movies} handleClick={handleCardClick} />
        </section>

        <Footer />
      </div>
    </>
  );
}

MyList.propTypes = {
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
  handleCardClick: PropTypes.func,
};

export default MyList;

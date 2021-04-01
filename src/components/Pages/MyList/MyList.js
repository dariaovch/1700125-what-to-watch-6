import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import controllersImage from 'src/images/controllersImage.svg';
import Header from 'src/components/Layout/Header/Header';
import MoviesList from 'src/components/Movies/MoviesList/MoviesList';
import Footer from 'src/components/Layout/Footer/Footer';

function MyList({movies}) {
  return (
    <>
      <div className="visually-hidden">
        <img src={controllersImage} />
      </div>

      <div className="user-page">
        <Header theme="user" hasAvatar={true} />

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <MoviesList movies={movies} />
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
    starring: PropTypes.array,
    descriptionShort: PropTypes.string,
    descriptionFull: PropTypes.string,
    videoLink: PropTypes.string,
  }))
};

const mapStateToProps = ({DATA}) => ({
  movies: DATA.movies,
});

export default connect(mapStateToProps)(MyList);

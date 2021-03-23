import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';
import controllersImage from 'src/images/controllersImage.svg';
import MovieCard from 'src/components/Pages/Movie/MovieCard/MovieCard';
import Footer from 'src/components/Layout/Footer/Footer';
import NotFound from 'src/components/Pages/NotFound/NotFound';
import MoreLikeThis from 'src/components/Pages/Movie/MoreLikeThis/MoreLikeThis';

function Movie({movies}) {
  const {id} = useParams();
  const currentMovie = movies.find((item) => item.id === id);

  if (!currentMovie) {
    return <NotFound />;
  }

  return (
    <>
      <div className="visually-hidden">
        <img src={controllersImage} />
      </div>

      <MovieCard movie={currentMovie} />

      <div className="page-content">

        <MoreLikeThis movies={movies} currentMovie={currentMovie} />

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

const mapStateToProps = (state) => ({
  movies: state.movies,
});

export default connect(mapStateToProps)(Movie);

import React from 'react';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';
import controllersImage from 'src/images/controllersImage.svg';
import MovieCard from 'src/components/MovieCard/MovieCard';
import Card from 'src/components/Movies/MoviesList/Card/Card';
import Footer from 'src/components/Layout/Footer/Footer';
import NotFound from 'src/components/Pages/NotFound/NotFound';

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
    bgImage: PropTypes.string,
    ratingScore: PropTypes.string,
    ratingLevel: PropTypes.string,
    ratingCount: PropTypes.string,
    director: PropTypes.string,
    starring: PropTypes.string,
    descriptionShort: PropTypes.string,
    descriptionFull: PropTypes.string,
    videoLink: PropTypes.string,
  }))
};

export default Movie;

import React from 'react';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';
import controllersImage from 'src/images/controllersImage.svg';
import Header from 'src/components/Layout/Header/Header';
import ReviewForm from 'src/components/ReviewForm/ReviewForm';

function AddReview({movies, stars}) {
  const {id} = useParams();

  const currentMovie = movies.find((item) => item.id === id);

  function handleFormSubmit(evt) {
    evt.preventDefault();
  }

  return (
    <>
      <div className="visually-hidden">
        <img src={controllersImage} />
      </div>

      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={currentMovie.bgImage} alt={currentMovie.alt} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header hasAvatar={true} hasBreadcrumbs={true} movie={currentMovie} />

          <div className="movie-card__poster movie-card__poster--small">
            <img src={currentMovie.poster} alt={currentMovie.poster} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <ReviewForm stars={stars} onSubmit={handleFormSubmit} />
        </div>

      </section>

    </>
  );
}

AddReview.propTypes = {
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
  stars: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
  })),
};

export default AddReview;

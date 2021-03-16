import React from 'react';
import PropTypes from 'prop-types';
import {reviews} from 'src/mocks/reviews';
import ReviewItem from 'src/components/Pages/Movie/MovieReviews/ReviewItem';

function MovieReviews() {

  return (
    <div className="movie-card__reviews-col">
      {reviews.map((item) => <ReviewItem key={item.id} item={item} />)}
    </div>

  );
}

MovieReviews.propTypes = {
  movie: PropTypes.shape({
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
  }),
};

export default MovieReviews;

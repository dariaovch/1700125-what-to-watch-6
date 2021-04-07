import React from 'react';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import ReviewItem from 'src/components/pages/movie/movie-reviews/review-item';
import {getComments} from 'src/store/actions/api-actions';

function MovieReviews() {
  const {id} = useParams();
  const {movieReviews} = useSelector((state) => state.DATA);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getComments(id));
  }, []);

  return (
    <div className="movie-card__reviews-col">
      {movieReviews.map((item) => <ReviewItem key={item.id} item={item} />)}
    </div>

  );
}

MovieReviews.propTypes = {
  movieReviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    user: PropTypes.object,
    rating: PropTypes.number,
    comment: PropTypes.string,
    date: PropTypes.string
  })),
  onLoadMovieReviews: PropTypes.func,
};

export default MovieReviews;

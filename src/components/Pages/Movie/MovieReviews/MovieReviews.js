import React from 'react';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import ReviewItem from 'src/components/Pages/Movie/MovieReviews/ReviewItem';
import {getComments} from 'src/store/actions/apiActions';

function MovieReviews({movieReviews, onLoadMovieReviews}) {
  const {id} = useParams();

  React.useEffect(() => {
    onLoadMovieReviews(id);
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

const mapStateToProps = (state) => ({
  movieReviews: state.movieReviews,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadMovieReviews(id) {
    dispatch(getComments(id));
  },
});

export {MovieReviews};
export default connect(mapStateToProps, mapDispatchToProps)(MovieReviews);

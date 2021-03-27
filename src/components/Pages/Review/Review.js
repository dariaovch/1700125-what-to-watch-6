/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';
import controllersImage from 'src/images/controllersImage.svg';
import Header from 'src/components/Layout/Header/Header';
import ReviewForm from 'src/components/Pages/Review/ReviewForm/ReviewForm';
import {stars} from 'src/utils/constants';
import {getCurrentMovieData} from '../../../store/apiActions';

function AddReview({currentMovie, onLoadCurrentMovieData}) {
  const {id} = useParams();

  React.useEffect(() => {
    onLoadCurrentMovieData(id);
  }, []);

  return (
    <>
      <div className="visually-hidden">
        <img src={controllersImage} />
      </div>

      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={currentMovie.background_image} alt={currentMovie.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header hasBreadcrumbs={true} movie={currentMovie} />

          <div className="movie-card__poster movie-card__poster--small">
            <img src={currentMovie.poster_image} alt={currentMovie.name} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <ReviewForm stars={stars} />
        </div>

      </section>

    </>
  );
}

AddReview.propTypes = {
  currentMovie: PropTypes.shape({
    name: PropTypes.string,
    poster_image: PropTypes.string,
    preview_image: PropTypes.string,
    background_image: PropTypes.string,
    background_color: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number,
    scores_count: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.array,
    run_time: PropTypes.number,
    genre: PropTypes.string,
    released: PropTypes.number,
    id: PropTypes.number,
    is_favorite: PropTypes.bool,
    video_link: PropTypes.string,
    preview_video_link: PropTypes.string,
  }),
  stars: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
  })),
  onLoadCurrentMovieData: PropTypes.func,
};

const mapStateToProps = (state) => ({
  currentMovie: state.currentMovie,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadCurrentMovieData(id) {
    dispatch(getCurrentMovieData(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddReview);

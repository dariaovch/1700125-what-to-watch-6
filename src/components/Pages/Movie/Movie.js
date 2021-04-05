/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';
import MovieCard from 'src/components/Pages/Movie/MovieCard/MovieCard';
import Footer from 'src/components/Layout/Footer/Footer';
import NotFound from 'src/components/Pages/NotFound/NotFound';
import MoreLikeThis from 'src/components/Pages/Movie/MoreLikeThis/MoreLikeThis';
import {getCurrentMovieData} from 'src/store/actions/apiActions';
import {getCurrentMovie, getMovies} from 'src/store/selectors/data';

function Movie(props) {
  const {movies, currentMovie, onLoadCurrentMovieData} = props;

  const {id} = useParams();

  React.useEffect(() => {
    onLoadCurrentMovieData(id);
  }, []);

  if (!currentMovie) {
    return <NotFound />;
  }

  return (
    <>
      <div className="visually-hidden">
        <img src='src/images/controllersImage.svg' />
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
  })),
  currentMovie: PropTypes.object,
  onLoadCurrentMovieData: PropTypes.func,
};

const mapStateToProps = (state) => ({
  movies: getMovies(state),
  currentMovie: getCurrentMovie(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadCurrentMovieData(id) {
    dispatch(getCurrentMovieData(id));
  },
});

export {Movie};
export default connect(mapStateToProps, mapDispatchToProps)(Movie);

/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import {useParams, useLocation} from 'react-router-dom';
import {connect} from 'react-redux';
import {getFavoriteMovies} from 'src/store/reducers/data/selectors';
import {changeFavoriteStatus} from 'src/store/actions/apiActions';
import {addToFavoriteCode, removeFromFavoriteCode} from 'src/utils/constants';


function MyListButton(props) {
  const {promoMovie, favoriteMovies, onChangeFavoriteMovieStatus} = props;
  const location = useLocation();
  const {id} = useParams();

  const handleMyListClick = () => {
    const movieId = location.pathname === `/` ? promoMovie.id : id;
    const isFavorite = favoriteMovies ? favoriteMovies.find((item) => item.id === movieId) : false;
    if (isFavorite) {
      onChangeFavoriteMovieStatus(movieId, removeFromFavoriteCode);
    } else {
      onChangeFavoriteMovieStatus(movieId, addToFavoriteCode);
    }
  };

  return (
    <button className="btn btn--list movie-card__button" type="button" onClick={handleMyListClick}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>
      <span>My list</span>
    </button>
  );
}

MyListButton.propTypes = {
  promoMovie: PropTypes.object,
  favoriteMovies: PropTypes.arrayOf(PropTypes.shape({
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
  onChangeFavoriteMovieStatus: PropTypes.func,
  onLoadFavoriteMovies: PropTypes.func,
};

const mapStateToProps = (state) => ({
  favoriteMovies: getFavoriteMovies(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFavoriteMovieStatus(movieId, statusCode) {
    dispatch(changeFavoriteStatus(movieId, statusCode));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MyListButton);

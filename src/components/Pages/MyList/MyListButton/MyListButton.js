/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {changeFavoriteStatus} from 'src/store/actions/apiActions';
import {addToFavoriteCode, removeFromFavoriteCode} from 'src/utils/constants';


function MyListButton({movie}) {
  const dispatch = useDispatch();

  const handleMyListClick = () => {
    if (!movie.is_favorite) {
      dispatch(changeFavoriteStatus(movie.id, addToFavoriteCode));
    } else {
      dispatch(changeFavoriteStatus(movie.id, removeFromFavoriteCode));
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
  movie: PropTypes.shape({
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
};

export default MyListButton;

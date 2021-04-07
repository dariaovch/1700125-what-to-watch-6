import React from 'react';
import PropTypes from 'prop-types';

function MyListButton({movie, onMyListClick}) {
  const id = movie.id;
  const statusCode = !movie.isFavorite ? 1 : 0;

  return (
    <button className="btn btn--list movie-card__button" type="button" onClick={() => onMyListClick(id, statusCode)}>
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
    posterImage: PropTypes.string,
    previewImage: PropTypes.string,
    bgImage: PropTypes.string,
    bgColor: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number,
    scoresCount: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.array,
    runTime: PropTypes.number,
    genre: PropTypes.string,
    released: PropTypes.number,
    id: PropTypes.number,
    isFavorite: PropTypes.bool,
    videoLink: PropTypes.string,
    previewVideoLink: PropTypes.string,
  }),
  onMyListClick: PropTypes.func,
};

export default MyListButton;

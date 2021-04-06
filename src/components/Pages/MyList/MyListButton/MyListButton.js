/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

function MyListButton({onMyListClick}) {

  return (
    <button className="btn btn--list movie-card__button" type="button" onClick={onMyListClick}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>
      <span>My list</span>
    </button>
  );
}

MyListButton.propTypes = {
  onMyListClick: PropTypes.func,
};

export default MyListButton;

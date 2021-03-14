import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

function MoviesGenres({genres}) {
  return (
    <ul className="catalog__genres-list">
      {genres.map((item, i) =>
        <li key={i} className={cn(`catalog__genres-item`, {'catalog__genres-item--active': i === 0})} >
          <a href="#" className="catalog__genres-link">{item}</a>
        </li>
      )}
    </ul>
  );
}

MoviesGenres.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MoviesGenres;

import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {createGenresList} from 'src/utils/createGenresList';

function MoviesGenres({onFilterListByGenre}) {
  const {movies, genre} = useSelector((state) => state.DATA);

  const genres = createGenresList(movies);

  return (
    <ul className="catalog__genres-list">
      {genres.map((item) =>
        <li key={item} className={cn(`catalog__genres-item`, {'catalog__genres-item--active': item === genre})} >
          <a href="#" className="catalog__genres-link" onClick={() => onFilterListByGenre(item)}>{item}</a>
        </li>
      )}
    </ul>
  );
}

MoviesGenres.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  genre: PropTypes.object,
  onFilterListByGenre: PropTypes.func,
};

export default MoviesGenres;

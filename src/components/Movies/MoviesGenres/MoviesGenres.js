import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getGenre, getMovies} from 'src/store/selectors/data';
import {createGenresList} from 'src/utils/createGenresList';

function MoviesGenres(props) {
  const {
    movies,
    genre,
    onFilterListByGenre,
  } = props;

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

const mapStateToProps = (state) => ({
  movies: getMovies(state),
  genre: getGenre(state),
});

export {MoviesGenres};
export default connect(mapStateToProps)(MoviesGenres);

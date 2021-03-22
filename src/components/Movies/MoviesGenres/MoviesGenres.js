import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from 'src/store/action';


function MoviesGenres(props) {
  const {
    movies,
    genres,
    genre,
    onFilterListByGenre,
  } = props;

  return (
    <ul className="catalog__genres-list">
      {genres.map((item) =>
        <li key={item.id} className={cn(`catalog__genres-item`, {'catalog__genres-item--active': item === genre})} >
          <a href="#" className="catalog__genres-link" onClick={() => onFilterListByGenre(item, movies)}>{item.title}</a>
        </li>
      )}
    </ul>
  );
}

MoviesGenres.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
  genre: PropTypes.object,
  onFilterListByGenre: PropTypes.func,
};

const mapStateToProps = (state) => ({
  genre: state.genre,
});

const mapDispatchToProps = (dispatch) => ({
  onFilterListByGenre(item, movies) {
    dispatch(ActionCreator.filterListByGenre(item, movies));
  },
});

export {MoviesGenres};
export default connect(mapStateToProps, mapDispatchToProps)(MoviesGenres);

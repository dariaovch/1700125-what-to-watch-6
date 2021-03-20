import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from 'src/store/action';


function MoviesGenres(props) {
  const {
    genres,
    genre,
    onFilterListByGenre,
  } = props;

  return (
    <ul className="catalog__genres-list">
      {genres.map((item, i) =>
        <li key={i} className={cn(`catalog__genres-item`, {'catalog__genres-item--active': item === genre})} >
          <a href="#" className="catalog__genres-link" onClick={() => onFilterListByGenre(item)}>{item}</a>
        </li>
      )}
    </ul>
  );
}

MoviesGenres.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  genre: PropTypes.string,
  onFilterListByGenre: PropTypes.func,
};

const mapStateToProps = (state) => ({
  genre: state.genre,
});

const mapDispatchToProps = (dispatch) => ({
  onFilterListByGenre(item) {
    dispatch(ActionCreator.filterListByGenre(item));
  },
});

export {MoviesGenres};
export default connect(mapStateToProps, mapDispatchToProps)(MoviesGenres);

import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from 'src/store/action';


function MoviesGenres(props) {
  const {
    genre,
    onCrimesClick,
    onDocumentaryClick,
    onDramasClick,
    onHorrorClick,
    onScifiClick,
    onAllGenresClick,
  } = props;

  return (
    <ul className="catalog__genres-list">
      {/* {genres.map((item, i) => */}
      <li name="All Genres" className={cn(`catalog__genres-item`, {'catalog__genres-item--active': genre})} >
        <a href="#" className="catalog__genres-link" onClick={onAllGenresClick}>All Genres</a>
      </li>
      <li name="Crimes" className={cn(`catalog__genres-item`, {'catalog__genres-item--active': name === genre})} >
        <a href="#" className="catalog__genres-link" onClick={onCrimesClick}>Crimes</a>
      </li>
      <li name="Documentary" className={cn(`catalog__genres-item`, {'catalog__genres-item--active': name === genre})} >
        <a href="#" className="catalog__genres-link" onClick={onDocumentaryClick}>Documentary</a>
      </li>
      <li name="Dramas" className={cn(`catalog__genres-item`, {'catalog__genres-item--active': name === genre})} >
        <a href="#" className="catalog__genres-link" onClick={onDramasClick}>Dramas</a>
      </li>
      <li name="Horror" className={cn(`catalog__genres-item`, {'catalog__genres-item--active': name === genre})} >
        <a href="#" className="catalog__genres-link" onClick={onHorrorClick}>Horror</a>
      </li>
      <li name="SciFi" className={cn(`catalog__genres-item`, {'catalog__genres-item--active': name === genre})} >
        <a href="#" className="catalog__genres-link" onClick={onScifiClick}>Sci-fi</a>
      </li>
      {/* // )} */}
    </ul>
  );
}

MoviesGenres.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  genre: PropTypes.string,
  onCrimesClick: PropTypes.func,
  onDocumentaryClick: PropTypes.func,
  onDramasClick: PropTypes.func,
  onHorrorClick: PropTypes.func,
  onScifiClick: PropTypes.func,
  onAllGenresClick: PropTypes.func,
};

const mapStateToProps = (state) => ({
  genre: state.genre,
});

const mapDispatchToProps = (dispatch) => ({
  onCrimesClick() {
    dispatch(ActionCreator.filterCrime());
  },
  onDocumentaryClick() {
    dispatch(ActionCreator.filterDocumentary());
  },
  onDramasClick() {
    dispatch(ActionCreator.filterDramas());
  },
  onHorrorClick() {
    dispatch(ActionCreator.filterHorror());
  },
  onScifiClick() {
    dispatch(ActionCreator.filterScifi());
  },
  onAllGenresClick() {
    dispatch(ActionCreator.listReset());
  }
});

export {MoviesGenres};
export default connect(mapStateToProps, mapDispatchToProps)(MoviesGenres);

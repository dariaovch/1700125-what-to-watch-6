import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getSimiliarMovies} from 'src/store/selectors/data';
import MoviesList from 'src/components/movies-catalog/movies-list/movies-list';

function MoreLikeThis({movies}) {
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <MoviesList movies={movies} />
    </section>
  );
}

MoreLikeThis.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => ({
  movies: getSimiliarMovies(state),
});

export {MoreLikeThis};
export default connect(mapStateToProps)(MoreLikeThis);



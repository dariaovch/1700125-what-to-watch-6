import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Card from 'src/components/Movies/MoviesList/Card/Card';
import {getSimiliarMovies} from 'src/store/selectors/data';

function MoreLikeThis({movies}) {
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <div className="catalog__movies-list">
        {movies.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </section>
  );
}

MoreLikeThis.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string,
    bgImage: PropTypes.string,
    ratingScore: PropTypes.string,
    ratingLevel: PropTypes.string,
    ratingCount: PropTypes.string,
    director: PropTypes.string,
    starring: PropTypes.array,
    descriptionShort: PropTypes.string,
    descriptionFull: PropTypes.string,
    videoLink: PropTypes.string,
  })),
  currentMovie: PropTypes.object,
};

const mapStateToProps = (state) => ({
  movies: getSimiliarMovies(state),
});

export {MoreLikeThis};
export default connect(mapStateToProps)(MoreLikeThis);



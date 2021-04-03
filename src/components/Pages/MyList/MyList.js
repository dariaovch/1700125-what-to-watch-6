/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import controllersImage from 'src/images/controllersImage.svg';
import Header from 'src/components/Layout/Header/Header';
import MoviesList from 'src/components/Movies/MoviesList/MoviesList';
import Footer from 'src/components/Layout/Footer/Footer';
import Preloader from 'src/components/Pages/Preloader/Preloader';
import {getFavoriteMovies} from 'src/store/selectors/data';
import {getMoviesToWatch} from 'src/store/actions/apiActions';

function MyList({favoriteMovies, onLoadFavoriteMovies}) {
  React.useState(() => {
    onLoadFavoriteMovies();
  }, [favoriteMovies]);

  if (!favoriteMovies) {
    return <Preloader />;
  }

  return (
    <>
      <div className="visually-hidden">
        <img src={controllersImage} />
      </div>

      <div className="user-page">
        <Header theme="user" />

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <MoviesList movies={favoriteMovies} />
        </section>

        <Footer />
      </div>
    </>
  );
}

MyList.propTypes = {
  favoriteMovies: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    poster_image: PropTypes.string,
    preview_image: PropTypes.string,
    background_image: PropTypes.string,
    background_color: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number,
    scores_count: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.array,
    run_time: PropTypes.number,
    genre: PropTypes.string,
    released: PropTypes.number,
    id: PropTypes.number,
    is_favorite: PropTypes.bool,
    video_link: PropTypes.string,
    preview_video_link: PropTypes.string,
  })),
  onLoadFavoriteMovies: PropTypes.func,
};

const mapStateToProps = (state) => ({
  favoriteMovies: getFavoriteMovies(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFavoriteMovies() {
    dispatch(getMoviesToWatch());
  }
});

export {MyList};
export default connect(mapStateToProps, mapDispatchToProps)(MyList);

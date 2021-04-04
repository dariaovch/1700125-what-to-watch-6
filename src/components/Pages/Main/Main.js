/* eslint-disable camelcase */
import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchMovies, getCurrentUser, getPromo} from 'src/store/actions/apiActions';
import controllersImage from 'src/images/controllersImage.svg';
import Header from 'src/components/Layout/Header/Header';
import Footer from 'src/components/Layout/Footer/Footer';
import MoviesList from 'src/components/Movies/MoviesList/MoviesList';
import MoviesGenres from 'src/components/Movies/MoviesGenres/MoviesGenres';
import Preloader from 'src/components/Pages/Preloader/Preloader';
import {AuthStatus} from 'src/store/auth';
import {getDataLoadedStatus, getMoviesByGenre, getPromoMovie} from 'src/store/selectors/data';
import {getUserData, getAuthStatus} from 'src/store/selectors/user';
import MyListButton from 'src/components/Pages/MyList/MyListButton/MyListButton';
import {filterListByGenre} from 'src/store/actions/listActions';

function Main(props) {
  const {
    movies,
    isDataLoaded,
    onLoadMovies,
    authStatus,
    onGetUserData,
    userData,
    promoMovie,
    onGetPromoMovie,
    onFilterListByGenre
  } = props;

  const handleFilterListByGenre = (item) => {
    onFilterListByGenre(item);
  };

  React.useEffect(() => {
    if (authStatus === AuthStatus.AUTH) {
      onGetUserData();
    }
  }, []);

  React.useEffect(() => {
    if (!promoMovie) {
      onGetPromoMovie();
    }
  }, [promoMovie]);


  React.useEffect(() => {
    if (!isDataLoaded) {
      onLoadMovies();
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <Preloader />
    );
  }

  return (
    <>
      <div className="visually-hidden">
        <img src={controllersImage} />
      </div>

      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={`` || (promoMovie && promoMovie.background_image)} alt={`` || (promoMovie && promoMovie.name)} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header theme="movie" email={`` || (userData && userData.email)} />

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <Link to={`/films/${promoMovie.id}`}>
                <img src={`` || (promoMovie && promoMovie.poster_image)} alt={`` || (promoMovie && promoMovie.name)} width="218" height="327" />
              </Link>
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{`` || (promoMovie && promoMovie.name)}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{`` || (promoMovie && promoMovie.genre)}</span>
                <span className="movie-card__year">{`` || (promoMovie && promoMovie.released)}</span>
              </p>

              <div className="movie-card__buttons">
                <Link to={`/player/${promoMovie.id}`} className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use href="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>

                <MyListButton promoMovie={promoMovie} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <MoviesGenres onFilterListByGenre={handleFilterListByGenre} />
          <MoviesList movies={movies} />

        </section>

        <Footer />
      </div>
    </>
  );
}

Main.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
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
  isDataLoaded: PropTypes.bool,
  onLoadMovies: PropTypes.func,
  authStatus: PropTypes.string,
  onGetUserData: PropTypes.func,
  userData: PropTypes.object,
  promoMovie: PropTypes.object,
  onGetPromoMovie: PropTypes.func,
  onFilterListByGenre: PropTypes.func,
};

const mapStateToProps = (state) => ({
  movies: getMoviesByGenre(state),
  isDataLoaded: getDataLoadedStatus(state),
  authStatus: getAuthStatus(state),
  userData: getUserData(state),
  promoMovie: getPromoMovie(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadMovies() {
    dispatch(fetchMovies());
  },
  onGetUserData() {
    dispatch(getCurrentUser());
  },
  onGetPromoMovie() {
    dispatch(getPromo());
  },
  onFilterListByGenre(item) {
    dispatch(filterListByGenre(item));
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);


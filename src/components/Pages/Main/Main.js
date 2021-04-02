/* eslint-disable camelcase */
import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {cardsAmount} from 'src/utils/constants';
import {fetchMovies, getCurrentUser, getPromo} from 'src/store/actions/apiActions';
import controllersImage from 'src/images/controllersImage.svg';
import Header from 'src/components/Layout/Header/Header';
import Footer from 'src/components/Layout/Footer/Footer';
import MoviesList from 'src/components/Movies/MoviesList/MoviesList';
import MoviesGenres from 'src/components/Movies/MoviesGenres/MoviesGenres';
import Preloader from 'src/components/Pages/Preloader/Preloader';
import {genres} from 'src/utils/constants';
import {AuthStatus} from 'src/store/auth';
import {getDataLoadedStatus, getMovies, getPromoMovie} from 'src/store/reducers/data/selectors';
import {getUserData, getAuthStatus} from 'src/store/reducers/user/selectors';

function Main(props) {
  const {
    movies,
    isDataLoaded,
    onLoadMovies,
    authStatus,
    onGetUserData,
    userData,
    promoMovie,
    onGetPromoMovie
  } = props;


  const [shownCards, setShownCards] = React.useState([]);
  const [isMoreButtonVisible, setIsMoreButtonVisible] = React.useState(false);

  React.useEffect(() => {
    if (authStatus === AuthStatus.AUTH) {
      onGetUserData();
    }
  }, []);

  React.useEffect(() => {
    setShownCards(movies.slice(0, cardsAmount));
    if (movies.length <= cardsAmount) {
      setIsMoreButtonVisible(false);
    } else {
      setIsMoreButtonVisible(true);
    }
  }, [movies]);

  const handleMoreButtonClick = React.useCallback(
      () => {
        setShownCards(movies.slice(0, shownCards.length + cardsAmount));
        if (shownCards.length >= movies.length - cardsAmount) {
          setIsMoreButtonVisible(false);
        }
      },
      [shownCards]
  );

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
          <img src={`` || promoMovie.background_image} alt={`` || promoMovie.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header theme="movie" email={`` || (userData && userData.email)} />

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <Link to={`/films/${promoMovie.id}`}>
                <img src={`` || promoMovie.poster_image} alt={`` || promoMovie.name} width="218" height="327" />
              </Link>
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{`` || promoMovie.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{`` || promoMovie.genre}</span>
                <span className="movie-card__year">{`` || promoMovie.released}</span>
              </p>

              <div className="movie-card__buttons">
                <Link to={`/player/${promoMovie.id}`} className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use href="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <Link to={`/mylist`} className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use href="#add"></use>
                  </svg>
                  <span>My list</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <MoviesGenres genres={genres} movies={movies} />
          <MoviesList movies={shownCards} isMoreButtonVisible={isMoreButtonVisible} onMoreButtonClick={handleMoreButtonClick} />

        </section>

        <Footer />
      </div>
    </>
  );
}

Main.propTypes = {
  // genres: PropTypes.arrayOf(PropTypes.object).isRequired,
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
};

const mapStateToProps = (state) => ({
  movies: getMovies(state),
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
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);


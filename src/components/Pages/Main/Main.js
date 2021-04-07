import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect, useSelector, useDispatch} from 'react-redux';
import {fetchMovies, getCurrentUser, getPromo} from 'src/store/actions/api-actions';
import Header from 'src/components/layout/header/header';
import Footer from 'src/components/layout/footer/footer';
import MoviesList from 'src/components/movies/movies-list/movies-list';
import MoviesGenres from 'src/components/movies/movies-genres/movies-genres';
import Preloader from 'src/components/pages/preloader/preloader';
import MyListButton from 'src/components/pages/my-list/my-list-button/my-list-button';
import {filterListByGenre} from 'src/store/actions/list-actions';
import {getMoviesByGenre} from 'src/store/selectors/data';

function Main({movies}) {
  const {
    isDataLoaded,
    promoMovie,
  } = useSelector((state) => state.DATA);

  const {
    userData,
  } = useSelector((state) => state.USER);

  const dispatch = useDispatch();

  const handleFilterListByGenre = (item) => {
    dispatch(filterListByGenre(item));
  };

  React.useEffect(() => {
    if (!userData) {
      dispatch(getCurrentUser());
    }
  }, [userData]);

  React.useEffect(() => {
    if (!promoMovie) {
      dispatch(getPromo());
    }
  }, [promoMovie]);


  React.useEffect(() => {
    if (!isDataLoaded) {
      dispatch(fetchMovies());
    }
  }, [isDataLoaded]);

  if (!isDataLoaded || !promoMovie) {
    return (
      <Preloader />
    );
  }

  return (
    <>
      <div className="visually-hidden">
        <img src='src/images/controllersImage.svg' />
      </div>

      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={`` || (promoMovie && promoMovie.bgImage)} alt={`` || (promoMovie && promoMovie.name)} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header theme="movie" />

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <Link to={`/films/${promoMovie.id}`}>
                <img src={`` || (promoMovie && promoMovie.posterImage)} alt={`` || (promoMovie && promoMovie.name)} width="218" height="327" />
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

                <MyListButton movie={promoMovie} />
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
    posterImage: PropTypes.string,
    previewImage: PropTypes.string,
    bgImage: PropTypes.string,
    bgColor: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number,
    scoresCount: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.array,
    runTime: PropTypes.number,
    genre: PropTypes.string,
    released: PropTypes.number,
    id: PropTypes.number,
    isFavorite: PropTypes.bool,
    videoLink: PropTypes.string,
    previewVideoLink: PropTypes.string,
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
});

export default connect(mapStateToProps)(Main);


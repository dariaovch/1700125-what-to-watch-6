/* eslint-disable camelcase */
import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect, useSelector, useDispatch} from 'react-redux';
import {fetchMovies, getCurrentUser, getPromo} from 'src/store/actions/apiActions';
import Header from 'src/components/Layout/Header/Header';
import Footer from 'src/components/Layout/Footer/Footer';
import MoviesList from 'src/components/Movies/MoviesList/MoviesList';
import MoviesGenres from 'src/components/Movies/MoviesGenres/MoviesGenres';
import Preloader from 'src/components/Pages/Preloader/Preloader';
import MyListButton from 'src/components/Pages/MyList/MyListButton/MyListButton';
import {filterListByGenre} from 'src/store/actions/listActions';
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

  if (!isDataLoaded && !promoMovie) {
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
});

export default connect(mapStateToProps)(Main);


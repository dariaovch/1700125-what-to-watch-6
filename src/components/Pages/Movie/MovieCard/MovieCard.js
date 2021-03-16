import React from 'react';
import {useHistory, Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from 'src/components/Layout/Header/Header.js';
import Tabs from 'src/components/Pages/Movie/Tabs/Tabs';
import Overview from 'src/components/Pages/Movie/Overview/Overview';
import Details from 'src/components/Pages//Movie/Details/Details';
import MovieReviews from 'src/components/Pages/Movie/MovieReviews/MovieReviews';

function MovieCard({movie}) {
  const history = useHistory();

  const handlePlayClick = () => {
    history.push(`/player/${movie.id}`);
  };

  const handleMyListClick = () => {
    history.push(`/mylist`);
  };

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={movie.bgImage} alt={movie.alt} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header theme="movie" hasAvatar={true} />

        <div className="movie-card__wrap">
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{movie.title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{movie.genre}</span>
              <span className="movie-card__year">{movie.year}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button" onClick={handlePlayClick}>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button" onClick={handleMyListClick}>
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
              <Link to={`/films/${movie.id}/review`} className="btn movie-card__button">Add review</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={movie.poster} alt={movie.alt} width="218" height="327" />
          </div>

          <Tabs>
            <div tabLabel="Overview">
              <Overview movie={movie} />
            </div>

            <div tabLabel="Details" className="movie-card__text movie-card__row">
              <Details movie={movie} />
            </div>

            <div tabLabel="Reviews" className="movie-card__reviews movie-card__row">
              <MovieReviews />
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
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
  }),
};

export default MovieCard;

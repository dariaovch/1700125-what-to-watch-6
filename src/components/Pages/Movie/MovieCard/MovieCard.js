/* eslint-disable camelcase */
import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import Header from 'src/components/Layout/Header/Header.js';
import Tabs from 'src/components/Pages/Movie/Tabs/Tabs';
import Overview from 'src/components/Pages/Movie/Overview/Overview';
import Details from 'src/components/Pages//Movie/Details/Details';
import MovieReviews from 'src/components/Pages/Movie/MovieReviews/MovieReviews';
import {AuthStatus} from 'src/store/auth';
import MyListButton from 'src/components/Pages/MyList/MyListButton/MyListButton';
import {changeFavoriteStatus, getMoviesToWatch} from '../../../../store/actions/apiActions';

function MovieCard({movie, onPlayClick}) {
  const {authStatus} = useSelector((state) => state.USER);

  const id = movie.id;

  const statusCode = !movie.is_favorite ? 1 : 0;

  const dispatch = useDispatch();
  const handleMyListButtonClick = () => {
    dispatch(changeFavoriteStatus(id, statusCode));
    dispatch(getMoviesToWatch());
  };

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={movie.background_image} alt={movie.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header theme="movie" />

        <div className="movie-card__wrap">
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{movie.name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{movie.genre}</span>
              <span className="movie-card__year">{movie.released}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" data-testid="play" type="button" onClick={onPlayClick}>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <MyListButton movie={movie} onMyListClick={handleMyListButtonClick} />
              {authStatus === AuthStatus.AUTH && <Link to={`/films/${id}/review`} className="btn movie-card__button">Add review</Link>}
            </div>
          </div>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={movie.poster_image} alt={movie.name} width="218" height="327" />
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
  }),
  authStatus: PropTypes.string,
  onPlayClick: PropTypes.func,
};

export default MovieCard;

import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';
import cn from 'classnames';
import controllersImage from 'src/images/controllersImage.svg';
import Header from 'src/components/Header/Header.js';
import Card from 'src/components/Card/Card.js';
import Footer from 'src/components/Footer/Footer.js';

function Main({genres, movies}) {
  const history = useHistory();

  function handlePosterClick() {
    history.push(`/films/:id`);
  }

  return (
    <>
      <div className="visually-hidden">
        {/* <!-- inject:svg --> */}
        <img src={controllersImage} />
        {/* <!-- endinject --> */}
      </div>

      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={movies[0].image} alt={movies[0].alt} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header theme="movie" hasAvatar={true} />

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={movies[0].poster} alt={movies[0].alt} width="218" height="327" onClick={handlePosterClick} />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{movies[0].title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{movies[0].genre}</span>
                <span className="movie-card__year">{movies[0].year}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use href="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use href="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            {genres.map((item, i) =>
              (<li key={i} className={cn(`catalog__genres-item`, {'catalog__genres-item--active': i === 0})} >
                <a href="#" className="catalog__genres-link">{item}</a>
              </li>)
            )}
          </ul>

          <div className="catalog__movies-list">
            {movies.map((item) => <Card item={item} key={item.id} />)}
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

Main.propTypes = {
  genres: PropTypes.array.isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string,
    ratingScore: PropTypes.string,
    ratingLevel: PropTypes.string,
    ratingCount: PropTypes.string,
    director: PropTypes.string,
    starring: PropTypes.string,
    descriptionShort: PropTypes.string,
    descriptionFull: PropTypes.string,
  })),
};

export default Main;

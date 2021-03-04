import React from 'react';
import PropTypes from 'prop-types';
import Controllers from 'src/images/controllers.svg';
import Header from 'src/components/Header/Header.js';
import Card from 'src/components/Card/Card.js';
import Footer from 'src/components/Footer/Footer.js';

function Film({movies}) {
  return (
    <>
      <div className="visually-hidden">
        {/* <!-- inject:svg --> */}
        <img src={Controllers} />
        {/* <!-- endinject --> */}
      </div>

      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={movies[0].image} alt={movies[0].alt} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header theme="movie" hasAvatar={true} />

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{movies[0].title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{movies[0].genre}</span>
                <span className="movie-card__year">{movies[0].year}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={movies[0].poster} alt={movies[0].alt} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  <li className="movie-nav__item movie-nav__item--active">
                    <a href="#" className="movie-nav__link">Overview</a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Details</a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="movie-rating">
                <div className="movie-rating__score">{movies[0].ratingScore}</div>
                <p className="movie-rating__meta">
                  <span className="movie-rating__level">{movies[0].ratingLevel}</span>
                  <span className="movie-rating__count">{movies[0].ratingCount}</span>
                </p>
              </div>

              <div className="movie-card__text">
                <p>{movies[0].descriptionShort}</p>

                <p>{movies[0].descriptionFull}</p>

                <p className="movie-card__director"><strong>Director: {movies[0].director}</strong></p>

                <p className="movie-card__starring"><strong>Starring: {movies[0].starring}</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__movies-list">
            {movies.slice(1, 5).map((item) => <Card item={item} key={item.id} />)}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

Film.propTypes = {
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
  }))
};

export default Film;

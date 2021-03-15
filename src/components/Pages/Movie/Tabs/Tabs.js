import React from 'react';
import PropTypes from 'prop-types';
import Overview from 'src/components/Pages/Movie/Overview/Overview';
import Details from 'src/components/Pages/Movie/Details/Details';
import MovieReviews from 'src/components/Pages/Movie/MovieReviews/MovieReviews';

function Tabs({movie}) {

  return (
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

      <Overview movie={movie} />
      <Details movie={movie} />
      <MovieReviews />

    </div>
  );
}

Tabs.propTypes = {
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
    starring: PropTypes.string,
    descriptionShort: PropTypes.string,
    descriptionFull: PropTypes.string,
  }),
};

export default Tabs;

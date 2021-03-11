import React from 'react';
import {useLocation} from 'react-router-dom';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Logo from 'src/components/Logo/Logo.js';
import Breadcrumbs from 'src/components/Breadcrumbs/Breadcrumbs.js';

function Header({theme, hasAvatar, hasBreadcrumbs, movie}) {

  const location = useLocation();

  return (
    <header className={cn(`page-header`, {'movie-card__head': theme === `movie`}, {'user-page__head': theme === `user`})}>
      <Logo />

      {hasBreadcrumbs && <Breadcrumbs movie={movie} />}

      {location.pathname === `/login` && <h1 className="page-title user-page__title">Sign in</h1>}
      {location.pathname === `/mylist` && <h1 className="page-title user-page__title">My list</h1>}

      {hasAvatar &&
      <div className="user-block">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </div>}
    </header>
  );
}

Header.propTypes = {
  theme: PropTypes.string,
  hasAvatar: PropTypes.bool.isRequired,
  hasBreadcrumbs: PropTypes.bool,
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
    videoLink: PropTypes.string,
  }),
};

export default Header;

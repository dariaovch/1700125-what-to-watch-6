import React from 'react';
import {useLocation, Link} from 'react-router-dom';
import cn from 'classnames';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import Logo from 'src/components/Layout/Logo/Logo';
import Breadcrumbs from 'src/components/Layout/Breadcrumbs/Breadcrumbs';
import {AuthStatus} from 'src/store/auth';

function Header(props) {
  const {authStatus} = useSelector((state) => state.USER);

  const {theme, hasBreadcrumbs, movie, email} = props;

  const location = useLocation();

  return (
    <header className={cn(`page-header`, {'movie-card__head': theme === `movie`}, {'user-page__head': theme === `user`})}>
      <Logo />

      {hasBreadcrumbs && <Breadcrumbs movie={movie} />}

      {location.pathname === `/login` && <h1 className="page-title user-page__title">Sign in</h1>}
      {location.pathname === `/mylist` && <h1 className="page-title user-page__title">My list</h1>}

      {authStatus === AuthStatus.AUTH &&
        <div className="user-block">
          <p className="user-block__email">{email}</p>
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </div>}
      {authStatus === AuthStatus.NO_AUTH &&
      <div className="user-block">
        <Link to="/login" className="user-block__link">Sign in</Link>
      </div>}
    </header>
  );
}

Header.propTypes = {
  theme: PropTypes.string,
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
  authStatus: PropTypes.string,
  email: PropTypes.string,
};

export default Header;

import React from 'react';
import {useLocation, useHistory, Link} from 'react-router-dom';
import cn from 'classnames';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from 'src/store/actions/api-actions';
import Logo from 'src/components/page-layout/wtw-logo/wtw-logo';
import Breadcrumbs from 'src/components/page-layout/breadcrumbs/breadcrumbs';
import {AuthStatus} from 'src/store/auth';

function Header(props) {
  const {authStatus, userData} = useSelector((state) => state.USER);

  const {theme, hasBreadcrumbs, movie} = props;

  const location = useLocation();

  const dispatch = useDispatch();

  const history = useHistory();

  return (
    <header className={cn(`page-header`, {'movie-card__head': theme === `movie`}, {'user-page__head': theme === `user`})}>
      <Logo />

      {hasBreadcrumbs && <Breadcrumbs movie={movie} />}

      {location.pathname === `/login` && <h1 className="page-title user-page__title">Sign in</h1>}
      {location.pathname === `/mylist` && <h1 className="page-title user-page__title">My list</h1>}

      {(authStatus === AuthStatus.AUTH && userData) &&
        <div className="user-block">
          <p className="user-block__email">{userData.email}</p>
          <p className="user-block__email" onClick={() => dispatch(logout())}>Logout</p>
          <div className="user-block__avatar" onClick={() => history.push(`/mylist`)}>
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
  }),
};

export default Header;

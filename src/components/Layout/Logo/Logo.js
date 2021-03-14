import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import cn from 'classnames';

function Logo({theme}) {

  return (
    <div className="logo">
      <Link to="/" className={cn(`logo__link`, {'logo__link--light': theme === `light`})}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

Logo.propTypes = {
  theme: PropTypes.string,
};

export default Logo;

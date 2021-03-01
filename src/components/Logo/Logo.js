import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

function Logo({theme}) {

  const logoClassName = cn(`logo__link`, {'logo__link--light': theme === `light`});

  return (
    <div className="logo">
      <a className={logoClassName}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>
  );
}

Logo.propTypes = {
  theme: PropTypes.string,
};

export default Logo;

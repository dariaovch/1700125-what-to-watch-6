import React from 'react';
import {Link} from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found" style={{
      height: `100vh`,
      color: `#DFCF77`,
      backgroundImage: `linear-gradient(-180deg, #180202 0, #000 100%)`,
      display: `flex`,
      flexDirection: `column`,
      justifyContent: `center`,
      alignItems: `center`,
    }}>
      <h1 className="not-found__title">404 Page Not Found</h1>
      <Link to="/" style={{
        color: `#DFCF77`,
        fontSize: `24px`,
        fontWeight: `700`,
      }}>Return to Main Page</Link>
    </div>
  );
}

export default NotFound;

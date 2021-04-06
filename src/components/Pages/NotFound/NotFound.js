import React from 'react';
import {Link} from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found">
      <h1 className="not-found__title">404 Page Not Found</h1>
      <Link to="/" className="not-found__link">Return to Main Page</Link>
    </div>
  );
}

export default NotFound;

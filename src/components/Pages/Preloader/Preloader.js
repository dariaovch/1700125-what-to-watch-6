import React from 'react';

function Preloader() {
  return (
    <div className="preloader">
      <img src="img/Preloader.png" alt="Спиннер поиска" className="preloader__spinner rotation" />
      <p className="preloader__text">Loading...</p>
    </div>
  );
}

export default Preloader;

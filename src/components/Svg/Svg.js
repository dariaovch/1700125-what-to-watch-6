import React from 'react';
import Controllers from 'src/images/controllers.svg';

function Svg() {
  return (
    <div className="visually-hidden">
      {/* <!-- inject:svg --> */}
      <img src={Controllers} />
      {/* <!-- endinject --> */}
    </div>
  );
}

export default Svg;

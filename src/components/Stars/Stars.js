import React from 'react';
import PropTypes from 'prop-types';


function Stars({stars, onChange}) {
  return (
    <div className="rating__stars">
      {stars.map((item) =>
        (
          <>
            <input className="rating__input" id={`star-${item.id}`} type="radio" name="rating" value={item.id} onChange={onChange} />
            <label className="rating__label" htmlFor={`star-${item.id}`}>{item.label}</label>
          </>
        )
      )}
    </div>
  );
}

Stars.propTypes = {
  stars: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
  })),
  onChange: PropTypes.func.isRequired,
};


export default Stars;

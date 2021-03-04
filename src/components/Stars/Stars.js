import React from 'react';
import PropTypes from 'prop-types';


function Stars({stars}) {
  return (
    <div className="rating__stars">
      {stars.map((item) =>
        (
          <>
            <input key={item.id} className="rating__input" id={`star-${item.id}`} type="radio" name="rating" value={item.id}/>
            <label key={item.id} className="rating__label" htmlFor={`star-${item.id}`}>{item.label}</label>
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
};


export default Stars;

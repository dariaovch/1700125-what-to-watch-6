import React from 'react';
import PropTypes from 'prop-types';

function ShowMoreButton({onButtonClick}) {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={onButtonClick}>Show more</button>
    </div>
  );
}

ShowMoreButton.propTypes = {
  onButtonClick: PropTypes.func,
};

export default React.memo(ShowMoreButton);

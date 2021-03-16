import React from 'react';
import PropTypes from 'prop-types';

function ReviewItem({item}) {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{item.reviewText}</p>

        <footer className="review__details">
          <cite className="review__author">{item.author}</cite>
          <time className="review__date" dateTime={item.dateTime}>{item.dateStr}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{item.reviewRating}</div>
    </div>
  );
}

ReviewItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    reviewText: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    dateTime: PropTypes.string.isRequired,
    dateStr: PropTypes.string.isRequired,
    reviewRating: PropTypes.string,
  }),
};

export default ReviewItem;

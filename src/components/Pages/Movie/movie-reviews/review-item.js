import React from 'react';
import PropTypes from 'prop-types';
import formatDate from 'src/utils/format-date';

function ReviewItem({item}) {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{item.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{item.user.name}</cite>
          <time className="review__date" dateTime={item.date}>{formatDate(item.date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{item.rating}</div>
    </div>
  );
}

ReviewItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    user: PropTypes.object,
    rating: PropTypes.number,
    comment: PropTypes.string,
    date: PropTypes.string
  }),
};

export default ReviewItem;

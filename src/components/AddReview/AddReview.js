import React from 'react';
import PropTypes from 'prop-types';
import controllersImage from 'src/images/controllersImage.svg';
import Header from 'src/components/Header/Header.js';
import Stars from 'src/components/Stars/Stars.js';

function AddReview({stars}) {
  return (
    <>
      <div className="visually-hidden">
        {/* <!-- inject:svg --> */}
        <img src={controllersImage} />
        {/* <!-- endinject --> */}
      </div>

      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header hasAvatar={true} hasBreadcrumbs={true} />

          <div className="movie-card__poster movie-card__poster--small">
            <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <form action="#" className="add-review__form">
            <div className="rating">
              <Stars stars={stars} />
            </div>

            <div className="add-review__text">
              <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
              <div className="add-review__submit">
                <button className="add-review__btn" type="submit">Post</button>
              </div>

            </div>
          </form>
        </div>

      </section>

    </>
  );
}

AddReview.propTypes = {
  stars: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
  })),
};

export default AddReview;

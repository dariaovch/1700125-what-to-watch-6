import React from 'react';
import PropTypes from 'prop-types';
import controllersImage from 'src/images/controllersImage.svg';
import Header from 'src/components/Header/Header.js';
import AddReviewForm from 'src/components/AddReviewForm/AddReviewForm.js';

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
          <AddReviewForm stars={stars} />
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

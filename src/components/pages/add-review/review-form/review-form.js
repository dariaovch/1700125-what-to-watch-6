import React from 'react';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import {postComment} from 'src/store/actions/api-actions';
import useFormWithValidation from 'src/hooks/use-form-with-validation';
import Stars from 'src/components/pages/add-review/review-form/rating-stars/rating-stars';


function ReviewForm({stars, onReviewFormSubmit}) {
  const {values, handleChange, errors, isFormValid, resetForm} = useFormWithValidation();
  const {id} = useParams();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onReviewFormSubmit(id, {
      rating: values.rating,
      comment: values.comment,
    });

    resetForm();
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit} noValidate>
      <div className="rating">
        <Stars stars={stars} onChange={handleChange} />
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="comment"
          id="comment"
          data-testid="comment"
          placeholder="Review text"
          minLength="50"
          maxLength="400"
          onChange={handleChange}
        ></textarea>
        {errors.comment && <span className="sign-in__error-message">{errors.comment}</span>}
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={!isFormValid}>Post</button>
        </div>

      </div>
    </form>
  );
}

ReviewForm.propTypes = {
  stars: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
  })),
  onReviewFormSubmit: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  onReviewFormSubmit(id, data) {
    dispatch(postComment(id, data));
  },
});

export {ReviewForm};
export default connect(null, mapDispatchToProps)(ReviewForm);
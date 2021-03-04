import React from 'react';
import PropTypes from 'prop-types';
import Stars from 'src/components/Stars/Stars.js';

function AddReviewForm({stars}) {
  const [values, setValues] = React.useState({
    rating: ``,
    reviewText: ``,
  });

  function handleChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;

    setValues({
      ...values,
      [name]: value,
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    console.log(values);
  }

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
      <div className="rating">
        <Stars stars={stars} onChange={handleChange} />
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="reviewText"
          id="reviewText"
          placeholder="Review text"
          onChange={handleChange}
        ></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
}

AddReviewForm.propTypes = {
  stars: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
  })),
};

export default AddReviewForm;

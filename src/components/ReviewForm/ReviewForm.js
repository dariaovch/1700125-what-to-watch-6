import React from 'react';
import PropTypes from 'prop-types';
import Stars from './Stars/Stars';

function ReviewForm({stars, onSubmit}) {
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
    onSubmit(evt);

    // eslint-disable-next-line no-console
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

ReviewForm.propTypes = {
  stars: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
  })),
  onSubmit: PropTypes.func,
};

export default ReviewForm;

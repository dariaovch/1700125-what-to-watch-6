import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import useFormWithValidation from 'src/hooks/useFormWithValidation';
import {login} from 'src/store/apiActions';


function SignInForm(props) {
  const {onFormSubmit} = props;

  const {values, handleChange, errors, isFormValid, resetForm} = useFormWithValidation();

  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onFormSubmit({
      email: values.email,
      password: values.password
    });
    resetForm();
    history.push(`/`);
  };


  return (
    <form action="" className="sign-in__form" onSubmit={(evt) => handleSubmit(evt)} method="POST" noValidate>
      <div className="sign-in__fields">
        <div className="sign-in__field">
          <input
            className="sign-in__input"
            type="email"
            placeholder="Email address"
            name="email"
            id="email"
            value={values.email || ``}
            onChange={handleChange}
          />
          <label className="sign-in__label visually-hidden" htmlFor="email">Email address</label>
          {errors.email && <span className="sign-in__error-message">{errors.email}</span>}
        </div>
        <div className="sign-in__field">
          <input
            className="sign-in__input"
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            minLength="6"
            value={values.password || ``}
            onChange={handleChange}
          />
          <label className="sign-in__label visually-hidden" htmlFor="password">Password</label>
          {errors.password && <span className="sign-in__error-message">{errors.password}</span>}
        </div>
      </div>
      <div className="sign-in__submit">
        <button className="sign-in__btn" type="submit" disabled={!isFormValid}>Sign in</button>
      </div>
    </form>
  );
}

SignInForm.propTypes = {
  onFormSubmit: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  onFormSubmit(data) {
    dispatch(login(data));
  },
});

export {SignInForm};
export default connect(null, mapDispatchToProps)(SignInForm);

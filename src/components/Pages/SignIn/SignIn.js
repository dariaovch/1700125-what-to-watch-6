import React from 'react';
import controllersImage from 'src/images/controllersImage.svg';
import Header from 'src/components/Layout/Header/Header';
import Footer from 'src/components/Layout/Footer/Footer';

function SignIn() {
  return (
    <>
      <div className="visually-hidden">
        <img src={controllersImage} />
      </div>

      <div className="user-page">
        <Header theme="user" hasAvatar={false} />

        <div className="sign-in user-page__content">
          <form action="#" className="sign-in__form">
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" />
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default SignIn;

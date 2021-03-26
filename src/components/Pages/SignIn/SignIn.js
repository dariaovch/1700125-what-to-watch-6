import React from 'react';
import controllersImage from 'src/images/controllersImage.svg';
import Header from 'src/components/Layout/Header/Header';
import Footer from 'src/components/Layout/Footer/Footer';
import SignInForm from 'src/components/Pages/SignIn/SignInForm/SignInForm';


function SignIn() {

  return (
    <>
      <div className="visually-hidden">
        <img src={controllersImage} />
      </div>

      <div className="user-page">
        <Header theme="user" />

        <div className="sign-in user-page__content">
          <SignInForm />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default SignIn;

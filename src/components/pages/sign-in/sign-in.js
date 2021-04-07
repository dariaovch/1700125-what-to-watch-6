import React from 'react';
import Header from 'src/components/page-layout/page-header/page-header';
import Footer from 'src/components/page-layout/page-footer/page-footer';
import SignInForm from 'src/components/pages/sign-in/sign-in-form/sign-in-form';


function SignIn() {

  return (
    <>
      <div className="visually-hidden">
        <img src='src/images/controllersImage.svg' />
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

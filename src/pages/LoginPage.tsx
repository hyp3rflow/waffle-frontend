import Footer from 'components/base/Footer';
import Header from 'components/base/Header';
import LoginComponent from 'components/login/LoginComponent';
import React from 'react';

const LoginPage: React.FC = () => {
  return (
    <>
      <Header />
      <LoginComponent />
      <Footer />
    </>
  );
};

export default LoginPage;

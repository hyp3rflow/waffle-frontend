import React from 'react';

import Footer from 'components/base/Footer';
import Header from 'components/base/Header';
import LoginComponent from 'components/login/LoginComponent';

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

import React from 'react';

import Footer from 'components/base/Footer';
import Header from 'components/base/Header';
import RegisterComponent from 'components/register/RegisterComponent';

const RegisterPage: React.FC = () => {
  return (
    <>
      <Header />
      <RegisterComponent />
      <Footer />
    </>
  );
};

export default RegisterPage;

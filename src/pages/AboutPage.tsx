import AboutInquiry from 'components/about/AboutInquiry';
import AboutTop from 'components/about/AboutTop';
import Footer from 'components/base/Footer';
import Header from 'components/base/Header';
import Introduction from 'components/main/Introduction';
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <>
      <Header />
      <Introduction />
      <AboutTop />
      <AboutInquiry />
      <Footer />
    </>
  );
};

export default AboutPage;

import React from 'react';

import Footer from 'components/base/Footer';
import Header from 'components/base/Header';
import Introduction from 'components/main/Introduction';
import WebtoonCurations from 'components/main/WebtoonCurations';

const MainPage: React.FC = () => {
  return (
    <>
      <Header />
      <Introduction />
      <WebtoonCurations />
      <Footer />
    </>
  );
};

export default MainPage;

import Footer from 'components/base/Footer';
import Header from 'components/base/Header';
import WebtoonMain from 'components/main/webtoon/WebtoonMain';
import WebtoonWeekTable from 'components/main/webtoon/WebtoonWeekTable';
import React from 'react';

const WebtoonMainPage: React.FC = () => {
  return (
    <>
      <Header />
      <WebtoonMain />
      <WebtoonWeekTable />
      <Footer />
    </>
  );
};

export default WebtoonMainPage;

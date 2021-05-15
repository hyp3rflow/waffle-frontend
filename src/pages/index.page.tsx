import React from 'react';

import Header from 'components/base/Header';
import Introduction from 'components/main/Introduction';
import WebtoonCurations from 'components/webtoon/main/WebtoonCurations';
import PageLayout from 'components/base/PageLayout';

const MainPage: React.FC = () => {
  return (
    <PageLayout>
      <Header />
      <Introduction />
      <WebtoonCurations />
    </PageLayout>
  );
};

export default MainPage;

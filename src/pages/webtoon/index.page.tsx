import React from 'react';

import WebtoonMain from 'components/webtoon/main/WebtoonMain';
import WebtoonWeekTable from 'components/webtoon/WebtoonWeekTable';
import Header from 'components/base/Header';
import PageLayout from 'components/base/PageLayout';

const WebtoonMainPage: React.FC = () => {
  return (
    <PageLayout>
      <Header />
      <WebtoonMain />
      <WebtoonWeekTable />
    </PageLayout>
  );
};

export default WebtoonMainPage;

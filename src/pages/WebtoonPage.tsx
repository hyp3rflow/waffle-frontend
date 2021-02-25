import React from 'react';
import Header from 'components/base/Header';
import Footer from 'components/base/Footer';
import WebtoonHeader from 'components/webtoon/WebtoonHeader';
import WebtoonReviewList from 'components/webtoon/WebtoonReviewList';
import PageTemplate from 'components/base/PageTemplate';
import WebtoonTotalEvaluations from 'components/webtoon/WebtoonTotalEvaluations';
import styled from 'styled-components';

const ReviewEvaluationsWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const WebtoonPage: React.FC = () => {
  return (
    <>
      <Header />
      <WebtoonHeader />
      <PageTemplate>
        <ReviewEvaluationsWrapper>
          <WebtoonReviewList
            reviews={[{ id: 123, content: '안녕', recommendRate: 3 }]}
          />
          <WebtoonTotalEvaluations
            recommendRate={80}
            drawingStyleRate={3}
            enjoyRate={3}
          />
        </ReviewEvaluationsWrapper>
      </PageTemplate>
      <Footer />
    </>
  );
};

export default WebtoonPage;

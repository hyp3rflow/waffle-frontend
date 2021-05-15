import React from 'react';
import styled, { css } from 'styled-components';

import Header from 'components/base/Header';
import Footer from 'components/base/Footer';
import WebtoonHeader from 'components/webtoon/WebtoonHeader';
import WebtoonReviewList from 'components/webtoon/WebtoonReviewList';
import PageTemplate from 'components/base/BlockLayout';
import WebtoonTotalEvaluations from 'components/webtoon/WebtoonTotalEvaluations';
import { BREAKPOINT_MEDIUM } from 'constants/breakpoints';
import PageLayout from 'components/base/PageLayout';

const ReviewEvaluationsWrapper = styled.div`
  display: flex;
  flex: 1;

  @media screen and (max-width: ${BREAKPOINT_MEDIUM}) {
    flex-direction: column-reverse;
  }
`;

const WebtoonPage: React.FC = () => {
  const date = new Date();

  return (
    <PageLayout>
      <Header />
      <WebtoonHeader />
      <PageTemplate>
        <ReviewEvaluationsWrapper>
          <WebtoonReviewList
            reviews={[
              {
                id: 123,
                content: '안녕',
                recommendRate: 3,
                drawingStyleRate: 3,
                enjoyRate: 3,
                authorId: 3,
                authorNickname: 'hyperflow',
                timestamp: date,
              },
              {
                id: 1234,
                content: '안녕',
                recommendRate: 3,
                drawingStyleRate: 3,
                enjoyRate: 3,
                authorId: 3,
                authorNickname: 'hyperflow',
                timestamp: date,
              },
              {
                id: 1235,
                content: '안녕',
                recommendRate: 3,
                drawingStyleRate: 3,
                enjoyRate: 3,
                authorId: 3,
                authorNickname: 'hyperflow',
                timestamp: date,
              },
              {
                id: 1263,
                content: '안녕',
                recommendRate: 3,
                drawingStyleRate: 3,
                enjoyRate: 3,
                authorId: 3,
                authorNickname: 'hyperflow',
                timestamp: date,
              },
            ]}
          />
          <WebtoonTotalEvaluations
            css={css`
              @media screen and (max-width: ${BREAKPOINT_MEDIUM}) {
                margin: 0;
                margin-bottom: 1rem;
              }
            `}
            recommendRate={80}
            drawingStyleRate={3}
            enjoyRate={3}
          />
        </ReviewEvaluationsWrapper>
      </PageTemplate>
    </PageLayout>
  );
};

export default WebtoonPage;

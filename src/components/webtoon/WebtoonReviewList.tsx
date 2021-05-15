import React from 'react';
import styled from 'styled-components';

import { WebtoonReview } from 'models/Review';

import WebtoonReviewItem from './WebtoonReviewItem';

const WebtoonReviewListContainer = styled.div`
  width: 100%;
`;

const WebtoonReviewListTitle = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

const WebtoonReviewListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;
`;

interface WebtoonReviewListProps {
  reviews: WebtoonReview[];
}

const WebtoonReviewList: React.FC<WebtoonReviewListProps> = props => {
  const { reviews } = props;

  return (
    <WebtoonReviewListContainer>
      <WebtoonReviewListWrapper>
        {reviews.map(review => (
          <WebtoonReviewItem key={review.id} review={review} />
        ))}
      </WebtoonReviewListWrapper>
    </WebtoonReviewListContainer>
  );
};

export default WebtoonReviewList;

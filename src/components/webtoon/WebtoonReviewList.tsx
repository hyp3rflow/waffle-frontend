import React from 'react';
import styled from 'styled-components';
import { WebtoonReview } from 'models/Review';
import PageTemplate from 'components/base/PageTemplate';
import { ColorPalette } from 'utils/ColorUtils';

const WebtoonReviewListContainer = styled.div`
  width: 100%;
`;

const ReviewWrapper = styled.div`
  background-color: ${ColorPalette.WHITE};
  padding: 14px;
  box-shadow: 0 8px 12px rgba(20, 20, 20, 0.2);
`;

const WebtoonReviewListTitle = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

const WebtoonReviewListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 14px;
  margin-bottom: 28px;
`;

interface WebtoonReviewListProps {
  reviews: WebtoonReview[];
}

const WebtoonReviewList: React.FC<WebtoonReviewListProps> = (props) => {
  const { reviews } = props;

  return (
    <WebtoonReviewListContainer>
      <WebtoonReviewListTitle>
        {reviews.length}개의 웹툰 리뷰가 있어요!
      </WebtoonReviewListTitle>
      <WebtoonReviewListWrapper>
        {reviews.map((review) => (
          <ReviewWrapper key={review.id}>안녕!</ReviewWrapper>
        ))}
      </WebtoonReviewListWrapper>
    </WebtoonReviewListContainer>
  );
};

export default WebtoonReviewList;

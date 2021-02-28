import React from 'react';
import styled from 'styled-components';
import { ColorPalette } from 'utils/ColorUtils';
import { WebtoonReview } from 'models/Review';

const WebtoonReviewItemWrapper = styled.div`
  background-color: ${ColorPalette.WHITE};
  box-shadow: rgb(0, 0, 0, 4%) 0px 1px 3px 0px,
    rgb(0, 0, 0, 8%) 0px 0px 0px 1px inset;
  padding: 18px;

  & + & {
    margin-top: 18px;
  }
`;

const HorizontalWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const VerticalWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ReviewMetadataWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const ReviewUserWrapper = styled.div`
  display: flex;
`;

const ReviewUser = styled.div`
  font-weight: bold;
`;

const ReviewUserBadge = styled.span`
  background-color: ${ColorPalette.BRAND_ORANGE};
  color: ${ColorPalette.WHITE};
  font-size: 14px;
  box-shadow: 0 0 0 4px ${ColorPalette.BRAND_ORANGE};
  padding: 0 2px;

  ${ReviewUser} + & {
    margin-left: 10px;
  }
`;

const ReviewTimestamp = styled.div`
  color: ${ColorPalette.GRAY};
  margin-left: auto;
`;

const ReviewRateListWrapper = styled.div`
  display: flex;
  padding: 12px 0;
  margin-bottom: 14px;
  border-bottom: 1px solid ${ColorPalette.LIGHT_GRAY};
`;

const ReviewRateItem = styled.div`
  display: flex;
  align-items: center;
  & + & {
    margin-left: 8px;
  }
`;

const ReviewRateLabel = styled.div``;

const ReviewRate = styled.span`
  margin-left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #9fd84f;
  line-height: 24px;
  vertical-align: center;
  text-align: center;
  color: ${ColorPalette.WHITE};
  font-weight: bold;
`;

interface WebtoonReviewItemProps {
  review: WebtoonReview;
}

const WebtoonReviewItem: React.FC<WebtoonReviewItemProps> = (props) => {
  const { review } = props;
  const {
    id,
    recommendRate,
    drawingStyleRate,
    enjoyRate,
    authorId,
    authorNickname,
    content,
    timestamp,
  } = review;

  return (
    <WebtoonReviewItemWrapper>
      <VerticalWrapper>
        <ReviewMetadataWrapper>
          <HorizontalWrapper>
            <ReviewUserWrapper>
              <ReviewUser>{authorNickname}</ReviewUser>
              <ReviewUserBadge>우수 리뷰어</ReviewUserBadge>
            </ReviewUserWrapper>
            <ReviewTimestamp>{timestamp.toLocaleDateString()}</ReviewTimestamp>
          </HorizontalWrapper>
        </ReviewMetadataWrapper>
        <ReviewRateListWrapper>
          <ReviewRateItem>
            <ReviewRateLabel>추천</ReviewRateLabel>
            <ReviewRate>{recommendRate}</ReviewRate>
          </ReviewRateItem>
          <ReviewRateItem>
            <ReviewRateLabel>재미</ReviewRateLabel>
            <ReviewRate>{drawingStyleRate}</ReviewRate>
          </ReviewRateItem>
          <ReviewRateItem>
            <ReviewRateLabel>그림체</ReviewRateLabel>
            <ReviewRate>{enjoyRate}</ReviewRate>
          </ReviewRateItem>
        </ReviewRateListWrapper>
        {content}
      </VerticalWrapper>
    </WebtoonReviewItemWrapper>
  );
};

export default WebtoonReviewItem;

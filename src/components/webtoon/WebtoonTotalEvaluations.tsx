import React from 'react';
import styled from 'styled-components';
import { ColorPalette } from 'utils/ColorUtils';

const WebtoonTotalEvaluationsWrapper = styled.div`
  width: 480px;
  margin-left: 28px;
  margin-bottom: 28px;
  padding: 14px;
  background-color: ${ColorPalette.WHITE};
  box-shadow: 0 8px 12px rgba(20, 20, 20, 0.2);
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 14px;
`;

const EvaluationListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RecommendBlock = styled.div`
  padding: 8px;
  font-weight: 500;
  margin-bottom: 8px;
`;

const RecommendEmphasis = styled.span`
  display: inline;
  background-color: ${ColorPalette.BRAND_MAIN};
  color: ${ColorPalette.WHITE};
  box-shadow: 0 0 0 5px ${ColorPalette.BRAND_MAIN};
`;

const EvaluationItem = styled.div`
  display: flex;
  align-items: center;

  & + & {
    margin-top: 8px;
  }
`;

const EvaluationItemLabel = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

const EvaluationRate = styled.div`
  margin-left: 8px;
  font-size: 24px;
  font-weight: 700;
  padding: 8px 14px;
  background-color: ${ColorPalette.BRAND_BASE};
  color: ${ColorPalette.WHITE};
  border-radius: 50px;
`;

interface WebtoonTotalEvaluationsProps {
  recommendRate: number;
  drawingStyleRate: number;
  enjoyRate: number;
}

const WebtoonTotalEvaluations: React.FC<WebtoonTotalEvaluationsProps> = (
  props
) => {
  const { recommendRate, drawingStyleRate, enjoyRate } = props;

  return (
    <WebtoonTotalEvaluationsWrapper>
      <Title>리뷰 통계</Title>
      <EvaluationListWrapper>
        <RecommendBlock>
          <RecommendEmphasis>{recommendRate}%</RecommendEmphasis> 의
          리뷰어분들이 이 작품을 추천했어요.
        </RecommendBlock>
        <EvaluationItem>
          <EvaluationItemLabel>재미</EvaluationItemLabel>
          <EvaluationRate>3.0/5</EvaluationRate>
        </EvaluationItem>
        <EvaluationItem>
          <EvaluationItemLabel>그림체</EvaluationItemLabel>
          <EvaluationRate>3.0/5</EvaluationRate>
        </EvaluationItem>
      </EvaluationListWrapper>
    </WebtoonTotalEvaluationsWrapper>
  );
};

export default WebtoonTotalEvaluations;

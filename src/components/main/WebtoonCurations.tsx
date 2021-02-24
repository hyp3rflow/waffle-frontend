import PageTemplate from 'components/base/PageTemplate';
import React from 'react';
import styled from 'styled-components';
import { ColorPalette } from 'utils/ColorUtils';
import WebtoonCurationItem from './WebtoonCurationItem';

const WebtoonCurationsWrapper = styled.div`
  padding: 28px 0;
`;

const Title = styled.div`
  text-align: center;
  padding: 14px 0;

  font-weight: 700;
  font-size: 24px;
`;

const TitleEmphasis = styled.span`
  color: ${ColorPalette.BRAND_MAIN};
`;

const WebtoonCurationsList = styled.div`
  display: flex;
  flex-direction: row;
  padding: 14px;
  padding-bottom: 18px;

  overflow-x: hidden;
`;

const WebtoonCurations: React.FC = () => {
  return (
    <PageTemplate>
      <WebtoonCurationsWrapper>
        <Title>
          <span>마음에 드는&nbsp;</span>
          <TitleEmphasis>웹툰</TitleEmphasis>
          <span>을 찾아보세요.</span>
        </Title>
        <WebtoonCurationsList>
          <WebtoonCurationItem />
          <WebtoonCurationItem />
          <WebtoonCurationItem />
          <WebtoonCurationItem />
          <WebtoonCurationItem />
          <WebtoonCurationItem />
          <WebtoonCurationItem />
        </WebtoonCurationsList>
      </WebtoonCurationsWrapper>
    </PageTemplate>
  );
};

export default WebtoonCurations;

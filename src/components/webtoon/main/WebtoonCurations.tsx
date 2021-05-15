import React from 'react';
import styled from 'styled-components';

import PageTemplate from 'components/base/BlockLayout';
import { ColorPalette } from 'utils/ColorUtils';

import WebtoonCurationItem from './WebtoonCurationItem';

const WebtoonCurationsWrapper = styled.div`
  padding: 32px 0;
`;

const Title = styled.div`
  text-align: center;
  padding: 28px 0;

  font-weight: 800;
  font-size: 1.5rem;
`;

const TitleEmphasis = styled.span`
  color: ${ColorPalette.BRAND_MAIN};
`;

const WebtoonCurationsList = styled.div`
  display: flex;
  flex-direction: row;
  padding: 14px;
  padding-bottom: 18px;

  gap: 1rem;

  overflow-x: scroll;
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

import React from 'react';
import styled from 'styled-components';

import PageTemplate from 'components/base/PageTemplate';
import { ColorPalette } from 'utils/ColorUtils';

const WebtoonMainWrapper = styled.div`
  padding: 48px 0;
  height: 400px;
  display: flex;
`;

const WebtoonMainTitle = styled.div`
  min-width: 450px;
  margin-top: auto;
`;

const WebtoonHeading = styled.h1`
  font-size: 48px;
  font-weight: 800;
`;

const WebtoonCuration = styled.div`
  padding: 48px;
  background-color: ${ColorPalette.WHITE};
  width: 100%;
  box-shadow: rgb(0, 0, 0, 4%) 0px 1px 3px 0px,
    rgb(0, 0, 0, 8%) 0px 0px 0px 1px inset;
`;

const WebtoonMain: React.FC = () => {
  return (
    <PageTemplate>
      <WebtoonMainWrapper>
        <WebtoonMainTitle>
          <WebtoonHeading>웹툰</WebtoonHeading>
          <h2>다양한 플랫폼의 웹툰들을 확인해보세요.</h2>
          <h1>화요일의 인기있는 웹툰이에요.</h1>
        </WebtoonMainTitle>
        <WebtoonCuration>
          <div>모죠의 일지</div>
          <div>에피소드, 개그</div>
        </WebtoonCuration>
      </WebtoonMainWrapper>
    </PageTemplate>
  );
};

export default WebtoonMain;

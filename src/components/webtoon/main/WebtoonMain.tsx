import React from 'react';
import styled, { css } from 'styled-components';

import PageTemplate from 'components/base/BlockLayout';
import { ColorPalette } from 'utils/ColorUtils';

const WebtoonMainWrapper = styled.div`
  padding: 2rem 0;
  height: 300px;
  display: flex;
`;

const WebtoonMainTitle = styled.div`
  margin-top: auto;
`;

const WebtoonHeading = styled.h1`
  font-size: 2.5rem;
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
          <div
            css={css`
              display: flex;
              align-items: flex-end;
            `}
          >
            <WebtoonHeading>웹툰</WebtoonHeading>
            <p
              css={css`
                margin-left: 0.25rem;
                font-size: 1.125rem;
                line-height: 1.8;
                font-weight: bold;
                color: ${ColorPalette.GRAY};
              `}
            >
              Webtoon
            </p>
          </div>
          <p
            css={css`
              font-size: 1.25rem;
              color: ${ColorPalette.GRAY};
              margin-bottom: 1rem;
            `}
          >
            다양한 플랫폼의 웹툰들이 모두 한 곳에.
          </p>
        </WebtoonMainTitle>
      </WebtoonMainWrapper>
    </PageTemplate>
  );
};

export default WebtoonMain;

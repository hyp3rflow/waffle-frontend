import React from 'react';
import styled, { css } from 'styled-components';

import PageTemplate from 'components/base/BlockLayout';
import { ColorPalette } from 'utils/ColorUtils';
import { BREAKPOINT_MEDIUM } from 'constants/breakpoints';

import WebtoonGenreList from './WebtoonGenreList';
import NaverWebtoonIcon from './main/NaverWebtoonIcon';

const WebtoonThumbnail = styled.img`
  object-fit: cover;
  background: ${ColorPalette.WHITE};
  width: 100px;
  height: 80px;
`;

const WebtoonHeaderWrapper = styled.div`
  padding: 1.5rem;
  background-color: ${ColorPalette.WHITE};
  margin: 1.5rem 0;
  box-shadow: rgb(0 0 0 / 4%) 0px 1px 3px 0px,
    rgb(0 0 0 / 8%) 0px 0px 0px 1px inset;
`;

const HorizontalWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const VerticalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

const WebtoonTitle = styled.h1`
  font-size: 1.5rem;
`;
const WebtoonPlatform = styled.p``;
const WebtoonRelease = styled.p``;

const WebtoonGenreListWrapper = styled.div`
  margin-top: 1rem;
`;

const WebtoonRankingWrapper = styled.div`
  margin-left: auto;
`;

const WebtoonRanking = styled.div`
  padding: 0.5rem 0.75rem;
  background-color: ${ColorPalette.BRAND_MAIN};
  color: ${ColorPalette.WHITE};
  font-weight: 700;
  font-size: 1.125rem;

  border-radius: 999px;
`;

const WebtoonHeader: React.FC = () => {
  return (
    <PageTemplate>
      <WebtoonHeaderWrapper>
        <HorizontalWrapper>
          <WebtoonThumbnail src="https://shared-comic.pstatic.net/thumb/webtoon/748105/thumbnail/thumbnail_IMAG06_fa3bf10d-1b8f-40cd-a8eb-01caf9bbc3e4.jpg" />
          <VerticalWrapper>
            <div
              css={css`
                display: flex;
                align-items: center;
              `}
            >
              <WebtoonTitle
                css={css`
                  margin-right: 0.5rem;
                `}
              >
                독립일기
              </WebtoonTitle>
              <NaverWebtoonIcon width="2rem" height="2rem" />
            </div>
            <WebtoonRelease>목요일, 일요일</WebtoonRelease>
          </VerticalWrapper>
          <WebtoonRankingWrapper>
            <WebtoonRanking>
              <span
                css={css`
                  @media screen and (max-width: ${BREAKPOINT_MEDIUM}) {
                    display: none;
                  }
                `}
              >
                웹툰 순위{' '}
              </span>
              #1
            </WebtoonRanking>
          </WebtoonRankingWrapper>
        </HorizontalWrapper>
        <WebtoonGenreListWrapper>
          <WebtoonGenreList genreList={['에피소드', '일상']} />
        </WebtoonGenreListWrapper>
      </WebtoonHeaderWrapper>
    </PageTemplate>
  );
};

export default WebtoonHeader;

import React from 'react';
import styled from 'styled-components';
import PageTemplate from 'components/base/PageTemplate';
import { ColorPalette } from 'utils/ColorUtils';
import WebtoonGenreList from './WebtoonGenreList';

const WebtoonHeaderTitle = styled.p`
  font-weight: 700;
  font-size: 28px;
  margin: 28px 0;
`;

const WebtoonThumbnail = styled.img`
  object-fit: cover;
  background: ${ColorPalette.WHITE};
  width: 200px;
  height: 160px;
`;

const WebtoonHeaderWrapper = styled.div`
  padding: 28px;
  background-color: ${ColorPalette.WHITE};
  margin: 28px 0;
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
  margin-left: 20px;
`;

const WebtoonTitle = styled.h1``;
const WebtoonPlatform = styled.p``;
const WebtoonRelease = styled.p``;

const WebtoonGenreListWrapper = styled.div`
  margin-top: auto;
`;

const WebtoonRankingWrapper = styled.div`
  margin-left: auto;
`;

const WebtoonRanking = styled.div`
  border-radius: 30px;
  padding: 8px 14px;
  background-color: ${ColorPalette.BRAND_MAIN};
  color: ${ColorPalette.WHITE};
  font-weight: 700;
  font-size: 20px;
`;

const WebtoonHeader: React.FC = () => {
  return (
    <PageTemplate>
      <WebtoonHeaderWrapper>
        <HorizontalWrapper>
          <WebtoonThumbnail src="https://shared-comic.pstatic.net/thumb/webtoon/748105/thumbnail/thumbnail_IMAG06_fa3bf10d-1b8f-40cd-a8eb-01caf9bbc3e4.jpg" />
          <VerticalWrapper>
            <WebtoonTitle>독립일기</WebtoonTitle>
            <WebtoonRelease>목요일, 일요일</WebtoonRelease>
            <WebtoonPlatform>네이버 웹툰</WebtoonPlatform>
            <WebtoonGenreListWrapper>
              <WebtoonGenreList genreList={['에피소드', '일상']} />
            </WebtoonGenreListWrapper>
          </VerticalWrapper>
          <WebtoonRankingWrapper>
            <WebtoonRanking>웹툰 순위 #1</WebtoonRanking>
          </WebtoonRankingWrapper>
        </HorizontalWrapper>
      </WebtoonHeaderWrapper>
    </PageTemplate>
  );
};

export default WebtoonHeader;

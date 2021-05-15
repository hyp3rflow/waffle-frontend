import React from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';

import { ColorPalette } from 'utils/ColorUtils';
import NaverWebtoonIcon from 'components/webtoon/main/NaverWebtoonIcon';
import { BREAKPOINT_MEDIUM } from 'constants/breakpoints';

const WebtoonCurationItemWrapper = styled.a`
  display: flex;
  flex-direction: column;
  background-color: ${ColorPalette.WHITE};

  @media screen and (max-width: ${BREAKPOINT_MEDIUM}) {
    flex-direction: row;
  }
`;

const ItemThumbnail = styled.img`
  object-fit: cover;
  background: ${ColorPalette.WHITE};
  width: 200px;
  height: 160px;

  @media screen and (max-width: ${BREAKPOINT_MEDIUM}) {
    width: auto;
    height: 100%;
  }
`;

const ItemInfoWrapper = styled.div`
  margin: 14px;

  display: inline-flex;
  flex-direction: column;
`;

const ItemTitle = styled.div`
  font-weight: 600;
  font-size: 18px;
  display: flex;
  align-items: center;
`;

const ItemAuthorName = styled.div``;

const ItemAuthor = styled.span`
  color: #495057;
`;

const WebtoonCurationItem: React.FC = () => {
  return (
    <Link href="/webtoon/3">
      <WebtoonCurationItemWrapper>
        <ItemThumbnail src="https://shared-comic.pstatic.net/thumb/webtoon/748105/thumbnail/thumbnail_IMAG06_fa3bf10d-1b8f-40cd-a8eb-01caf9bbc3e4.jpg" />
        <ItemInfoWrapper>
          <ItemTitle>
            독립일기
            <NaverWebtoonIcon width={40} height={25} />
          </ItemTitle>
          <ItemAuthorName>
            자까
            <ItemAuthor> 작가</ItemAuthor>
          </ItemAuthorName>
          <div>매주 목, 일요일</div>
        </ItemInfoWrapper>
      </WebtoonCurationItemWrapper>
    </Link>
  );
};

export default WebtoonCurationItem;

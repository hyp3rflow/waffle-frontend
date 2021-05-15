import React from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';

import { ColorPalette } from 'utils/ColorUtils';
import NaverWebtoonIcon from 'components/webtoon/NaverWebtoonIcon';

const WebtoonCurationItemWrapper = styled.a`
  width: 200px;
  box-shadow: 0 8px 12px rgba(20, 20, 20, 0.2);

  & + & {
    margin-left: 14px;
  }
`;

const ItemThumbnail = styled.img`
  object-fit: cover;
  background: ${ColorPalette.WHITE};
  width: 200px;
  height: 160px;
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

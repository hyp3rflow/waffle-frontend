import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ColorPalette } from 'utils/ColorUtils';

const WebtoonCurationItemWrapper = styled(Link)`
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
`;

const ItemAuthorName = styled.div``;

const ItemAuthor = styled.span`
  color: #495057;
`;

const WebtoonCurationItem: React.FC = () => {
  return (
    <WebtoonCurationItemWrapper to="/webtoon/3">
      <ItemThumbnail src="https://shared-comic.pstatic.net/thumb/webtoon/748105/thumbnail/thumbnail_IMAG06_fa3bf10d-1b8f-40cd-a8eb-01caf9bbc3e4.jpg" />
      <ItemInfoWrapper>
        <ItemTitle>독립일기</ItemTitle>
        <ItemAuthorName>
          자까
          <ItemAuthor> 작가</ItemAuthor>
        </ItemAuthorName>
        <div>네이버 웹툰 (목, 일요일)</div>
      </ItemInfoWrapper>
    </WebtoonCurationItemWrapper>
  );
};

export default WebtoonCurationItem;

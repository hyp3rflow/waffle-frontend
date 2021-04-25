import React from 'react';
import styled from 'styled-components';

import { ColorPalette } from 'utils/ColorUtils';

const GenreListWrapper = styled.div`
  display: flex;
  margin-top: 8px;
`;

const GenreItem = styled.div`
  padding: 6px 12px;
  background-color: ${ColorPalette.GRAY};
  font-size: 14px;
  color: ${ColorPalette.WHITE};
  border-radius: 20px;

  & + & {
    margin-left: 8px;
  }
`;

interface WebtoonGenreListProps {
  genreList: string[];
}

const WebtoonGenreList: React.FC<WebtoonGenreListProps> = props => {
  const { genreList } = props;

  return (
    <GenreListWrapper>
      {genreList.map(genre => (
        <GenreItem key={genre}>{genre}</GenreItem>
      ))}
    </GenreListWrapper>
  );
};

export default WebtoonGenreList;

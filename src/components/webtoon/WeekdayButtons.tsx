import React from 'react';
import styled, { css } from 'styled-components';

import { ColorPalette } from 'utils/ColorUtils';

const Weekday = styled.button`
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 1rem;
  background-color: ${ColorPalette.WHITE};
  border: 1px solid ${ColorPalette.DARK_GRAY};

  :active {
    border: 1px solid ${ColorPalette.DARK_GRAY};
  }
`;

const WeekdayButtons: React.FC = ({ ...props }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
        column-gap: 1.5rem;
        row-gap: 1rem;
        justify-content: center;
      `}
      {...props}
    >
      <Weekday>월</Weekday>
      <Weekday>화</Weekday>
      <Weekday>수</Weekday>
      <Weekday>목</Weekday>
      <Weekday>금</Weekday>
      <Weekday>토</Weekday>
      <Weekday>일</Weekday>
      <Weekday>완결</Weekday>
    </div>
  );
};

export default WeekdayButtons;

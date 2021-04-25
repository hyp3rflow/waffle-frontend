import React from 'react';
import styled, { css } from 'styled-components';

import { ColorPalette } from 'utils/ColorUtils';

interface StyleOption {
  padding?: string;
  margin?: string;
  backgroundColor?: string;
  onHoverBackgroundColor?: string;
  onActiveBackgroundColor?: string;
  borderRadius?: string;
  transition?: string;
}

const RoundButtonWrapper = styled.button<StyleOption>`
  border-radius: 100px;
  padding: 8px 14px;
  background-color: ${ColorPalette.BRAND_BASE};
  color: ${ColorPalette.WHITE};
  transition: background-color 0.3s linear;
  font-weight: 700;

  &:active {
    background-color: ${ColorPalette.BRAND_MAIN};
  }

  &:hover {
    background-color: ${ColorPalette.BRAND_MAIN};
  }

  ${props =>
    props.padding &&
    css`
      padding: ${props.padding};
    `}

  ${props =>
    props.margin &&
    css`
      margin: ${props.margin};
    `}

  ${props =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `}

  ${props =>
    props.borderRadius &&
    css`
      border-radius: ${props.borderRadius};
    `}

  ${props =>
    props.transition &&
    css`
      transition: ${props.transition};
    `}

  &:active {
    ${props =>
      props.onActiveBackgroundColor &&
      css`
        background-color: ${props.onActiveBackgroundColor};
      `}
  }

  &:hover {
    ${props =>
      props.onHoverBackgroundColor &&
      css`
        background-color: ${props.onHoverBackgroundColor};
      `}
  }
`;

interface RoundButtonProps {
  onClick?: () => void;
  styleOptions?: StyleOption;
}

const RoundButton: React.FC<RoundButtonProps> = props => {
  const { children, styleOptions, onClick } = props;
  return (
    <RoundButtonWrapper onClick={onClick} {...styleOptions}>
      {children}
    </RoundButtonWrapper>
  );
};

export default RoundButton;

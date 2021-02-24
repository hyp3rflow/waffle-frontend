import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from 'assets/waffle-logo@2x.png';
import { ColorPalette } from 'utils/ColorUtils';
import PageTemplate from './PageTemplate';
import BackgroundTemplate from './BackgroundTemplate';

const HeaderWrapper = styled.div`
  height: 60px;

  display: flex;
  align-items: center;
`;

const HeaderSectionWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const LogoLink = styled(Link)`
  height: 50px;
  margin-right: 12px;
`;

const LogoImg = styled.img`
  height: 50px;
`;

interface HeaderItemProps {
  primary?: boolean;
}

const HeaderItem = styled(Link)<HeaderItemProps>`
  padding: 5px 8px;
  background-color: ${(props) =>
    props.primary ? ColorPalette.BRAND_MAIN : ColorPalette.BRAND_ORANGE};
  color: ${ColorPalette.WHITE};
  font-size: 14px;
  transition: background-color 0.3s linear;
  user-select: none;

  & + & {
    margin-left: 12px;
  }

  &:hover {
    background-color: ${ColorPalette.BRAND_BASE};
  }
`;

const Header: React.FC = () => {
  return (
    <BackgroundTemplate backgroundColor={ColorPalette.WHITE}>
      <PageTemplate>
        <HeaderWrapper>
          <LogoLink to="/">
            <LogoImg src={Logo} alt="logo" />
          </LogoLink>
          <HeaderItem to="/about">와플?</HeaderItem>
          <HeaderSectionWrapper>
            <HeaderItem to="/login">로그인</HeaderItem>
            <HeaderItem primary to="/register">
              회원가입
            </HeaderItem>
          </HeaderSectionWrapper>
        </HeaderWrapper>
      </PageTemplate>
    </BackgroundTemplate>
  );
};

export default Header;

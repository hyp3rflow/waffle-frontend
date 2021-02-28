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
  font-size: 14px;
  font-weight: bold;
  transition: background-color 0.2s linear;
  border-radius: 4px;
  user-select: none;

  & + & {
    margin-left: 12px;
  }

  &:hover {
    background-color: ${ColorPalette.BRAND_ACCENT};
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
          <HeaderItem to="/webtoon">웹툰</HeaderItem>
          <HeaderItem to="/comics">만화</HeaderItem>
          <HeaderItem to="/webnovel">웹소설</HeaderItem>
          <HeaderItem to="/drama">드라마</HeaderItem>
          <HeaderItem to="/movie">영화</HeaderItem>
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

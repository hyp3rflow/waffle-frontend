import React from 'react';
import Link from 'next/link';
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

const LogoLink = styled.a`
  height: 50px;
  margin-right: 12px;
`;

const LogoImg = styled.img`
  height: 50px;
`;

interface HeaderItemProps {
  primary?: boolean;
}

const HeaderItem = styled.a<HeaderItemProps>`
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
          <Link href="/">
            <LogoLink>
              <LogoImg src={Logo} alt="logo" />
            </LogoLink>
          </Link>
          <Link href="/about">
            <HeaderItem>
              <a>와플?</a>
            </HeaderItem>
          </Link>
          <Link href="/webtoon">
            <HeaderItem>
              <a>웹툰</a>
            </HeaderItem>
          </Link>
          <Link href="/comics">
            <HeaderItem>
              <a>만화</a>
            </HeaderItem>
          </Link>
          <Link href="/webnovel">
            <HeaderItem>
              <a>웹소설</a>
            </HeaderItem>
          </Link>
          <Link href="/drama">
            <HeaderItem>
              <a>드라마</a>
            </HeaderItem>
          </Link>
          <Link href="/movie">
            <HeaderItem>
              <a>영화</a>
            </HeaderItem>
          </Link>
          <HeaderSectionWrapper>
            <Link href="/login">
              <HeaderItem>
                <a>로그인</a>
              </HeaderItem>
            </Link>
            <Link href="/register">
              <HeaderItem primary>
                <a>회원가입</a>
              </HeaderItem>
            </Link>
          </HeaderSectionWrapper>
        </HeaderWrapper>
      </PageTemplate>
    </BackgroundTemplate>
  );
};

export default Header;

import React from 'react';
import styled, { css } from 'styled-components';

import { ColorPalette } from 'utils/ColorUtils';

import BackgroundTemplate from './BackgroundTemplate';
import PageTemplate from './BlockLayout';

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2rem 0;
  margin: 0 auto;
  justify-content: center;
`;

const Logo = styled.p`
  font-weight: bold;
  color: #ced4da;
`;

const Copyright = styled.p`
  font-size: 0.8125rem;
  font-weight: bold;
  color: #ced4da;
`;

const Description = styled.p`
  margin-top: 1rem;
  color: #ced4da;
`;

const Octocat = styled.a`
  margin-top: 20px;
  fill: #ced4da;

  height: 30px;
  width: 30px;

  transition: fill 0.3s linear;

  &:hover {
    fill: ${ColorPalette.WHITE};
  }
`;

const Footer: React.FC = () => {
  return (
    <BackgroundTemplate
      css={css`
        padding-bottom: env(safe-area-inset-bottom);
      `}
      backgroundColor="#343a40"
    >
      <PageTemplate>
        <FooterWrapper>
          <Logo>waffle.reviews</Logo>
          <Copyright>&copy; 2021 hyperflow, TEAM waffle</Copyright>
          <Description>
            원작 콘텐츠의 저작권은 저자 또는 제공처에 있으며, 비평 목적의
            공정이용 해당 범위 내에서 인용하고 있습니다.
          </Description>
          <Octocat
            target="_blank"
            href="https://github.com/hyp3rflow/waffle-frontend"
          >
            <svg
              height="30"
              viewBox="0 0 16 16"
              version="1.1"
              width="30"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              />
            </svg>
          </Octocat>
        </FooterWrapper>
      </PageTemplate>
    </BackgroundTemplate>
  );
};

export default Footer;

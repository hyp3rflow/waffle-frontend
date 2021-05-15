import React from 'react';
import styled from 'styled-components';

import PageTemplate from 'components/base/BlockLayout';
import { ColorPalette } from 'utils/ColorUtils';
import BackgroundTemplate from 'components/base/BackgroundTemplate';

const IntroTitle = styled.p`
  display: inline-block;
  font-size: 2.25rem;
  font-weight: bold;
  margin-top: 1rem;
  line-height: 1.5;
`;

const IntroSubtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
`;

const IntroWaffle = styled.span`
  color: ${ColorPalette.WHITE};
  background: ${ColorPalette.BRAND_MAIN};
  box-shadow: 0 0 0 0.5rem ${ColorPalette.BRAND_MAIN};
`;

const IntroSectionWrapper = styled.div`
  flex-direction: column;
  padding: 12px 0;
  padding-top: 100px;
  padding-bottom: 48px;
`;

const Introduction: React.FC = () => {
  return (
    <BackgroundTemplate backgroundColor={ColorPalette.WHITE}>
      <PageTemplate>
        <IntroSectionWrapper>
          <IntroSubtitle>보고싶은 것은 많지만,</IntroSubtitle>
          <IntroSubtitle>볼만한 것들은 적으니까.</IntroSubtitle>
          <IntroTitle>
            그런 여러분을 위한,
            <div>
              리뷰 플랫폼&nbsp;&nbsp;
              <IntroWaffle>와플.</IntroWaffle>
            </div>
          </IntroTitle>
        </IntroSectionWrapper>
      </PageTemplate>
    </BackgroundTemplate>
  );
};

export default Introduction;

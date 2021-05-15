import React from 'react';
import styled from 'styled-components';

import BackgroundTemplate from 'components/base/BackgroundTemplate';
import PageTemplate from 'components/base/BlockLayout';
import { ColorPalette } from 'utils/ColorUtils';

const InquiryWrapper = styled.div`
  padding: 48px 0;
`;

const InquiryHeading = styled.h1`
  font-weight: 800;
  font-size: 28px;
`;

const AboutInquiry: React.FC = () => {
  return (
    <BackgroundTemplate backgroundColor={ColorPalette.WHITE}>
      <PageTemplate>
        <InquiryWrapper>
          <InquiryHeading>여러분의 의견을 나누어주세요.</InquiryHeading>
          <p>개선점, 버그, 건의사항들을 보내주시면 반영하도록 하겠습니다.</p>
          <p>inquiry@waffle.reviews</p>
        </InquiryWrapper>
      </PageTemplate>
    </BackgroundTemplate>
  );
};

export default AboutInquiry;

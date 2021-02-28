import PageTemplate from 'components/base/PageTemplate';
import React from 'react';
import styled from 'styled-components';

const AboutTopWrapper = styled.div`
  margin: 32px 0;
`;

const ParagraphWrapper = styled.div`
  padding-top: 32px;

  &:last-child {
    padding-bottom: 32px;
  }
`;

const SemiHeading = styled.h2`
  text-align: center;
  margin: 0 auto;
`;

const Heading = styled.h1`
  text-align: center;
  margin: 0 auto;
  margin-bottom: 14px;
  font-size: 34px;
  font-weight: 800;
`;

const Description = styled.p`
  text-align: center;
  margin: 0 auto;
`;

const AboutTop: React.FC = () => {
  return (
    <PageTemplate>
      <AboutTopWrapper>
        <ParagraphWrapper>
          <SemiHeading>
            와플 팀이 공유하고자 하는 소중한 가치는 세가지입니다.
          </SemiHeading>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <Heading>여러분의 소중한 시간을 아낄 수 있도록.</Heading>
          <Description>
            나에게 맞는 취향의 컨텐츠들을 골라보세요.
            <br />
            다양한 플랫폼에서 제공하는 컨텐츠들을 한번에 와플에서 둘러볼 수
            있습니다.
          </Description>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <Heading>의미있는 리뷰를 찾을 수 있도록.</Heading>
          <Description>
            와플이 직접 인증한 '우수 리뷰어' 뱃지가 달린 리뷰를 찾아보세요.
            <br />
            진정으로 컨텐츠를 사랑하는 리뷰어들의 의미있는 리뷰를 만날 수
            있습니다.
          </Description>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <Heading>여러분의 경험을 공유할 수 있도록.</Heading>
          <Description>
            프로필 공유 기능을 통해 여러분의 리뷰를 공유해보세요.
            <br />
            여러분이 즐긴 컨텐츠들과 작성해주신 리뷰를 쉽게 공유할 수 있습니다.
          </Description>
        </ParagraphWrapper>
      </AboutTopWrapper>
    </PageTemplate>
  );
};

export default AboutTop;

import React from 'react';
import styled, { css } from 'styled-components';

import PageTemplate from 'components/base/BlockLayout';
import { ColorPalette } from 'utils/ColorUtils';

const RegisterWrapper = styled.div`
  min-height: calc(100vh - 260px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RegisterBox = styled.div`
  width: 480px;
  margin: 48px 0;
  padding: 48px;
  background-color: ${ColorPalette.WHITE};
  box-shadow: rgb(20 20 20 / 2%) 2px 8px 12px 0px,
    rgb(20 20 20 / 2%) 0px 1px 3px 0px;
  border-radius: 4px;
`;

const RegisterTitle = styled.h1`
  font-weight: 800;
  margin-bottom: 36px;
`;

const DescriptionLabel = styled.p`
  padding: 8px 0;
  font-size: 14px;
  text-align: center;
`;

interface RegisterInputProps {
  isInvalid?: boolean;
}

const RegisterInput = styled.input<RegisterInputProps>`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  box-shadow: rgb(0 0 0 / 4%) 0px 1px 3px 0px,
    rgb(0 0 0 / 8%) 0px 0px 0px 1px inset;

  ${props =>
    props.isInvalid &&
    css`
      box-shadow: rgb(255 0 0 / 4%) 0px 1px 3px 0px,
        rgb(255 0 0 / 30%) 0px 0px 0px 1px inset;
    `}

  & + & {
    margin-top: 12px;
  }
`;

const RegisterComponent: React.FC = () => {
  return (
    <PageTemplate>
      <RegisterWrapper>
        <RegisterBox>
          <RegisterTitle>회원가입</RegisterTitle>
          <RegisterInput placeholder="이메일 (아이디)" />
          <DescriptionLabel>
            아이디로 사용되며, 이메일 인증이 필요합니다.
          </DescriptionLabel>
          <RegisterInput
            placeholder="비밀번호"
            type="password"
            autoComplete="off"
          />
          <RegisterInput
            placeholder="비밀번호 확인"
            type="password"
            autoComplete="off"
          />
          <DescriptionLabel>
            7글자 이상 영문, 특수문자, 숫자 조합으로 구성해주세요.
            <br />
            비밀번호가 일치하지 않습니다.
          </DescriptionLabel>
          <RegisterInput placeholder="닉네임" />
          <DescriptionLabel>사용할 수 없는 닉네임입니다.</DescriptionLabel>
        </RegisterBox>
      </RegisterWrapper>
    </PageTemplate>
  );
};

export default RegisterComponent;

import PageTemplate from 'components/base/PageTemplate';
import RoundButton from 'components/base/RoundButton';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ColorPalette } from 'utils/ColorUtils';

const LoginWrapper = styled.div`
  height: calc(100vh - 260px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginBox = styled.div`
  width: 480px;
  padding: 48px;
  background-color: ${ColorPalette.WHITE};
  box-shadow: rgb(20 20 20 / 2%) 2px 8px 12px 0px,
    rgb(20 20 20 / 2%) 0px 1px 3px 0px;
  border-radius: 4px;
`;

const LoginTitle = styled.h1`
  font-weight: 800;
  margin-bottom: 36px;
`;

const LoginInput = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  box-shadow: rgb(0 0 0 / 4%) 0px 1px 3px 0px,
    rgb(0 0 0 / 8%) 0px 0px 0px 1px inset;

  & + & {
    margin-top: 12px;
  }
`;

const RememberLogin = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: center;
`;

const RememberCheckbox = styled.input`
  width: 14px;
  height: 14px;
  margin-right: 8px;

  box-shadow: rgb(0 0 0 / 4%) 0px 1px 3px 0px,
    rgb(0 0 0 / 8%) 0px 0px 0px 1px inset;
`;

const LoginButtonList = styled.div`
  display: flex;
  margin-top: 18px;
`;

const SocialLoginButton = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  background-color: #fee500;
  box-shadow: rgb(0 0 0 / 4%) 0px 1px 3px 0px,
    rgb(0 0 0 / 8%) 0px 0px 0px 1px inset;

  & + & {
    margin-left: 12px;
  }
`;

const AuthAltList = styled.div`
  margin-top: 36px;
  display: flex;
  flex-direction: column;

  a,
  a:visited {
    font-size: 14px;
    color: ${ColorPalette.GRAY};
  }

  a:hover {
    color: ${ColorPalette.DARK_GRAY};
  }
`;

const LoginComponent: React.FC = () => {
  return (
    <PageTemplate>
      <LoginWrapper>
        <LoginBox>
          <LoginTitle>로그인</LoginTitle>
          <LoginInput placeholder="아이디" />
          <LoginInput
            placeholder="비밀번호"
            type="password"
            autoComplete="off"
          />
          <RememberLogin>
            <RememberCheckbox type="checkbox" />
            30일 간 로그인 유지하기
          </RememberLogin>
          <LoginButtonList>
            <SocialLoginButton />
            <SocialLoginButton />
            <SocialLoginButton />
            <RoundButton styleOptions={{ margin: '0 0 0 auto' }}>
              로그인
            </RoundButton>
          </LoginButtonList>
          <AuthAltList>
            <Link to="/find/account">아이디를 잊었어요.</Link>
            <Link to="/find/password">비밀번호를 모르겠어요 :(</Link>
          </AuthAltList>
        </LoginBox>
      </LoginWrapper>
    </PageTemplate>
  );
};

export default LoginComponent;

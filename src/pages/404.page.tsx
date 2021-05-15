import React from 'react';
import { css } from 'styled-components';
import { useRouter } from 'next/router';

import Header from 'components/base/Header';
import PageLayout from 'components/base/PageLayout';

const Custom404Page = () => {
  const router = useRouter();
  return (
    <PageLayout>
      <Header />
      <div
        css={css`
          position: absolute;
          top: calc(50% - 100px);
          left: 50%;
          transform: translate(-50%, -50%);
        `}
      >
        <h1>404!</h1>
        <p>막다른 길로 오셨어요!</p>
        <button onClick={() => router.back()}>돌아가기</button>
      </div>
    </PageLayout>
  );
};

export default Custom404Page;

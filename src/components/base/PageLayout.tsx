import React from 'react';
import { css } from 'styled-components';

import Footer from './Footer';

const PageLayout: React.FC = ({ children }) => {
  return (
    <div
      css={css`
        min-height: 100vh;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
      `}
    >
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default PageLayout;

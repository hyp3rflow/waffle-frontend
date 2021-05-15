import React from 'react';
import styled from 'styled-components';

import { BREAKPOINT_MEDIUM, BREAKPOINT_SMALL } from 'constants/breakpoints';

const BlockLayoutWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (max-width: ${BREAKPOINT_MEDIUM}) {
    padding: 0 25px;
  }

  @media screen and (max-width: ${BREAKPOINT_SMALL}) {
    padding: 0 20px;
  }
`;

const BlockLayout: React.FC = props => {
  const { children } = props;

  return <BlockLayoutWrapper>{children}</BlockLayoutWrapper>;
};

export default BlockLayout;

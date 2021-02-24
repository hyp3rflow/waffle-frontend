import React from 'react';
import styled from 'styled-components';

const PageTemplateWrapper = styled.div`
  max-width: 1290px;
  margin: 0 auto;
  padding: 0 12px;
`;

const PageTemplate: React.FC = (props) => {
  const { children } = props;

  return <PageTemplateWrapper>{children}</PageTemplateWrapper>;
};

export default PageTemplate;

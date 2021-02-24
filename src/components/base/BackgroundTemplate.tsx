import React from 'react';
import styled from 'styled-components';

interface BackgroundWrapperProps {
  backgroundColor: string;
}

const BackgroundWrapper = styled.div<BackgroundWrapperProps>`
  background-color: ${(props) => props.backgroundColor};
`;

interface BackgroundTemplateProps {
  backgroundColor: string;
}

const BackgroundTemplate: React.FC<BackgroundTemplateProps> = (props) => {
  const { children, backgroundColor } = props;

  return (
    <BackgroundWrapper backgroundColor={backgroundColor}>
      {children}
    </BackgroundWrapper>
  );
};

export default BackgroundTemplate;

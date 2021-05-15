import { createGlobalStyle } from 'styled-components';

import { BREAKPOINT_MEDIUM, BREAKPOINT_SMALL } from 'constants/breakpoints';
import { ColorPalette } from 'utils/ColorUtils';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
    height: 100%;

    @media screen and (max-width: ${BREAKPOINT_MEDIUM}) {
      font-size: 14px;
    }
  }

  body {
    background: #f8f9fa;
    min-height: 100%;
    color: ${ColorPalette.BRAND_BLACK};
    line-height: 1.3;
    word-break: keep-all;

    margin: 0;
    padding: 0;
    font-family: "Inter", 'Spoqa Han Sans Neo', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    scrollbar-width: none;
  }

  textarea, button, button:active, input {
    resize: none;
    outline: none;
    border: none;

    font-family: "Inter", 'Spoqa Han Sans Neo', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  }

  a, a:visited {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  input, textarea {
    border: none;

    :focus {
      outline: none;
    }
  }

  * {
    box-sizing: border-box;
    margin: 0;

    ::selection {
      background: ${ColorPalette.BRAND_MAIN};
      color: #f1f3f5;
    }
  }

  #root {
    overflow-y: auto;
  }
`;

export default GlobalStyle;

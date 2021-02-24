import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Logo from 'assets/waffle-logo@2x.png';

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <img src={Logo} alt="logo" />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);

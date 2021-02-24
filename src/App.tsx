import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GlobalStyle from 'components/base/GlobalStyle';
import MainPage from 'pages/MainPage';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/" component={MainPage} exact />
      </Switch>
    </>
  );
};

export default App;

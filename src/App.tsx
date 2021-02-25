import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GlobalStyle from 'components/base/GlobalStyle';
import MainPage from 'pages/MainPage';
import WebtoonPage from 'pages/WebtoonPage';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/webtoon/:id" component={WebtoonPage} />
      </Switch>
    </>
  );
};

export default App;

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GlobalStyle from 'components/base/GlobalStyle';
import MainPage from 'pages/MainPage';
import WebtoonDetailPage from 'pages/WebtoonDetailPage';
import AboutPage from 'pages/AboutPage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import WebtoonMainPage from 'pages/WebtoonMainPage';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/about" component={AboutPage} exact />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/register" component={RegisterPage} exact />
        <Route path="/webtoon" component={WebtoonMainPage} exact />
        <Route path="/webtoon/:id" component={WebtoonDetailPage} />
      </Switch>
    </>
  );
};

export default App;

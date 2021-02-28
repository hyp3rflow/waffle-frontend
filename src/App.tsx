import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GlobalStyle from 'components/base/GlobalStyle';
import MainPage from 'pages/MainPage';
import WebtoonPage from 'pages/WebtoonPage';
import AboutPage from 'pages/AboutPage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/about" component={AboutPage} exact />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/register" component={RegisterPage} exact />
        <Route path="/webtoon/:id" component={WebtoonPage} />
      </Switch>
    </>
  );
};

export default App;

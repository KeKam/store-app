import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import CollectionPage from './pages/collection-page/collection-page';
import LoginPage from './pages/login-page/login-page';
import Header from './components/header/header';
import { GlobalStyle } from './components/global-styles/global-style';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/collection' component={CollectionPage} />
        <Route path='/login' component={LoginPage} />
      </Switch>
    </div>
  );
};

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import CollectionPage from './pages/collection-page/collection-page';
import Header from './components/header/header';
import { GlobalStyle } from './components/global-styles/global-style';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/collection' component={CollectionPage} />
      </Switch>
    </div>
  );
};

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop-page/shop-page';
import { GlobalStyle } from './components/global-styles/global-style';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
};

export default App;

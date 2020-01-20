import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import HomePage from './pages/homepage/homepage';
import CollectionPage from './pages/collection-page/collection-page';
import CheckoutPage from './pages/checkout-page/checkout-page';
import LoginPage from './pages/login-page/login-page';
import Header from './components/header/header';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
import { GlobalStyle } from './components/global-styles/global-style';

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/collection' component={CollectionPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route
          exact
          path='/login'
          render={() => (currentUser ? <Redirect to='/' /> : <LoginPage />)}
        />
      </Switch>
    </div>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import CollectionPage from './pages/collection-page/collection-page';
import LoginPage from './pages/login-page/login-page';
import Header from './components/header/header';
import { auth } from './firebase/firebase';
import { GlobalStyle } from './components/global-styles/global-style';

const useAuthUser = props => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setUser(user);
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return user;
};

const App = () => {
  const user = useAuthUser();

  return (
    <div>
      <GlobalStyle />
      <Header user={user} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/collection' component={CollectionPage} />
        <Route path='/login' component={LoginPage} />
      </Switch>
    </div>
  );
};

export default App;

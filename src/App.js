import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/homepage/homepage';
import CollectionPage from './pages/collection-page/collection-page';
import LoginPage from './pages/login-page/login-page';
import Header from './components/header/header';
import { auth, createUserProfileDocument } from './firebase/firebase';
import { setCurrentUser } from './redux/actions/user.actions';
import { GlobalStyle } from './components/global-styles/global-style';

const App = ({ setCurrentUser }) => {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(user);
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, [setCurrentUser]);

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

export default connect(undefined, {
  setCurrentUser
})(App);

import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import HomePage from './pages/homepage/homepage';
import CollectionPage from './pages/collection-page/collection-page';
import CheckoutPage from './pages/checkout-page/checkout-page';
import LoginPage from './pages/login-page/login-page';
import Header from './components/header/header';
import { selectCurrentUser } from './redux/selectors/user.selectors';
import { auth, createUserProfileDocument } from './firebase/firebase';
import { setCurrentUser } from './redux/actions/user.actions';
import { GlobalStyle } from './components/global-styles/global-style';

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('test');
    const unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot(snapShot => {
          dispatch(
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
          );
        });
      } else {
        dispatch(setCurrentUser(user));
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
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

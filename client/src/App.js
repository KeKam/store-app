import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Header from './components/header/header';
import Spinner from './components/spinner/spinner';
import ErrorBoundary from './components/error-boundary/error-boundary';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
import { GlobalStyle } from './components/global-styles/global-style';

const HomePage = lazy(() => import('./pages/homepage/homepage'));

const ContactPage = lazy(() => import('./pages/contact-page/contact-page'));

const CollectionPage = lazy(() =>
  import('./pages/collection-page/collection-page')
);

const CheckoutPage = lazy(() => import('./pages/checkout-page/checkout-page'));

const LoginPage = lazy(() => import('./pages/login-page/login-page'));

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/contact' component={ContactPage} />
            <Route path='/collection' component={CollectionPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route
              exact
              path='/login'
              render={() => (currentUser ? <Redirect to='/' /> : <LoginPage />)}
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </>
  );
};

export default App;

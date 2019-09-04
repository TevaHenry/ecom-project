import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import Header from './components/Header/Header';
import Spinner from './components/Spinner/Spinner';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

import { GlobalStyle } from './global.styles';

import { selectCurrentUser } from './redux/User/userSelectors';
import { checkUserSession } from './redux/User/userActions';

const Homepage = lazy(() => import('./pages/homepage/Homepage'));
const SignInAndSignUp = lazy(() => import('./pages/SignInAndSignUp/SignInAndSignUp'));
const ShopPage = lazy(() => import('./pages/ShopPage/ShopPage'));
const CheckoutPage = lazy(() => import('./pages/checkout/CheckoutPage'));

const App = ({ currentUser, checkUserSession }) => {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={Homepage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route exact path='/signin' render={() => currentUser ? (<Redirect to= '/' />) : (<SignInAndSignUp />) } />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './App.css';

import Homepage from './pages/homepage/Homepage';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp';
import ShopPage from './pages/ShopPage/ShopPage';
import CheckoutPage from './pages/checkout/CheckoutPage';
import Header from './components/Header/Header';
import { selectCurrentUser } from './redux/User/userSelectors';
import { checkUserSession } from './redux/User/userActions';

const App = ({ currentUser, checkUserSession }) => {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/signin' render={() => currentUser ? (<Redirect to= '/' />) : (<SignInAndSignUp />) } />
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

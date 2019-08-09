import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import ShopPage from './components/ShopPage/ShopPage';
import Homepage from './pages/homepage/Homepage';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;

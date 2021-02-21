import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp';

function App() {
  return (
    <div>
      {/* Header outside of switch to make it omnipresent */}
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUp} /> 
      </Switch>
    </div>
  );
}

export default App;

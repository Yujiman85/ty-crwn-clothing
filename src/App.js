import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      {/* Header outside of switch to make it omnipresent */}
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} /> 
      </Switch>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import Header from './components/Header/Header';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp';
import Checkout from './pages/checkoutpage/Checkout';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/UserActions';
import { selectCurrentUser } from './redux/user/UserSelectors';

class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }
      this.props.setCurrentUser(userAuth);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        {/* Header outside of switch to make it omnipresent */}
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={Checkout} />
          [//Will render Home if user is signed in, Login/Signup page if not signed in]
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp />)} /> 
        </Switch>
      </div>
    );  
  }
  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
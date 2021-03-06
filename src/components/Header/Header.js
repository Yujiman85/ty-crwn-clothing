import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import { selectCartShow } from '../../redux/cart/CartSelectors';
import { selectCurrentUser } from '../../redux/user/UserSelectors';

import './Header.scss';

const Header = ({ currentUser, show }) => (
    <header className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='shop'>SHOP</Link>
            <Link className='option' to='contact'>CONTACT</Link>
            { currentUser 
                ? <Link className='option' to='/' onClick={() => auth.signOut()}>SIGN OUT</Link> 
                : <Link className='option' to='/signin'>SIGN IN</Link> 
            }
            <CartIcon />  
        </div>
        { show ? <CartDropdown /> : null }
        
    </header>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    show: selectCartShow
})

export default connect(mapStateToProps)(Header);
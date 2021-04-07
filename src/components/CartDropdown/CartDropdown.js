import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../../components/CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../redux/cart/CartSelectors';

import './CartDropdown.scss';

const CartDropdown = ({ cartItems, history }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length 
                ? cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                : <span className="empty-message">Your cart is empty!</span>
            }
        </div>
        <CustomButton onClick={() => history.push('/checkout')}>GO TO CART</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
import React from 'react';
import { connect } from 'react-redux';

import { toggleCartShow } from '../../redux/cart/CartActions';

import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';

import './CartIcon.scss';

const CartIcon = ({ toggleCartShow }) => (
    <div className='cart-icon' onClick={toggleCartShow}>
        <ShoppingBagIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartShow: () => dispatch(toggleCartShow())
})

export default connect(null, mapDispatchToProps)(CartIcon);
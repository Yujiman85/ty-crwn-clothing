import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartShow } from '../../redux/cart/CartActions';
import { selectCartItemsCount } from '../../redux/cart/CartSelectors';

import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';

import './CartIcon.scss';

const CartIcon = ({ toggleCartShow, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartShow}>
        <ShoppingBagIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartShow: () => dispatch(toggleCartShow())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
import React from 'react';

import CustomButton from '../../components/CustomButton/CustomButton';

import './CartDropdown.scss';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'></div>
        <CustomButton>GO TO CART</CustomButton>
    </div>
)

export default CartDropdown;
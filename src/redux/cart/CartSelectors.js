import { createSelector } from 'reselect';

const selectCart = state => state.cart;

//First argument is a collection of selectors
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartShow = createSelector(
    [selectCart],
    (cart) => cart.show
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((totalQuantity, cartItem) => totalQuantity + cartItem.quantity, 0)
)
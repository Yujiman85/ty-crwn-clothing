import CartActionTypes from './CartTypes';
import { addItemToCart } from "./cart.utils";

const INITIAL_STATE = {
    show: false,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_SHOW:
            return {
                ...state,
                show: !state.show
            };
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;
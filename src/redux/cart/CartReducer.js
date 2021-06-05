import CartActionTypes from './CartTypes';
import { addItemToCart, decreaseQuantityInCart } from "./cart.utils";

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
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        case CartActionTypes.DECREASE_QUANTITY:
            return {
                ...state,
                cartItems: decreaseQuantityInCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;
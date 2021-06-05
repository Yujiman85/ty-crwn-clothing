export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }
    //Return the item with a quantity of 1 if it's not in the cart already
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const decreaseQuantityInCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id)

    //If item quantity is 1 then it will be removed from the cart
    if (existingCartItem.quantity === 1) {
        return cartItems.filter (cartItem => cartItem.id !== cartItemToRemove.id)
    }
    
    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    )
}


import {createSelector} from 'reselect'

// Base cart input selector
const selectCart = state => state.cart;

// Returns a cartItems[] from the 'cart' state
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

// Returns the sum of quantities from the cart.cartItems[]
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acumulatedQuantity, cartItem) => acumulatedQuantity + cartItem.quantity, 0)
);

// Returns the hidden status from the 'cart' state
export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

// Returns the total price from the cart.cartItems[]
export const selectCartTotalPrice = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acumulatedPrice, cartItem) => acumulatedPrice + cartItem.quantity * cartItem.price, 0)
);

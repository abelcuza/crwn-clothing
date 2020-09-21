import {createSelector} from 'reselect'

const selectCart = state => state.cart;

// Returns a cartItems[] from the 'cart' state
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

// Returns the sum of quantities from the cartItems[]
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((count, cartItem) => count + cartItem.quantity, 0)
);


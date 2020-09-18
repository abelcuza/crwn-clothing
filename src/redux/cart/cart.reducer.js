import {CartActionTypes} from "./cart.types";
import {addCartItemToCart} from "./cart.utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOOGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addCartItemToCart(state.cartItems, action.payload)
            };
        default :
            return state
    }
};

export default cartReducer;

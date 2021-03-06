import CartActionTypes from "./cart.types";
import { addItemToCart } from './cart.utils';


const INITIAL_STATE = {
    hidden: true,
    cardItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cardItems: addItemToCart(state.cardItems, action.payload)
            }
        default:
            return state;
    }
}

export default  cartReducer;
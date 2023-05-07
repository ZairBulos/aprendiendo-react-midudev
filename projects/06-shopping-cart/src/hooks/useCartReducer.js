import { useReducer } from "react";
import { cartReducer, cartInitialState, CART_ACTIONS_TYPES } from "../reducers/cart";

export function useCatReducer() {
    const [ state, dispatch ] = useReducer(cartReducer, cartInitialState);

    const addToCart = (product) => dispatch({
        type: CART_ACTIONS_TYPES.ADD_TO_CART,
        payload: product
    });
    
    const clearCart =  () => dispatch({
        type: CART_ACTIONS_TYPES.CLEAR_CART
    });

    const removeFromCart = (product) => dispatch({
        type: CART_ACTIONS_TYPES.REMOVE_FROM_CART,
        payload: product
    });

    return { state, addToCart, clearCart, removeFromCart };
}
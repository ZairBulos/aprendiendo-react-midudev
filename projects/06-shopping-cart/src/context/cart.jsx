import React, { createContext } from "react";
import { useCatReducer } from "../hooks/useCartReducer";

// El que tenemos que consumir (Context)
export const CartContext = createContext();

// El que nos provee de acceso al context (Provider)
export function CartProvider({ children }) {
    const { state, addToCart, clearCart, removeFromCart } = useCatReducer();

    return(
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            clearCart,
            removeFromCart
        }}>
            { children }
        </CartContext.Provider>
    );
}
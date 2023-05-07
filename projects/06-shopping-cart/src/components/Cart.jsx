import "./Cart.css";
import React, { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import { useCart } from "../hooks/useCart";
import CartItem from "./CartItem";

function Cart() {
    const cartCheckboxId = useId();
    const { cart, addToCart, clearCart } = useCart();

    return(
        <>
            <label htmlFor={cartCheckboxId} className="cart-button"><CartIcon /></label>
            <input type="checkbox" id={cartCheckboxId} hidden />

            <aside className="cart">
                <ul>
                    {
                        cart.map(product => (
                            <CartItem key={product.id}
                                {...product}
                                addToCart={() => addToCart(product)}
                            />
                        ))
                    }
                </ul>

                <button onClick={clearCart}><ClearCartIcon /></button>
            </aside>
        </>
    );
}

export default Cart;
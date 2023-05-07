import React from "react";

function CartItem({ thumbnail, price, title, quantity, addToCart }) {
    return(
        <li>
            <img src={thumbnail} alt={title} />
            <div>
                <strong>{ title }</strong> -$ { price }
            </div>

            <footer>
                <small>Qty: { quantity }</small>
            </footer>

            <button onClick={addToCart}>+</button>
        </li>
    );
}

export default CartItem;
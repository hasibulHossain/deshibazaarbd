import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import { updateCartQtyAction } from "../_redux/action/CartAction";

const CartQuantity = ({ cart }) => {

    const dispatch                = useDispatch();
    const [quantity, setQuantity] = useState(cart.quantity);

    const updateQuantity = (quantity) => {
        setQuantity( quantity );
        dispatch(updateCartQtyAction(cart.productID, quantity));
    }

    return (
        <div className="quantity">
            <button
                disabled={quantity <= 1 ? true : false}
                onClick={() => updateQuantity(quantity - 1)}
                className={quantity <= 1 ? `not-allowed` : `pointer`}
            >
                <FontAwesomeIcon icon={faMinus} />
            </button>
            <input type="text" value={quantity} onChange={e => updateQuantity(e.target.value)} />
            <button className="pointer" onClick={() => updateQuantity(quantity + 1)}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    );
}

export default CartQuantity;
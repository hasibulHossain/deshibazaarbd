import React, { useState } from 'react';
import { useDispatch } from "react-redux";

import { updateCartQtyAction } from "../_redux/action/CartAction";

const CartQuantity = ({ cart }) => {
    const dispatch                = useDispatch();
    const [quantity, setQuantity] = useState(cart.quantity);

    const updateQuantity = (quantity) => {
        if(!quantity || quantity == 0) {
          setQuantity(1);
          dispatch(updateCartQtyAction(cart.productID, 1));
        } else {
            setQuantity( +quantity );
            dispatch(updateCartQtyAction(cart.productID, +quantity));
        }

    };

    return (
        <div className="quantity">
            <button
                disabled={+quantity <= 1 ? true : false}  
                onClick={() => updateQuantity(+quantity - 1)}
                className={+quantity <= 1 ? `not-allowed` : `pointer`}
            >
                <i className="fas fa-minus"></i>
            </button>
            <input type="text" value={+quantity} onChange={e => updateQuantity(e.target.value)} />
            <button className="pointer" onClick={() => updateQuantity(+quantity + 1)}>
                <i className="fas fa-plus"></i>
            </button>
        </div>
    );
}

export default CartQuantity;
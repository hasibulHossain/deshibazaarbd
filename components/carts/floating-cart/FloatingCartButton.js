import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { formatCurrency, activeCurrency } from '../../../services/currency';
import { toggleFloatingCart } from "../../../_redux/store/action/globalAction";
import { getCartsAction } from "../_redux/action/CartAction";

const FloatingCartButton = () => {

    const dispatch                      = useDispatch();
    const { totalQuantity, totalPrice } = useSelector(state => state.CartReducer);

    const flashDealBtnHandler = () => {
        dispatch(toggleFloatingCart());
    };

  useEffect(() => {
    dispatch(getCartsAction())
  }, []);

    return (
        <button onClick={flashDealBtnHandler} className="flashDealButton d-flex flex-column align-items-center pointer" >
            <div className="fixed-cart-items">
                <span><FontAwesomeIcon icon={faShoppingBag} /> </span>
                <span>
                    {totalQuantity} items
                </span>
            </div>
            <div className="fixed-cart-price d-flex justify-content-center align-item-center">
                <span>
                    {formatCurrency(totalPrice)}
                </span>
            </div>
        </button>
    );
}

export default FloatingCartButton;
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
        <button onClick={flashDealBtnHandler} className="flashDealButton d-flex align-items-center pointer" >
            <span className="mr-2">
                {" "}
                {totalQuantity} items
                <br />
                {formatCurrency(totalPrice)} {activeCurrency('code')}
            </span>
            <span> {" "} <FontAwesomeIcon className="ml-2" icon={faShoppingBag} /> </span>
        </button>
    );
}

export default FloatingCartButton;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { formatCurrency, activeCurrency } from '../../../services/currency';
import { toggleFloatingCart } from "../../../_redux/store/action/globalAction";
import { getCartsAction } from "../_redux/action/CartAction";
import styles from  './FloatingCartButton.module.scss';

const FloatingCartButton = () => {

    const dispatch                      = useDispatch();
    const { totalQuantity, totalPrice } = useSelector(state => state.CartReducer);
    // const { isMobile } = useSelector(state => state.GlobalReducer);

    const flashDealBtnHandler = () => {
        dispatch(toggleFloatingCart());
    };

    useEffect(() => {
        dispatch(getCartsAction())
    }, []);

    let fixedCartPrice = (
        <>
            <button onClick={flashDealBtnHandler} className="flashDealButton d-flex flex-column align-items-center pointer" >
                <div className="fixed-cart-items">
                    <span><FontAwesomeIcon icon={faShoppingBag} /> </span>
                    <span className={styles.color}>
                        {totalQuantity} items
                    </span>
                </div>
                <div className="fixed-cart-price d-flex justify-content-center align-item-center">
                    <span>
                        {formatCurrency(totalPrice)}
                    </span>
                </div>
            </button>
            <div className={styles.fixedCart}>
                <div className={styles.fixedCartInner}>
                    {/* <div className={styles.fixedCartLeft}></div> */}
                    <div className={styles.fixedCartMiddle}>
                        Start shopping
                    </div>
                    <div className={styles.fixedCartRight}>
                        <span style={{pointerEvents: 'none'}} className={styles.fixedCartQty}>{totalQuantity}</span>
                        <div onClick={flashDealBtnHandler} style={{width: '100%', height: '100%'}}>
                            <span><FontAwesomeIcon icon={faShoppingBag} /></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );





    return fixedCartPrice;
}

export default FloatingCartButton;
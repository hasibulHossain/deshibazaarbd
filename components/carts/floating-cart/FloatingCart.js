import React, { useEffect , useState} from "react";
import Link from "next/link";
import { IoMdCloseCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

import SimpleBtn from "../../master/SimpleBtn/SimpleBtn";
import FloatingCartProduct from "./FloatingCartProduct";
import { toggleFloatingCart } from "../../../_redux/store/action/globalAction";
import { handleCombineCarts, getCartsAction } from "../_redux/action/CartAction";
import { formatCurrency, activeCurrency } from '../../../services/currency';
import router from "next/router";

function FloatingCart() {
  const dispatch                            = useDispatch()
  const { floatingCartVisible }             = useSelector((state) => state.GlobalReducer)
  const { carts, totalQuantity, totalPrice} = useSelector((state) => state.CartReducer)

  const toggleCartHandler = () => {
    dispatch(toggleFloatingCart());
  };

  useEffect(() => {
    const bodyDOM = window.document.body;

    // Remove scrollbar when Floating cart is open
    if (floatingCartVisible) {
      bodyDOM.style.height = "100vh";
      bodyDOM.style.overflowY = "hidden";
    } else {
      bodyDOM.style.height = "";
      bodyDOM.style.overflowY = "";
    }
  });

  useEffect(() => {
    dispatch(getCartsAction())
  }, []);

  /**
   * Redirect to cart page 
   * Toggle also the cart handler on sidebar
   * 
   * @since 1.0.0
   * 
   * return void
   */
  const redirectToCart = () => {
    toggleCartHandler();
    router.push('/carts');
  }

  /**
   * Redirect to checkout page 
   * Toggle also the cart handler on sidebar
   * 
   * @since 1.0.0
   * 
   * return void
   */
  const redirectToCheckout = () => {
    toggleCartHandler();
    router.push('/checkout');
  }

  let floatingCart = null;
 
  if (floatingCartVisible) {
    floatingCart = (
      <div className="floating-cart modal-scrollbar">
        <div className="floating-cart__header">
          <p>There are {totalQuantity} Products</p>
          <div
            onClick={toggleCartHandler}
            className="floating-cart__close-icon"
          >
            <IoMdCloseCircle />
          </div>
        </div>

        <div className="floating-cart__products">
          {carts.length > 0 && carts.map((item, index) => (
            <div key={index}>
              <FloatingCartProduct item={item} />
            </div>
          ))}
        </div>

        <div className="floating-cart__payment-info">
          <div className="floating-cart__payment-details">
            <span>Sub Total</span>
            <span>
            { formatCurrency(totalPrice) } { activeCurrency('code') }
            </span>
          </div>

          <div className="floating-cart__payment-details">
            <span>Delivery Fee</span>
            <span>{ formatCurrency(totalPrice > 0 ? 60 : 0) } { activeCurrency('code') }</span>
          </div>

          {
            totalPrice > 0 &&
            <div className="floating-cart__payment-details">
              <span>Total</span>
              <span>{ formatCurrency(totalPrice + 60) } { activeCurrency('code') }</span>
            </div>
          }
          
        </div>

        <div className="floating-cart__actions">
          <div onClick={() => redirectToCart()}>
            <SimpleBtn variant="danger">View cart</SimpleBtn>
          </div>

          <div onClick={() => redirectToCheckout()}>
            <SimpleBtn variant="success">Checkout</SimpleBtn>
          </div>
        </div>
      </div>
    );
  }
  return floatingCart;
}

export default FloatingCart;

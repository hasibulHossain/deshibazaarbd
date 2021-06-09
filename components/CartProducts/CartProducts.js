import React from "react";

// third party imports

// local imports
import CartProduct from "./CartProduct.js/CartProduct";
// redux

function CartProducts() {
  return (
    <>
      <div className="cart-product-box">
        <CartProduct />
      </div>
      <div className="cart-product-box">
        <CartProduct />
      </div>
    </>
  );
}

export default CartProducts;

import React from "react";

// third party imports
import { FiChevronRight, FiPlus, FiMinus, FiHeart } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

// local imports

// redux imports

function CartProduct() {
  return (
    <div className="cart-product-container">
      <div className="cart-product">
        <div className="cart-product__left">
          <div className="cart-product-photo-container">
            <input type="checkbox" className="cart-checkbox" />
            <div className="cart-product-photo">
              {/* <img src="" alt="" /> */}
            </div>
          </div>
          <div className="cart-product-details">
            <h3>Tree Desing Right For Women With Box</h3>
            <div className="cart-product-info">
              <span>No Brand, </span>
              <span>Ring Size:Adjustable, </span>
              <span>Color Family:Silver</span>
            </div>
            <div className="cart-product-price">
              <span>$ 102</span> {/* discount price */}
              <span>$150</span> {/* main price */}
            </div>
            <div className="cart-product-discount">
              <span>-32%</span> {/* discount in percentage */}
            </div>
          </div>
        </div>
        <div className="cart-product__right">
          <div className="cart-product-qty">
            <FiMinus />
            <span>3</span>
            <FiPlus />
          </div>
          <div className="cart-product-actions">
            <FiHeart />
            <MdDelete />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;

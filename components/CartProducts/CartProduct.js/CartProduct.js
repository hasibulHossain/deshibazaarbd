import React from "react";

// third party imports
import { FiChevronRight } from "react-icons/fi";

// local imports

// redux imports

function CartProduct() {
  return (
    <div className="cart-product-container">
      <div className="cart-product">
        <div className="cart-product__left">
          <div className="cart-product-photo-container">
            <input type="checkbox" className="cart-checkbox" />
            <div className="cart-product-photo">#product photo</div>
          </div>
          <div className="cart-product-details">
            <h3>Tree Desing Right For Women With Box</h3>
            <div>
              <span>No Brand</span>
              <span>Ring Size:Adjustable</span>
              <span>Color Family:Silver</span>
            </div>
            <div>
              <span>$ 102</span> {/* discount price */}
              <span>$ 150</span> {/* main price */}
            </div>
            <div>
              <span>-32%</span> {/* discount in percentage */}
            </div>
          </div>
        </div>
        <div className="cart-product__right">
          <div className="cart-product-qty">
            <FiChevronRight />
            <span>3</span>
            <FiChevronRight />
          </div>
          <div className="cart-product-actions">
            <FiChevronRight />
            <FiChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;

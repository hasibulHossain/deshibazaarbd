import React from "react";

import { FiChevronRight, FiPlus, FiMinus, FiHeart } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

function FloatingCartProduct() {
  return (
    <div className="floating-cart__product">
      <div className="floating-cart__product-left">
        <div className="floating-cart__product-photo-container">
          {/* <img src="" alt="" /> */}
        </div>
      </div>
      <div className="floating-cart__product-right">
        <div className="floating-cart__product-details">
          <p className="floating-cart__product-name">Fresh Dryed almod (50g)</p>
          <p className="floating-cart__product-price">
            1 <span>X</span> Tk 300.00 BDT
          </p>

          <div className="floating-cart__product-qty">
            <FiMinus />
            <span>3</span>
            <FiPlus />
          </div>
        </div>
        <div className="floating-cart__product-dlt-action">
          <MdDelete />
        </div>
      </div>
    </div>
  );
}

export default FloatingCartProduct;

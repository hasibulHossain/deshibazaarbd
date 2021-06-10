import React from "react";

// third party imports
import { IoMdCloseCircle } from "react-icons/io";
import { useDispatch } from "react-redux";

// local imports
import SimpleBtn from "../master/SimpleBtn/SimpleBtn";
import FloatingCartProduct from "../FloatingCartProduct/FloatingCartProduct";
import { toggleModal } from "../../_redux/store/action/globalAction";

function FloatingCart() {
  const dispatch = useDispatch();
  const toggleCartHandler = () => {
    dispatch(toggleModal());
  };
  return (
    <div className="floating-cart modal-scrollbar">
      <div className="floating-cart__header">
        <p>There are 6 Products</p>
        <div onClick={toggleCartHandler} className="floating-cart__close-icon">
          <IoMdCloseCircle />
        </div>
      </div>
      <div className="floating-cart__products">
        <div>
          <FloatingCartProduct />
        </div>
        <div>
          <FloatingCartProduct />
        </div>
        <div>
          <FloatingCartProduct />
        </div>
        <div>
          <FloatingCartProduct />
        </div>
        <div>
          <FloatingCartProduct />
        </div>
      </div>
      <div className="floating-cart__payment">
        <div className="floating-cart__sub-total">
          <span>Sub Total</span>
          <span>TK 1400.00 BDT</span>
        </div>
        <div className="floating-cart__delivery-fee">
          <span>Delivery Fee</span>
          <span>TK 50.00 BDT</span>
        </div>
        <div className="floating-cart__total">
          <span>Sub Total</span>
          <span>TK 1450.00 BDT</span>
        </div>
      </div>
      <div className="floating_cart__actions">
        <div>
          <SimpleBtn variant="danger">view cart</SimpleBtn>
        </div>
        <div>
          <SimpleBtn variant="success">checkout</SimpleBtn>
        </div>
      </div>
    </div>
  );
}

export default FloatingCart;

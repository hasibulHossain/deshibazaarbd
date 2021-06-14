import React, { useEffect } from "react";

// third party imports
import { IoMdCloseCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

// local imports
import SimpleBtn from "../master/SimpleBtn/SimpleBtn";
import FloatingCartProduct from "../FloatingCartProduct/FloatingCartProduct";
import { toggleFloatingCart } from "../../_redux/store/action/globalAction";
import { getCartsAction } from "../_redux/CartProduct/Action/CartAction";

function FloatingCart() {
  const { floatingCartVisible } = useSelector((state) => state.GlobalReducer);
  const carts = useSelector((state) => state.CartReducer.carts)

  const dispatch = useDispatch();
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
  let floatingCart = null;
  if (floatingCartVisible) {
    floatingCart = (
      <div className="floating-cart modal-scrollbar">
        <div className="floating-cart__header">
          <p>There are {carts.length} Products</p>
          <div
            onClick={toggleCartHandler}
            className="floating-cart__close-icon"
          >
            <IoMdCloseCircle />
          </div>
        </div>
        <div className="floating-cart__products">
          {
            carts.length > 0 && carts.map((item, index) => (
              <div>
                <FloatingCartProduct item={item} />
              </div>
            ))
          }

        </div>
        <div className="floating-cart__payment-info">
          <div className="floating-cart__payment-details">
            <span>Sub Total</span>
            <span>TK 1400.00 BDT</span>
          </div>
          <div className="floating-cart__payment-details">
            <span>Delivery Fee</span>
            <span>TK 50.00 BDT</span>
          </div>
          <div className="floating-cart__payment-details">
            <span>Total</span>
            <span>TK 1450.00 BDT</span>
          </div>
        </div>
        <div className="floating-cart__actions">
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
  return floatingCart;
}

export default FloatingCart;

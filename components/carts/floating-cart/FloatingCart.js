import React, { useEffect , useState} from "react";
import Link from "next/link";

// third party imports
import { IoMdCloseCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

// local imports
import SimpleBtn from "../../master/SimpleBtn/SimpleBtn";
import FloatingCartProduct from "./FloatingCartProduct";
import { toggleFloatingCart } from "../../../_redux/store/action/globalAction";
import { handleCombineCarts, getCartsAction } from "../_redux/action/CartAction";
import { formatCurrency, activeCurrency } from '../../../services/currency';

function FloatingCart() {
  const dispatch = useDispatch();
  const { floatingCartVisible } = useSelector((state) => state.GlobalReducer);
  const carts = useSelector((state) => state.CartReducer.carts)
  const combineCartList = useSelector((state) => state.CartReducer.combineCartList)
  const totalPrice = useSelector((state) => state.CartReducer.totalPrice)
  const totalQuantity = useSelector((state) => state.CartReducer.totalQuantity)
  const [cartLength, setCartLength] = useState(null);


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
    // dispatch(handleCombineCarts())
  }, []);

  let floatingCart = null;
 
  if (floatingCartVisible) {
    floatingCart = (
      <div className="floating-cart modal-scrollbar">
        <div className="floating-cart__header">
          <p>There are {combineCartList.length} Products</p>
          <div
            onClick={toggleCartHandler}
            className="floating-cart__close-icon"
          >
            <IoMdCloseCircle />
          </div>
        </div>

        <div className="floating-cart__products">
          {combineCartList.length > 0 && combineCartList.map((item, index) => (
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
            <span>{ formatCurrency(50) } { activeCurrency('code') }</span>
          </div>

          {
            totalPrice > 0 &&
            <div className="floating-cart__payment-details">
              <span>Total</span>
              <span>{ formatCurrency(totalPrice + 50) } { activeCurrency('code') }</span>
            </div>
          }
          
        </div>

        <div className="floating-cart__actions">
          <Link href="/carts">
            <div>
              <SimpleBtn variant="danger">View cart</SimpleBtn>
            </div>
          </Link>

          <Link href="/checkout">
            <div>
              <SimpleBtn variant="success">Checkout</SimpleBtn>
            </div>
          </Link>
        </div>
      </div>
    );
  }
  return floatingCart;
}

export default FloatingCart;

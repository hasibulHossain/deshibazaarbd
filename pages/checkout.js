import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// local import
import MainLayout from "../components/layouts/MainLayout";
import { getCartsAction, handleShippingCost } from "../components/_redux/CartProduct/Action/CartAction";
import CartProduct from "../components/CartProducts/CartProduct.js/CartProduct";
import { getUserDataAction } from "../components/_redux/getUserData/Action/UserDataAction";
import { useRouter } from "next/router";
import OrderSummery from '../components/master/OrderSummery/OrderSummery';
import DeliiveryInfo from '../components/Delivery/DeliiveryInfo';
// import CartProduct from "../components/CartProducts/CartProduct.js/CartProduct";

export default function Carts() {
  const router = useRouter();
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.CartReducer.carts);
  const userData = useSelector((state) => state.UserDataReducer.userData);

  useEffect(() => {
    if (typeof window === "undefined") {
      global.window = {};
    }
    dispatch(getCartsAction());
    dispatch(getUserDataAction());
    dispatch(handleShippingCost(carts))


  }, []);


  const placeOrder = () => {
    if (userData !== null) {
      router.push('/checkout')
    } else if (userData === null) {
      router.push('/login')
    }
  }
  return (
    <>
      <MainLayout pageTitle="checkout">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div className="delivery_info mb-3 mt-5">
                <DeliiveryInfo />
                <div className="card mt-3 pl-3 pr-3 pt-2 shadow-sm">
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="deliver_content">{carts.length} Items</p>
                    <p className="deliver_content">Price</p>
                    <p className="deliver_content">Quantity</p>
                  </div>
                </div>

                <div className="p-3 card shadow-sm">
                  {
                    carts.length > 0 && carts.map((item, index) => (
                      <div className="cart_items_details" key={index + 1}>
                        <CartProduct item={item} />
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
            <div className="col-md-4 cart_checkout_margin">
              <OrderSummery handleClick={placeOrder} buttonText="PROCEED TO PAY" />
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}

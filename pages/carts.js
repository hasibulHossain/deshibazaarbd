import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";

import SimpleBtn from "../components/master/SimpleBtn/SimpleBtn";
import Modal from "../components/master/Modal/Modal";
import RemoveCartItem from "../components/RemoveCartItem/RemoveCartItem";
import OrderSummery from "../components/orders/OrderSummery";

import { toggleModal } from "../_redux/store/action/globalAction";
import {
  getCartsAction,
  toggleAllCartSelection,
} from "../components/carts/_redux/action/CartAction";
import { getUserDataAction } from "../components/_redux/getUserData/Action/UserDataAction";

import dynamic from 'next/dynamic';
const CartProduct = dynamic(() => import('../components/carts/cart-product/CartProduct'));

export default function Carts() {
  const router = useRouter();
  const dispatch = useDispatch();

  const { isModalActive } = useSelector((state) => state.GlobalReducer);
  const { supplierWiseCarts, carts, checkedAllCarts } = useSelector(
    (state) => state.CartReducer
  );
  const userData = useSelector((state) => state.UserDataReducer.userData);

  const deleteItemsHandler = () => {
    dispatch(toggleModal());
  };

  useEffect(() => {
    dispatch(getCartsAction());
    dispatch(getUserDataAction());
  }, []);

  const placeOrder = () => {
    if (userData !== null) {
      router.push("/checkout").then((_) => window.scrollTo(0, 0));
    } else if (userData === null) {
      router.push("/login").then((_) => window.scrollTo(0, 0));
    }
  };

  return (
    <>
        <div className="container">
          <div className="row mt-3 mb-5">
            <div className="col-lg-8 col-md-7 px-0 px-sm-2">
              <div className="cart_container_body">
                <p className="cart__preferred_delivery">My Carts</p>
                {/* <Card>
                  <div className="cart__left-top">
                    <div>
                      <IoIosCheckmarkCircle />
                      <p>Please select items</p>
                    </div>
                    <p>Availability and promotions will be shown here</p>
                  </div>
                </Card> */}
                <div className="card mt-3">

                  <div className="cart_item_box_top">
                    <p className="pointer" onClick={() => dispatch(toggleAllCartSelection(!checkedAllCarts))}>
                      <input className="cart-checkbox" type="checkbox" checked={checkedAllCarts} onChange={() => { }} />
                      &nbsp; Select All ({carts.length} items)
                    </p>
                  </div>

                  {supplierWiseCarts.length > 0 &&
                    supplierWiseCarts.map((item, index) => (
                      <div key={index}>
                        <div className="cart_items_by_shop" key={index}>
                          <div className="cart_item_box_top_1 py-3 px-1">
                            <div className="row justify-content-between">
                              <div className="col-lg-6">
                                <div className="cart_shop_name d-flex">
                                  <input className="cart-checkbox" type="checkbox" checked={item.isChecked} onChange={() => dispatch(toggleAllCartSelection(!item.isChecked, null, item.sellerID))} />
                                  <div className="ml-2">
                                    <div className="cart_details_body">
                                      <p>
                                        {item.sellerName}
                                      </p>
                                      <div className="cart_trash">
                                        <i className="fas fa-chevron-right"></i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <p className="estimate">Estimate time - {item.approxDeliveryDate} </p>
                              </div>
                            </div>

                          </div>
                          {/* <p className="Spend">
                            Spend ৳ 990 enjoy free shipping for Standard delivery option
                          </p> */}
                        </div>

                        <div className="py-3 px-1">
                          {item.data.length > 0 &&
                            item.data.map((cart, keyValue) => (
                              <div
                                className="cart_items_details py-2"
                                key={keyValue + 1}
                              >
                                <CartProduct cart={cart} />
                              </div>
                            ))}
                        </div>
                      </div>
                    ))}

                  <div className="p-2 mb-4">
                    <div className="text-center">
                      <Link href="/products">
                        <a href="/products" style={{ display: "inline-block" }}>
                          <SimpleBtn variant="success">
                            <i className="fas fa-shopping-bag"></i>
                            {' '}
                            CONTINUE SHOPPING
                          </SimpleBtn>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-5 px-0 px-sm-2 cart_checkout_margin">
              <OrderSummery
                handleClick={placeOrder}
                buttonText="PROCEED TO CHECKOUT"
              />
            </div>
          </div>
        </div>

      <Modal
        visible={isModalActive}
        closeModalHandler={() => console.log("modal close handler")}
      >
        <div style={{ width: "27rem" }}>
          <RemoveCartItem>
            Remove from cart item will be removed from order
          </RemoveCartItem>
        </div>
      </Modal>
    </>
  );
}

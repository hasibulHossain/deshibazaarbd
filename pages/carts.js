import React, { useEffect } from "react";
import Head from "next/head";

// third party import
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FiChevronRight } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

import { useSelector, useDispatch } from "react-redux";

// local import
import MainLayout from "../components/layouts/MainLayout";
import Card from "../components/Card/Card";
import SimpleInput from "../components/master/SimpleInput/SimpleInput";
import SimpleBtn from "../components/master/SimpleBtn/SimpleBtn";
import CartProducts from "../components/CartProducts/CartProducts";
import Modal from "../components/master/Modal/Modal";
import RemoveCartItem from "../components/RemoveCartItem/RemoveCartItem";
import { toggleModal } from "../_redux/store/action/globalAction";

export default function Carts() {
  const { isModalActive } = useSelector((state) => state.GlobalReducer);

  const dispatch = useDispatch();

  const deleteItemsHandler = () => {
    dispatch(toggleModal());
  };

  useEffect(() => {
    if (typeof window === "undefined") {
      global.window = {};
    }
  }, []);

  return (
    <>
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

      <Head>
        <title>Cart | Deshi Bazaar BD</title>
        <meta name="description" content="Meta" />
      </Head>
      <MainLayout>
        <div className="cart">
          <div className="cart__row">
            <div className="cart__container">
              <div className="cart__left">
                <p className="cart__preferred_delivery">
                  preferred delivery option
                </p>
                <Card>
                  <div className="cart__left-top">
                    <div>
                      <IoIosCheckmarkCircle />
                      <p>Please select items</p>
                    </div>
                    <p>Availability and promotions will be shown here</p>
                  </div>
                </Card>

                <div className="cart_items_box_container">
                  <Card>
                    <div className="cart_item_box_top">
                      <p>Select All (2 items)</p>
                      <div onClick={deleteItemsHandler}>
                        <MdDelete />
                        <p>Delete</p>
                      </div>
                    </div>
                    <div className="cart_items_by_shop">
                      <div className="cart_shop_details">
                        <div>
                          <div className="cart_shop_name">
                            <input className="cart-checkbox" type="checkbox" />
                            <p>Star Watch</p>
                            <FiChevronRight />
                          </div>
                          <p>Estimate time 9 june</p>
                        </div>
                        <p>
                          Spend ৳ 990 enjoy free shipping for Standard delivery
                          option
                        </p>
                      </div>
                      <div>
                        <CartProducts />
                      </div>
                    </div>
                    <div className="cart_items_by_shop">
                      <div className="cart_shop_details">
                        <div>
                          <div className="cart_shop_name">
                            <input className="cart-checkbox" type="checkbox" />
                            <p>Star Watch</p>
                            <FiChevronRight />
                          </div>
                          <p>Estimate time 9 june</p>
                        </div>
                        <p>
                          Spend ৳ 990 enjoy free shipping for Standard delivery
                          option
                        </p>
                      </div>
                      <div>
                        <CartProducts />
                      </div>
                    </div>
                    <div className="cart__left-footer">
                      <div>
                        <SimpleBtn
                          variant="danger"
                          onClick={() => console.log("update cart btn clicked")}
                        >
                          UPDATE CART
                        </SimpleBtn>
                      </div>
                      <div>
                        <SimpleBtn
                          variant="success"
                          onClick={() =>
                            console.log("continue shoping btn clicked")
                          }
                        >
                          CONTINUE SHOPPING
                        </SimpleBtn>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
              <div className="cart__right">
                <Card>
                  <div className="cart__right-container">
                    <div className="cart__right-header">
                      <p>Order Summery</p>
                    </div>
                    <div className="cart__right-order_details">
                      <div className="cart__right-order_details_inner">
                        <div className="cart__right-order_details_item">
                          <p>Sub Total(9 items)</p>
                          <p>TK 1500.00 BDT</p>
                        </div>
                        <div className="cart__right-order_details_item">
                          <p>Delivery Fee</p>
                          <p>TK 50.00 BDT</p>
                        </div>
                        <div className="cart__right-order_details_item">
                          <p>Shipping Fee Discount</p>
                          <p>TK 50.00 BDT</p>
                        </div>
                        <div className="cart__right-order_details_item">
                          <p>Total</p>
                          <p>TK 1550.00 BDT</p>
                        </div>
                      </div>
                    </div>
                    <div className="cart__right-footer">
                      <div className="cart__right-discount">
                        <div>
                          <SimpleInput placeholder="Discount Code" />
                        </div>
                        <div>
                          <SimpleBtn variant="success">Apply</SimpleBtn>
                        </div>
                      </div>
                      <div className="cart__proceed-btn">
                        <SimpleBtn variant="danger">
                          PROCEED TO CHECKOUT
                        </SimpleBtn>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}

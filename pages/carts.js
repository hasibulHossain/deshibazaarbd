import React, { useEffect } from "react";

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
import Modal from "../components/master/Modal/Modal";
import RemoveCartItem from "../components/RemoveCartItem/RemoveCartItem";
import { toggleModal } from "../_redux/store/action/globalAction";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { getCartsAction } from "../components/_redux/CartProduct/Action/CartAction";
import CartProduct from "../components/CartProducts/CartProduct.js/CartProduct";

export default function Carts() {
  const { isModalActive } = useSelector((state) => state.GlobalReducer);
  const carts = useSelector((state) => state.CartReducer.carts)
  const totalPrice = useSelector((state) => state.CartReducer.totalPrice)
  const totalQuantity = useSelector((state) => state.CartReducer.totalQuantity)
  const dispatch = useDispatch();

  const deleteItemsHandler = () => {
    dispatch(toggleModal());
  };

  useEffect(() => {
    if (typeof window === "undefined") {
      global.window = {};
    }
    dispatch(getCartsAction())
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

      <MainLayout pageTitle="Carts">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div className="cart_container_body">
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
                <div className="card mt-3">
                  <div className="cart_item_box_top">
                    <p>Select All (2 items)</p>
                    <div className="carts_delete" onClick={deleteItemsHandler}>
                      <FontAwesomeIcon className="cart_trash" icon={faTrash} />
                      <p>Delete</p>
                    </div>
                  </div>

                  <div className="cart_items_by_shop">
                    <div className="cart_item_box_top_1">
                      <div>
                        <div className="cart_shop_name d-flex">
                          <input className="cart-checkbox" type="checkbox" />
                          <div className="ml-2">
                            <div className="cart_details_body">
                              <p>Star Watch</p>
                              <div className="cart_trash">
                                <FiChevronRight />
                              </div>
                            </div>

                          </div>
                        </div>

                      </div>

                      <p className="estimate">Estimate time 9 june</p>

                    </div>
                    <p className="Spend">
                      Spend ৳ 990 enjoy free shipping for Standard delivery
                      option
                    </p>
                  </div>
                  <div className="p-3">
                    {
                      carts.length > 0 && carts.map((item, index) => (
                        <div className="cart_items_details" key={index + 1}>
                          <CartProduct item={item} />
                        </div>
                      ))
                    }
                  </div>


                  <div className="d-flex p-2">
                    <div className="mr-3">
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

                </div>

              </div>
            </div>
            <div className="col-md-4 cart_checkout_margin">
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
      </MainLayout>
    </>
  );
}

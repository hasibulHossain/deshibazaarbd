import React, { useEffect } from "react";
import Link from "next/link";

// third party import
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FiChevronRight } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
// local import
import MainLayout from "../components/layouts/MainLayout";
import Card from "../components/Card/Card";
import SimpleBtn from "../components/master/SimpleBtn/SimpleBtn";
import Modal from "../components/master/Modal/Modal";
import RemoveCartItem from "../components/RemoveCartItem/RemoveCartItem";
import { toggleModal } from "../_redux/store/action/globalAction";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faSync, faTrash } from "@fortawesome/free-solid-svg-icons";
import { getCartsAction } from "../components/_redux/CartProduct/Action/CartAction";
import CartProduct from "../components/CartProducts/CartProduct.js/CartProduct";
import { getUserDataAction } from "../components/_redux/getUserData/Action/UserDataAction";
import { useRouter } from "next/router";
import OrderSummery from '../components/master/OrderSummery/OrderSummery'

export default function Carts() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isModalActive } = useSelector((state) => state.GlobalReducer);
  const carts = useSelector((state) => state.CartReducer.carts);
  const userData = useSelector((state) => state.UserDataReducer.userData);


  const deleteItemsHandler = () => {
    dispatch(toggleModal());
  };

  useEffect(() => {
    if (typeof window === "undefined") {
      global.window = {};
    }
    dispatch(getCartsAction());
    dispatch(getUserDataAction());
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
                <div className="card mt-3 mb-2">
                  <div className="cart_item_box_top">
                    <p>Select All (2 items)</p>
                    <div className="carts_delete" onClick={deleteItemsHandler}>
                      <FontAwesomeIcon className="cart_trash" icon={faTrash} />
                      <p>Delete</p>
                    </div>
                  </div>

                  {
                    carts.length > 0 && carts.map((item, index) => (
                      <>
                        <div className="cart_items_by_shop" key={index}>
                          <div className="cart_item_box_top_1">
                            <div>
                              <div className="cart_shop_name d-flex">
                                <input className="cart-checkbox" type="checkbox" />
                                <div className="ml-2">
                                  <div className="cart_details_body">
                                    <p>{item.sellerName}</p>
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
                            item.data.length > 0 && item.data.map((cart, keyValue) => (
                              <div className="cart_items_details" key={keyValue + 1}>
                                <CartProduct cart={cart} />
                              </div>
                            ))
                          }
                        </div>
                      </>
                    ))
                  }


                  <div className="d-flex p-2">
                    <div className="mr-3">
                      <SimpleBtn
                        variant="danger"
                        onClick={() => console.log("update cart btn clicked")}
                      >
                        <FontAwesomeIcon className="mr-2" icon={faSync} />
                        UPDATE CART
                      </SimpleBtn>
                    </div>
                    <div>
                      <Link href="/products">
                        <a href="">
                          <SimpleBtn
                            variant="success"
                            onClick={() =>
                              console.log("continue shoping btn clicked")
                            }
                          >
                            <FontAwesomeIcon className="mr-2" icon={faShoppingBag} />
                            CONTINUE SHOPPING
                          </SimpleBtn>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 cart_checkout_margin">
              <OrderSummery handleClick={placeOrder} buttonText="PROCESS TO CHECKOUT" />
            </div>

          </div>



        </div>
      </MainLayout>
    </>
  );
}

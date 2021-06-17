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
import { faShoppingBag, faSync, faTrash } from "@fortawesome/free-solid-svg-icons";
import { getCartsAction, handleApplyCouponCode, handleChangeCouponInput, handleShippingCost } from "../components/_redux/CartProduct/Action/CartAction";
import CartProduct from "../components/CartProducts/CartProduct.js/CartProduct";
import { getUserDataAction } from "../components/_redux/getUserData/Action/UserDataAction";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import ErrorMessage from '../components/master/ErrorMessage/ErrorMessage'
export default function Carts() {
  const router = useRouter();
  const dispatch = useDispatch();

  const { register, handleSubmit, watch, errors } = useForm();

  const { isModalActive } = useSelector((state) => state.GlobalReducer);
  const carts = useSelector((state) => state.CartReducer.carts);
  const totalPrice = useSelector((state) => state.CartReducer.totalPrice);
  const totalQuantity = useSelector((state) => state.CartReducer.totalQuantity);
  const userData = useSelector((state) => state.UserDataReducer.userData);
  const coupon = useSelector((state) => state.CartReducer.coupon);
  const couponLoading = useSelector((state) => state.CartReducer.couponLoading);
  const couponData = useSelector((state) => state.CartReducer.couponData);
  const shippingCost = useSelector((state) => state.CartReducer.shippingCost);
  const shippingCostLoading = useSelector((state) => state.CartReducer.shippingCostLoading);

  const deleteItemsHandler = () => {
    dispatch(toggleModal());
  };

  useEffect(() => {
    if (typeof window === "undefined") {
      global.window = {};
    }
    dispatch(getCartsAction());
    dispatch(getUserDataAction());
    dispatch(handleShippingCost(carts))


  }, []);


  const handleChangeCouponCode = (name, value) => {
    dispatch(handleChangeCouponInput(name, value))
  }
  const onSubmit = () => {
    dispatch(handleApplyCouponCode(coupon, carts))
  };
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
                        isDisabled={false}
                      >
                        <FontAwesomeIcon className="mr-2" icon={faSync} />
                        UPDATE CART
                      </SimpleBtn>
                    </div>
                    <div>
                      <SimpleBtn
                        variant="success"
                        onClick={() =>
                          console.log("continue shoping btn clicked")}
                        isDisabled={false}
                      >
                        <FontAwesomeIcon className="mr-2" icon={faShoppingBag} />
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
                        <p>Sub Total({carts.length} items)</p>
                        <p>TK {totalPrice} BDT</p>
                      </div>
                      <div className="cart__right-order_details_item">
                        <p>Delivery Fee</p>
                        <p>TK 50.00 BDT</p>
                      </div>
                      <div className="cart__right-order_details_item">
                        <p>Shipping Cost</p>
                        {
                          !shippingCostLoading && (
                            <p>TK {shippingCost} BDT</p>
                          )
                        }
                        {
                          shippingCostLoading && (
                            <p>
                              <div class="spinner-border" role="status">
                                <span class="sr-only">Loading...</span>
                              </div>
                            </p>
                          )
                        }
                      </div>
                      <div className="cart__right-order_details_item">
                        <p> Discount</p>
                        <p>TK  {couponData && couponData.discount_amount ? couponData.discount_amount : 0} BDT</p>
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
                        {/* <SimpleInput placeholder="Discount Code" /> */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <div className="d-flex justify-content-between">
                            <input
                              className="form-control mr-1"
                              name="code"
                              autoComplete="off"
                              placeholder="Discount code"
                              value={coupon.code && coupon.code}
                              onChange={(e) => handleChangeCouponCode("code", e.target.value)}
                              ref={register({ required: true })} /> <br />
                            {
                              !couponLoading && (
                                <button className="btn btn-success ml-2" type="submit"> APPLY </button>
                              )
                            }

                            {couponLoading && (
                              <button disabled={true} className="btn btn-success d-flex">
                                <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span> APPLY
                              </button>
                            )}
                          </div>
                          <p> {errors.code ?
                            <ErrorMessage errorText="Please insert your coupon code if you have." />
                            :
                            (couponData && !couponData.errors && couponData.message ? (
                              <p className="text-success font-weight-bold mt-2">{couponData.message}</p>
                              // <ErrorMessage text={couponData.message} />
                            ) : couponData && couponData.errors && (
                              // <p className="text-danger font-weight-bold mt-2"></p>
                              <ErrorMessage errorText={couponData.errors.message} />
                            )
                            )
                          }</p>
                        </form> <hr />
                      </div>
                      {/* <div>
                        <SimpleBtn variant="success">Apply</SimpleBtn>
                      </div> */}
                    </div>
                    <div className="cart__proceed-btn">
                      <SimpleBtn variant="danger" onClick={() => placeOrder()} isDisabled={carts.length === 0 ? true : false}>
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

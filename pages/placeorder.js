import React, { useEffect } from "react";
import MainLayout from "../components/layouts/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getCartsAction, handleApplyCouponCode, handleChangeCouponInput, handleShippingCost } from "../store/actions/orders/CartAction";
import { orderInputChange, storeSells } from "../store/actions/orders/OrderAction";
import AddressForm from '../components/shipping-billing/AddressForm';
import SidebarShippingBilling from '../components/shipping-billing/SidebarShippingBilling';
import LoadingSpinner from '../components/loading/LoadingSpinner';
import { useForm } from "react-hook-form";
import { Table } from "react-bootstrap";
import { useRouter } from "next/router";
import { getUserDataAction } from "../components/getUserData/Action/UserDataAction";
// import { getUserDataAction } from "../../getUserData/Action/UserDataAction";

const placeorder = (props) => {
  const dispatch = useDispatch()
  const router = useRouter();
  const loading = useSelector((state) => state.cart.loading);
  const carts = useSelector((state) => state.cart.carts);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const shippingCost = useSelector((state) => state.cart.shippingCost);
  const shippingCostLoading = useSelector((state) => state.cart.shippingCostLoading);
  const orderInputData = useSelector((state) => state.OrderReducer.orderInputData);
  const placeOrder = useSelector((state) => state.OrderReducer.placeOrder);
  const isLoading = useSelector((state) => state.OrderReducer.isLoading);

  useEffect(() => {
    dispatch(getCartsAction());
    dispatch(getUserDataAction());
    dispatch(handleShippingCost(carts))
  }, []);

  const handleInputChage = (name, value, e) => {
    dispatch(orderInputChange(name, value))
  }

  const placeOrderSubmit = (e) => {
    dispatch(storeSells(orderInputData, carts, totalQuantity, shippingCost, totalPrice));
    router.push('/checkout-payment')
  }

  const { register, handleSubmit, watch, errors } = useForm();
  const coupon = useSelector((state) => state.cart.coupon);
  const userData = useSelector((state) => state.UserDataReducer.userData)
  const couponLoading = useSelector((state) => state.cart.couponLoading);
  const couponData = useSelector((state) => state.cart.couponData);

  const handleChangeCouponCode = (name, value) => {
    dispatch(handleChangeCouponInput(name, value))
  }

  const onSubmit = () => {
    dispatch(handleApplyCouponCode(coupon, carts))
  };

  const withoutDiscount = totalPrice + shippingCost;

  useEffect(() => {
    // if (userData !== null) {
    //   router.push('/placeorder')
    // } else if (userData === null) {
    //   router.push('/login')
    // }
  }, []);

  return (
    <>
      <MainLayout>
        <div className="checkout-page pb bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 bg-white mt-4">
                {
                  carts.length > 0 && (
                    <>
                      <table className="table">
                        <thead>
                          <tr>
                            <th>&nbsp; &nbsp; &nbsp; &nbsp; Product </th>
                            <th className="text-center">Price</th>
                            <th className="text-center">Quantity</th>
                          </tr>
                        </thead>
                        <tbody>
                          {carts.map((item, index) => (
                            <tr className="bg-white" key={index}>
                              <td>
                                <div>
                                  <div className="float-left">
                                    <img className="placeOrder-img p-2" src={item.productImage} alt="product image" />
                                  </div>
                                  <div className="float-left ml-3">
                                    <h6>{item.productName}</h6>
                                    {
                                      item.seller_name !== null &&
                                      <h6 className="text-secondary">Seller: {item.seller_name}</h6>
                                    }
                                  </div>
                                  <div className="clearfix"></div>
                                </div>
                              </td>
                              <td className="text-center"> ৳ {item.offerPrice !== null && item.offerPrice !== 0 && item.price !== "" ? item.offerPrice : item.price}</td>
                              <td className="text-center">{item.quantity}</td>
                            </tr>
                          )
                          )}
                        </tbody>
                      </table>
                    </>
                  )
                }

                <div className="clearfix"></div>
                <button className="btn btn-primary btn-sm float-right mt-3 backCartbtn">
                  <i className="fa fa-arrow-left"></i> {' '}
                  Back to Cart
                </button>
              </div>

              <div className="col-lg-4 mt-4">

                <div className="placeOrderSummery bg-white p-3 py-2 px-3 mb-2">
                  <SidebarShippingBilling />

                  <div className="placeOrder">
                    <h4>Order Summery</h4>
                    <div className="d-flex justify-content-between ecom-label">
                      <p>Price (0 items)</p>
                      <p>৳ {totalPrice}</p>
                    </div>
                    <div className="d-flex justify-content-between ecom-label">
                      <p>Number of Items</p>
                      <p> {totalQuantity}</p>
                    </div>
                    <div className="d-flex justify-content-between ecom-label">
                      <p>Shipping cost </p>
                      <p> ৳ {shippingCost} </p>
                      {
                        shippingCostLoading && (
                          <p>
                            <LoadingSpinner />
                          </p>
                        )
                      }
                    </div>
                    <div className="d-flex justify-content-between ecom-label">
                      <p>Discount</p>
                      <p> ৳ {couponData && couponData.discount_amount ? couponData.discount_amount : 0} </p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="d-flex justify-content-between">
                        <input
                          className="form-control mr-1"
                          name="code"
                          autoComplete="off"
                          placeholder="Your Coupon Code"
                          value={coupon.code && coupon.code}
                          onChange={(e) => handleChangeCouponCode("code", e.target.value)}
                          ref={register({ required: true })} /> <br />
                        {
                          !couponLoading && (
                            <button className="btn btn-primary" type="submit"> APPLY </button>
                          )
                        }

                        {couponLoading && (
                          <button disabled={true} className="btn btn-primary d-flex">
                            <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span> APPLY
                          </button>
                        )}
                      </div>
                      <p> {errors.code ?
                        <span className="text-danger font-weight-bold mt-2">Please insert your coupon code if you have. </span> :
                        (couponData && !couponData.errors && couponData.message ? (
                          <p className="text-success font-weight-bold mt-2">{couponData.message}</p>
                        ) : couponData && couponData.errors && (
                          <p className="text-danger font-weight-bold mt-2">{couponData.errors.message}</p>
                        )
                        )
                      }</p>
                    </form> <hr />
                    <div className="d-flex justify-content-between">
                      <p>Total Price</p>
                      <p>৳ {couponData && couponData.discount_amount ? (withoutDiscount - couponData.discount_amount) : withoutDiscount}</p>
                    </div>
                  </div>


                  <div className="clearfix"></div>
                  <div className="proceedBtn">
                    {
                      !isLoading && (
                        <button
                          className="btn btn-warning text-white pb-2"
                          disabled={(orderInputData.Receiveremail !== '' && orderInputData.contactNumber !== '' && orderInputData.shipping_details !== '' && carts.length > 0) ? false : true}
                          onClick={(e) => placeOrderSubmit()}>
                          PROCEED
                        </button>
                      )
                    }
                    {
                      isLoading && (
                        <button
                          className="btn btn-warning text-white pb-2"
                          disabled={true}>
                          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Processing...
                        </button>
                      )
                    }

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default placeorder;

import React, { useEffect, useState } from "react";
import NumericInput from "react-numeric-input";
import CancelIcon from "@material-ui/icons/Cancel";
import MainLayout from "../components/layouts/Layout";
import { Checkbox } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getCartsAction, handleApplyCouponCode, handleChangeCouponInput } from "../store/actions/orders/CartAction";
import { getOrderInfo, orderInputChange, storeSells } from "../store/actions/orders/OrderAction";
import { toast } from "react-toastify";
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
  const orderInputData = useSelector((state) => state.OrderReducer.orderInputData);
  const placeOrder = useSelector((state) => state.OrderReducer.placeOrder);
  const isLoading = useSelector((state) => state.OrderReducer.isLoading);

  useEffect(() => {
    dispatch(getCartsAction());
    dispatch(getUserDataAction());

  }, []);
  const userData = useSelector((state) => state.UserDataReducer.userData)

  console.log(`userData`, userData)
  const handleInputChage = (name, value, e) => {
    dispatch(orderInputChange(name, value))
  }
  const placeOrderSubmit = (e) => {
    dispatch(storeSells(orderInputData, carts, totalQuantity, shippingCost, totalPrice));
    router.push('/checkout-payment')
  }

  const { register, handleSubmit, watch, errors } = useForm();
  const coupon = useSelector((state) => state.cart.coupon);
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
    if (userData !== null) {
      router.push('/placeorder')
    } else if (userData === null) {
      router.push('/login')
    }
  }, []);

  return (
    <>
      <MainLayout>
        <div className="homebanner pb bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="card mt-5">
                  <div className="card-body">
                    <h5 className="card-title">Shipping Address</h5>
                    <form onSubmit={(e) => placeOrderSubmit(e)} autoComplete="off">
                      <div className="row">
                        <div className="col">
                          <label>Email</label>
                          <input
                            type="text"
                            className="form-control"
                            name="Receiveremail"
                            value={orderInputData.Receiveremail}
                            onChange={(e) => handleInputChage('Receiveremail', e.target.value)}
                            placeholder="Enter your or Receiver name"
                          />
                        </div>
                        <div className="col">
                          <label>Contact Number</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Contact Number"
                            name="contactNumber"
                            value={orderInputData.contactNumber}
                            onChange={(e) => handleInputChage('contactNumber', e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="row mt-3 mb-3">
                        <div className="col">
                          <label>Shipping address</label>
                          <textarea
                            className="form-control"
                            placeholder="Type your full address"
                            name="shipping_details"
                            value={orderInputData.shipping_details}
                            onChange={(e) => handleInputChage('shipping_details', e.target.value)}
                          ></textarea>
                        </div>
                        <div className="col">
                          <label>Email</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your email address (optional)"
                            name="optionaEmail"
                            value={orderInputData.optionaEmail}
                            onChange={(e) => handleInputChage('optionaEmail', e.target.value)}
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                {
                  carts.length > 0 && (
                    <>
                      <div className="shippmentDetails">
                        <div className="shippmentDetailsHeader mt-3 mb-3">
                          <h1>Shipment Details</h1>
                        </div>


                        {/* <div className="shippmentDetailsTitle">
                          <h3 className="d-inline item">Items</h3>
                          <h3 className="d-inline qty">Qty</h3>
                          <h3 className="d-inline unitPrice">Unite price</h3>
                          <h3 className="d-inline">Subtotal</h3>
                        </div> */}
                      </div>
                      <div className="clearfix"></div>
                      <Table>
                        <thead className="custome-background">
                          <tr>
                            <th> Product </th>
                            <th> Product Name</th>
                            <th>Qty</th>
                            <th>Unite price</th>
                            <th>Subtotal</th>
                          </tr>
                        </thead>
                        <tbody>
                          {carts.map((item, index) => (
                            <tr className="bg-white">
                              <td>
                                <img className="placeOrder-img p-2" src={item.productImage} alt="product image" />
                              </td>
                              <td>
                                <h5>{item.productName}</h5>
                                <h6 className="text-danger">Seller: {item.business.businessName}</h6>
                              </td>
                              <td>{item.quantity}</td>
                              <td> ৳ {item.offerPrice !== null && item.offerPrice !== 0 && item.price !== "" ? item.offerPrice : item.price}</td>
                              <td>৳ {item.offerPrice !== null && item.offerPrice !== 0 && item.price !== "" ? item.quantity * item.offerPrice : item.quantity * item.price}</td>
                            </tr>
                          )
                          )}
                        </tbody>
                      </Table>

                      {/* <div className="item-quantity">
                        {carts.map((item, index) => (
                          <div className="innerwishlist bg-white">
                            <div className="wishsingleproduct shippingImg">
                              <img className="img-fluid w-75 p-3" src={item.productImage} alt="product image" />
                            </div>
                            <div className="shippmentBoxText pt-3">
                              <h1>{item.productName}</h1>
                              <h5 className="text-danger">Seller: Seller shop name</h5>
                            </div>
                            <div className="wishsingleproductIcon">
                              <p>{item.quantity}</p>
                            </div>
                            <div className="wishsingleproductIcon">
                              <p>৳ {item.offerPrice !== null && item.offerPrice !== 0 && item.price !== "" ? item.offerPrice : item.price}</p>
                            </div>
                            <div className="wishsingleproductIcon">
                              <p>৳ {item.offerPrice !== null && item.offerPrice !== 0 && item.price !== "" ? item.quantity * item.offerPrice : item.quantity * item.price}</p>
                            </div>
                          </div>
                        ))
                        }
                      </div> */}
                    </>
                  )
                }

                <div className="clearfix"></div>
                <button className="btn btn-primary float-right mt-3 backCartbtn">
                  Back to Cart
                  </button>
              </div>

              <div className="col-lg-4">
                <div className="promocodesection priceDetailsHeading py-2 px-3 mt-5 mb-2">
                  <h1>Price Detail</h1>
                </div>
                <div className="placeOrderSummery bg-white p-3">

                  <div className="placeOrder">
                    <div className="d-flex justify-content-between">
                      <p>Price (0 items)</p>
                      <p>৳ {totalPrice}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p>Number of Items</p>
                      <p> {totalQuantity}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p>Shipping cost </p>
                      <p> ৳ {shippingCost} </p>
                    </div>
                    <div className="d-flex justify-content-between">
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
                            <span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span> APPLY
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
                      {/* {
                          couponData && !couponData.errors && couponData.message && (
                            <p className="text-success">{couponData.message}</p>
                          )
                        } */}
                      {/* {
                          couponData && couponData.errors && (
                            <p className="text-danger">{couponData.errors.message}</p>
                          )
                        } */}
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
                          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Processing...
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

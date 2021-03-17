import React, { Component, useState, useEffect } from "react";
// import NumericInput from "react-numeric-input";
// import CancelIcon from "@material-ui/icons/Cancel";
// import { Checkbox } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useDispatch, useSelector } from "react-redux";
import LoadingSkelleton from "../../../master/skelleton/LoadingSkelleton";
import {
  deleteCartItemAction,
  getCartsAction,
  handleChangeCouponInput,
  updateCartQtyAction,
  handleApplyCouponCode,
} from "../../../../store/actions/orders/CartAction";
import NumericInput from "react-numeric-input";
import AddIcon from "@material-ui/icons/Add";
import { Remove } from "@material-ui/icons";
import Link from "next/link";
import { FaTrash } from "react-icons/fa";
import { Button } from "@material-ui/core";
import ReactImageFallback from "react-image-fallback";
import { useForm } from "react-hook-form";

const MyCart = ({ router }, props) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.cart.loading);
  const carts = useSelector((state) => state.cart.carts);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const coupon = useSelector((state) => state.cart.coupon);
  const couponLoading = useSelector((state) => state.cart.couponLoading);
  const couponData = useSelector((state) => state.cart.couponData);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(getCartsAction());
  }, []);

  // increase quantity 
  const increaseQuantity = (id, quantity) => {
    carts.find((item) => item.productID === id && setQuantity((item.quantity += 1)));
    dispatch(updateCartQtyAction(id, (quantity += 1)));
  };
  //decrease quantity
  const decrementQunatity = (id, quantity) => {
    carts.find((item) => item.productID === id && item.quantity > 1 && setQuantity((item.quantity -= 1)))
    if (quantity > 1) {
      dispatch(updateCartQtyAction(id, (quantity -= 1)));
    }
  };

  //delete cart products
  const deleteCartProduct = (id) => {
    dispatch(deleteCartItemAction(id))
  }

  //=================coupon code apply==========================
  const { register, handleSubmit, watch, errors } = useForm();

  const handleChangeCouponCode = (name, value) => {
    dispatch(handleChangeCouponInput(name, value))
  }
  console.log(`couponData in main page`, couponData)

  const onSubmit = () => {
    dispatch(handleApplyCouponCode(coupon, carts))
  };

  return (
    <>
      <div className="wishbanner pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="wishlisttitle">
                <h1>My Cart</h1>
              </div>

              {/* {!loading && carts.map.length === 0 && (
                <div>No Cart Found !!</div>
              )} */}

              {loading && (
                <LoadingSkelleton
                  alignment="vertical"
                  count={1}
                  width={730}
                  height={200}
                />
              )}

              {carts.map((item) => (
                <div className="mt-2 p-3">
                  <div className="innerwishlist productorderdetailsbox cartlistsection">
                    <div className="singleorderproduct">
                      <img
                        className="img-fluid w-75 m-2"
                        src={item.productImage ? item.productImage : "../../../../public/images/default/fallback-image.png"}
                      />
                    </div>
                    <div className="wishsingleproductText mycarttext">
                      <h1>{item.productName}</h1>
                      <h2>Seller: Shop no</h2>
                      <div className="row">
                        <h4 >
                          {
                            item.offerPrice !== null ? (
                              <del> {item.price} </del>) :
                              <>৳ {item.price}</>
                          }
                        </h4>
                        {
                          item.offerPrice !== null && (
                            <h4 className="ml-5 text-dark">{item.offerPrice}</h4>
                          )}

                      </div>
                      <h2>
                        Quantity:
                        <div className="cart-quantity-area">
                          <button
                            className="btn btn-light quantity-btn decrement bg-light text-dark"
                            onClick={(id, quantity) =>
                              decrementQunatity(item.productID, item.quantity)
                            }
                          >
                            {" "}
                            <Remove />
                          </button>
                          <span className="colorType rounded text-dark">
                            {item.quantity}
                          </span>
                          <button
                            className="btn btn-light quantity-btn  increment bg-light text-dark ml-2"
                            onClick={(id, quantity) =>
                              increaseQuantity(item.productID, item.quantity)
                            }
                          >
                            <AddIcon />
                          </button>
                        </div>
                      </h2>
                    </div>
                    {/* <div className="mycartquantity">
                        <NumericInput mobile className="form-control" />
                      </div> */}

                    <div style={{ cursor: 'pointer' }} className="orderquantity mycarttext cursor-pointer" onClick={(id) => deleteCartProduct(item.productID)}>
                      <FaTrash />
                    </div>
                    <div className="mycartquantity one cursor-pointer">
                      <FavoriteIcon />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-lg-4">
              <div className="wishlisttitle">
                <h1>Price Details</h1>
              </div>

              <div className="promocodesection mt-4">
                <div className="promotionsummery one">
                  <div className="orderProductDetails cartline">
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
                        <p>Shipping Fee </p>
                        <p> ৳ 0 </p>
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
                        <p>৳ {couponData && couponData.discount_amount ? (totalPrice - couponData.discount_amount) : totalPrice}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mycartplace" disabled={true}>
                    <Link href="placeorder"><button className="btn" disabled={carts.length === 0 ? true : false}>PLACE ORDER</button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCart;

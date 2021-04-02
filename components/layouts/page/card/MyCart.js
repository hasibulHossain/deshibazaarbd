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
import { useRouter } from "next/router";
import { getUserDataAction } from "../../../getUserData/Action/UserDataAction";

const MyCart = (props) => {
  const dispatch = useDispatch();
  const router = useRouter()
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
    dispatch(getUserDataAction());

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

  const userData = useSelector((state) => state.UserDataReducer.userData)
  const placeOrder = () => {
    if (userData !== null) {
      router.push('/placeorder')
    } else if (userData === null) {
      router.push('/login')
    }
  }
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

              {carts.map((item, index) => (
                <div className="mt-2">
                  <div className="card" key={index + 1}>
                    <div className="row">
                      <div className="col-3">
                        <img
                          className="img-fluid m-2"
                          src={item.productImage ? item.productImage : "../../../../public/images/default/fallback-image.png"}
                        />
                      </div>
                      <div className="col-7">
                        <div className="m-2 cart-item">
                          <h5>{item.productName}</h5>
                          <h6>Seller: {item.business.businessName}</h6>
                          <div className="row">
                            <h5 className="ml-2">
                              {
                                item.offerPrice !== null && item.offerPrice !== 0 ? (
                                  <del className="text-danger"> {item.price} </del>) :
                                  <>৳ {item.price}</>
                              }
                            </h5>
                            {
                              item.offerPrice !== null && item.offerPrice !== 0 && (
                                <h4 className="ml-5 text-dark">{item.offerPrice}</h4>
                              )}

                          </div>
                          <h5>
                             <div className="cart-quantity-area">
                              <button
                                className={ item.quantity > 1 ? `btn btn-light quantity-btn bg-light text-dark` : `btn btn-light quantity-btn decrement bg-light text-dark`}
                                onClick={(id, quantity) =>
                                  decrementQunatity(item.productID, item.quantity)
                                }
                                disabled={item.quantity > 1 ? false : true}
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
                          </h5>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="pointer custom-quantity m-3" onClick={(id) => deleteCartProduct(item.productID)}>
                          <FaTrash />
                        </div>
                      </div>
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
                      <hr />
                      <div className="d-flex justify-content-between">
                        <p>Total Price</p>
                        <p>৳ {totalPrice}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mycartplace" disabled={true}>
                    <button onClick={() => placeOrder()}><button className="btn" disabled={carts.length === 0 ? true : false}>PLACE ORDER</button></button>
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

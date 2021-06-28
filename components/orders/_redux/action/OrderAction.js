import Axios from "axios";
import * as Types from "../types/Types";

//  ===================================handle coupon action==================================
export const handleChangeCouponInput = (name, value) => (dispatch) => {
  const couponData = {
    name: name,
    value: value,
  };
  dispatch({ type: Types.CHANGE_COUPON_INPUT_DATA, payload: couponData });
};

export const handleApplyCouponCode = (coupon, carts) => (dispatch) => {
  let responseData = {
    status: false,
    message: "",
    errorMessage: "",
    couponData: {},
    couponLoading: true,
    returnData: "",
  };
  dispatch({ type: Types.APPLY_COUPON_CODE, payload: responseData });

  const newCoupon = {
    code: coupon.code,
    carts: carts,
  };
  Axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}coupons/check-by/code`,
    newCoupon
  )
    .then((res) => {
      if (res.data.status) {
        let data = res.data;
        responseData.message = data.message;
        responseData.status = data.status;
        responseData.couponData = data.data;
        responseData.couponLoading = false;
        dispatch({ type: Types.APPLY_COUPON_CODE, payload: responseData });
      }
    })
    .catch((err) => {
      const { response } = err;
      const { request, ...errorObject } = response;
      responseData.couponLoading = false;
      (responseData.couponData = response.data),
        dispatch({ type: Types.APPLY_COUPON_CODE, payload: responseData });
    });
};

//handle change shipping cost =================================
export const handleShippingCost = (carts) => (dispatch) => {
  let responseData = {
    status: false,
    message: "",
    errorMessage: "",
    shipping: 0,
    shippingCostLoading: true,
    returnData: "",
  };
  dispatch({ type: Types.APPLY_SHIPPING_COST, payload: responseData });

  const shippingCost = {
    carts: carts,
  };
  Axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}sales/shipping-cost/by-cart`,
    shippingCost
  )
    .then((res) => {
      if (res.data.status) {
        let data = res.data;
        responseData.message = data.message;
        responseData.status = data.status;
        responseData.shipping = data.data;
        responseData.shippingCostLoading = false;
        dispatch({ type: Types.APPLY_SHIPPING_COST, payload: responseData });
      }
    })
    .catch((err) => {
      const { response } = err;
      const { request, ...errorObject } = response;
      responseData.shippingCostLoading = false;
      (responseData.shipping = response.data),
        dispatch({ type: Types.APPLY_SHIPPING_COST, payload: responseData });
    });
};
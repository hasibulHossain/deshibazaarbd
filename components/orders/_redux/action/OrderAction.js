import Axios from "axios";
import * as Types from "../types/Types";
import { showToast } from "../../../master/Helper/ToastHelper";

const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}`;

//  ===================================handle coupon action==================================
export const handleChangeCouponInput = (name, value) => (dispatch) => {
  const couponData = {
    name : name,
    value: value,
  };
  dispatch({ type: Types.CHANGE_COUPON_INPUT_DATA, payload: couponData });
};

export const handleApplyCouponCode = (coupon, carts) => (dispatch) => {
  let responseData = {
    status       : false,
    message      : "",
    errorMessage : "",
    couponData   : {},
    couponLoading: true,
    returnData   : "",
  };
  dispatch({ type: Types.APPLY_COUPON_CODE, payload: responseData });

  const newCoupon = {
    code: coupon.code,
    carts: carts,
  };
  Axios.post(
    `${baseUrl}coupons/check-by/code`,
    newCoupon
  )
    .then((res) => {
      if (res.data.status) {
        let data                   = res.data;
        responseData.message       = data.message;
        responseData.status        = data.status;
        responseData.couponData    = data.data;
        responseData.couponLoading = false;
        dispatch({ type: Types.APPLY_COUPON_CODE, payload: responseData });
      }
    })
    .catch((err) => {
      const { response }                = err;
      const { request, ...errorObject } = response;
      responseData.couponLoading        = false;
      (responseData.couponData = response.data),
        dispatch({ type: Types.APPLY_COUPON_CODE, payload: responseData });
    });
};

//handle change shipping cost =================================
export const handleShippingCost = (carts) => (dispatch) => {
  let responseData = {
    status             : false,
    message            : "",
    errorMessage       : "",
    shipping           : 0,
    shippingCostLoading: true,
    returnData         : "",
  };
  dispatch({ type: Types.APPLY_SHIPPING_COST, payload: responseData });

  const shippingCost = {
    carts: carts,
  };
  Axios.post(`${baseUrl}sales/shipping-cost/by-cart`, shippingCost)
    .then((res) => {
      if (res.data.status) {
        let data                         = res.data;
        responseData.message             = data.message;
        responseData.status              = data.status;
        responseData.shipping            = data.data;
        responseData.shippingCostLoading = false;
        dispatch({ type: Types.APPLY_SHIPPING_COST, payload: responseData });
      }
    })
    .catch((err) => {
      const { response }                = err;
      const { request, ...errorObject } = response;
      responseData.shippingCostLoading  = false;
      (responseData.shipping = response.data),
        dispatch({ type: Types.APPLY_SHIPPING_COST, payload: responseData });
    });
};



/**
 * Get orderList by specific user 
 * 
 * @since 1.0.0
 *  
 * @params int userID
 * @return array oderList based on user_id
 */
 export const getUserOrderList = (user_id) => (dispatch) => {
  const responseData = {
      orderList      : [],
      status         : false,
      isLoading      : true,
  }

  dispatch({ type: Types.GET_USER_ORDER_LIST, payload: responseData });

  Axios.get(`${baseUrl}sales/orders/customer`)
      .then((res) => {
          responseData.orderList = res.data.data.data;
          responseData.status    = true;
          responseData.isLoading = false;
          dispatch({ type: Types.GET_USER_ORDER_LIST, payload: responseData });
      }).catch((error) => {
          const responseLog      = error.response;
          responseData.isLoading = false;

          if (typeof responseLog !== 'undefined') {
              showToast('error', responseLog.data.message);
              dispatch({ type: Types.GET_USER_ORDER_LIST, payload: responseData });
          }
      })
}

/**
 * Get orderList filter value
 * 
 * @since 1.0.0
 * 
 * @return array filter value of order list
 */
 export const getFilterOptionDataForOrderList = (user_id) => async (dispatch) => {
  const responseData = {
      filterOptionList: [],
      status          : false,
      isLoading       : true,
  }

  dispatch({ type: Types.GET_ORDER_FILTER_OPTION_DATA, payload: responseData });

  await Axios.get(`${baseUrl}sales?business_id=${user_id}`) 
      .then((res) => {
          responseData.filterOptionList = [  // @todo this data will be change, when use real api
            { value   : 'All',           label: 'all' },
            { value   : 'last_5_orders', label: 'Last 5 Orders' },
            { value   : 'last_15_days',  label: 'Last 15 Days' },
            { value   : 'last_30_days',  label: 'Last 30 Days' },
            { value   : 'last_2_month',  label: 'Last 2 Months' },
            { value   : 'last_6_month',  label: 'Last 6 Months' },
          ]
          responseData.status    = true;
          responseData.isLoading = false;
          dispatch({ type: Types.GET_ORDER_FILTER_OPTION_DATA, payload: responseData });
      }).catch((error) => {
          const responseLog      = error.response;
          responseData.isLoading = false;

          if (typeof responseLog !== 'undefined') {
              showToast('error', responseLog.data.message);
              dispatch({ type: Types.GET_ORDER_FILTER_OPTION_DATA, payload: responseData });
              
          }
      })
}


/**
 * Get tracking process data
 * 
 * @since 1.0.0
 * 
 * @return array for tracking step timeline
 */
 export const getTrackingTimelineDate = () => async (dispatch) => {
  const responseData = {
      trackingTimelineList: [],
      status          : false,
      isLoading       : true,
  }

  dispatch({ type: Types.GET_TRACKING_TIMELINE_DATA, payload: responseData });

  await Axios.get(`${baseUrl}sales?business_id=${1}`) 
      .then((res) => {
          responseData.trackingTimelineList = [  // @todo this data will be change, when use real api
            {
              date   : "28 July, 2021",
              name   : "Your order has been received!",
            //   s   : "lorem imp ",
            //   t   : "maor k"
            },
            {
                date : "30 July, 2021",
                name : "Your order has been on processing..!",
            },
            {
                date : "01 July, 2021",
                name : "Your order has been packing..!",
            },
            {
                date : "03 July, 2021",
                name : "We handover your order on Sundar Ban courier service!",
            },
            {
                date : "04 July, 2021",
                name : "We pick up your parcel!",
            },
            {
                date : "06 July, 2021",
                name : "Your parcel is move to chittagong!",
            },
            {
                date : "08 July, 2021",
                name : "Chittagong branch receive your parcel!",
            },
            {
                date : "10 July, 2021",
                name : "Order delivered successfully!",
            },
          ]
          responseData.status    = true;
          responseData.isLoading = false;
          dispatch({ type: Types.GET_TRACKING_TIMELINE_DATA, payload: responseData });
      }).catch((error) => {
          const responseLog      = error.response;
          responseData.isLoading = false;

          if (typeof responseLog !== 'undefined') {
              showToast('error', responseLog.data.message);
              dispatch({ type: Types.GET_TRACKING_TIMELINE_DATA, payload: responseData });
              
          }
      })
}
/**
 * Cancel order
 * 
 * @since 1.0.0
 * 
 * @param id //order id
 * 
 * @return array for tracking step timeline
 */
export const handleCancelOrder = (order_id, closeModal, user_id) => (dispatch) => {
  const responseData = {
    status           : false,
    isLoading        : true
  }
  dispatch({type: Types.CANCEL_ORDER, payload: responseData});
  
  Axios.put(`${baseUrl}sales/orders/suspend/${order_id}`)
  .then((res)=>{
    if (res.data.status) {
      responseData.status    = true;
      responseData.isLoading = false;
      showToast("success", res.data.message);
      dispatch({type: Types.CANCEL_ORDER, payload: responseData});
      closeModal()
      dispatch(getFilterOptionDataForOrderList(user_id))
    }
  }).catch((err)=>{
    const { response }     = err;
    responseData.isLoading = false;
    const { request, ...errorObject } = response;
    console.log('response :>> ', response);
    dispatch({type: Types.CANCEL_ORDER, payload: responseData});

  })
}
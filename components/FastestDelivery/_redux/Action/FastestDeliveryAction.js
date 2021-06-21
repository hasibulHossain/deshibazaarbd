import Axios from "axios";
import * as Types from "../Type/Types";

const Base_Url = `${process.env.NEXT_PUBLIC_API_URL}`;
// export const getFastestDeliveryProductList = () => async (dispatch) => {

//   try {
//     dispatch({ type: Types.INIT_FASTEST_DELIVERY_PRODUCT });
//     const res = await Axios.get(url);
//     const data = res.data.data.data;
//     dispatch({
//       type: Types.GET_FASTEST_DELIVERY_PRODUCT,
//       payload: { ProductList: data },
//     });
//   } catch (error) {
// dispatch({
//   type: Types.FETCH_FASTEST_DELIVERY_PRODUCT_FAILED,
//   payload: { error: true },
// });
//   }
// };

export const getFastestDeliveryProductList = () => (dispatch) => {
  const responseList = {
    status: false,
    isLoading: true,
    data: [],
  };
  dispatch({ type: Types.GET_FASTEST_DELIVERY_PRODUCT, payload: responseList });
  Axios.get(`${Base_Url}get-items`)
    .then((res) => {
      if (res.data.status) {
        responseList.status = res.data.status;
        responseList.data = res.data.data.data;
        responseList.isLoading = false;
        dispatch({
          type: Types.GET_FASTEST_DELIVERY_PRODUCT,
          payload: responseList,
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: Types.ERROR_OCCURRED,
        payload: { error: true },
      });
    });
};

export const getFastestDeliveryProductDetails = (sku) => async (dispatch) => {
  try {
    const res = await Axios.get(`${Base_Url}get-item-detail/${sku}`);
    const data = res.data.data;
    dispatch({
      type: Types.GET_FASTEST_DELIVERY_PRODUCT_DETAILS,
      payload: { product: data },
    });
  } catch (err) {
    dispatch({ type: Types.ERROR_OCCURRED });
  }
};

export const resetFastestDeliveryProductDetails = () => {
  return {
    type: Types.RESET_FASTEST_DELIVERY_PRODUCT_DETAILS,
  };
};

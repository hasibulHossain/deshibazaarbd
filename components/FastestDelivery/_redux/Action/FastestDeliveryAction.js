import Axios from "axios";
import * as Types from "../Type/Types";

// export const getFastestDeliveryProductList = () => async (dispatch) => {
//   const url = `${process.env.NEXT_PUBLIC_API_URL}get-items`;

//   try {
//     dispatch({ type: Types.INIT_FASTEST_DELIVERY_PRODUCT });
//     const res = await Axios.get(url);
//     const data = res.data.data.data;
//     dispatch({
//       type: Types.GET_FASTEST_DELIVERY_PRODUCT,
//       payload: { ProductList: data },
//     });
//   } catch (error) {
//     dispatch({
//       type: Types.FETCH_FASTEST_DELIVERY_PRODUCT_FAILED,
//       payload: { error: true },
//     });
//   }
// };

export const getFastestDeliveryProductList = () => (dispatch) => {
  const responseList = {
    status: false,
    isLoading: true,
    data: []
  }
  dispatch({ type: Types.GET_FASTEST_DELIVERY_PRODUCT, payload: responseList });
  Axios.get(`${process.env.NEXT_PUBLIC_API_URL}get-items`)
    .then((res) => {
      if (res.data.status) {
        responseList.status = res.data.status;
        responseList.data = res.data.data.data;
        responseList.isLoading = false;
        dispatch({ type: Types.GET_FASTEST_DELIVERY_PRODUCT, payload: responseList })
      }
    })
}
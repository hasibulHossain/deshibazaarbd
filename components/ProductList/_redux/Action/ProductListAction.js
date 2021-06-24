import Axios from "axios";
import * as Types from "../Type/Types";

const Base_Url = process.env.NEXT_PUBLIC_API_URL;

export const getProductList = (productType) => (dispatch) => {
  dispatch({ type: Types.INIT_PRODUCT_LIST });

  Axios.get(`${Base_Url}get-items?type=${productType}`)
    .then((res) => {
      if (res.data.status) {
        const data = res.data.data.data;

        dispatch({
          type: Types.GET_PRODUCT_LIST_,
          payload: {
            productType: productType,
            data: data,
          },
        });
      } else {
        throw new Error("failed to fetch data");
      }
    })
    .catch((err) => {
      dispatch({
        type: Types.ERROR_OCURRED,
      });
    });
};

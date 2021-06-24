import Axios from "axios";
import * as Types from "../Type/Types";

const Base_Url = `${process.env.NEXT_PUBLIC_API_URL}`;

export const getBestSoldProductDetails = (sku) => async (dispatch) => {
  try {
    const res = await Axios.get(`${Base_Url}get-item-detail/${sku}`);
    const data = res.data.data;
    dispatch({
      type: Types.GET_BEST_SOLD_PRODUCT_DETAILS,
      payload: { product: data },
    });
  } catch (err) {
    // dispatch({ type: Types.ERROR_OCCURRED });
  }
};

export const resetBestSoldProductDetails = () => {
  return {
    type: Types.RESET_BEST_SOLD_PRODUCT_DETAILS,
  };
};

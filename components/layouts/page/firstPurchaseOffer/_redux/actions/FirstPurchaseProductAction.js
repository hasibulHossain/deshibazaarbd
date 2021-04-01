import * as Types from "../types/Types";
import axios from "axios";

export const getOfferProducts = (offerType) => async (dispatch) => {
  let payload = {
    data: [],
    loading: false,
    total: 0,
  };
  dispatch({ type: Types.GET_OFFER_PRODUCTS_LOADING, payload: payload });
  let URL = `${process.env.NEXT_PUBLIC_API_URL}offers?isPaginated=1&paginateNo=20&type=${offerType}`;

  await axios.get(URL).then((res) => {
    console.log(`res`, res)
    payload = res.data;
    payload.paginated = res.data.data;
    payload.data = res.data.data.data;
    dispatch({ type: Types.GET_FIRST_PURCHASE_PRODUCT_LIST, payload: payload });
  });
};

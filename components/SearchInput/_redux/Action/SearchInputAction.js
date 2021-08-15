import axios from "axios";
import * as Types from "../Types/Types";

export const searchProductAction = (searchKeyword) => async (dispatch) => {
  const search = searchKeyword;
  // if (search.length <= 1) return;

  const response = {
    loading: true,
    data: [],
  };

  dispatch({ type: Types.GET_SEARCHED_PRODUCT_LIST, payload: response });

  const URL = `get-items/search?search=${search}`;
  const res = await axios.get(URL);

  response.loading = false;
  response.data = res.data.data;

  dispatch({ type: Types.GET_SEARCHED_PRODUCT_LIST, payload: response });
};

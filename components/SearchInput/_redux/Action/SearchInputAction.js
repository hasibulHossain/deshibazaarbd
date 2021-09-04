import axios from "axios";
import * as Types from "../Types/Types";

export const searchProductAction = (searchKeyword, source = {token: ""}) => async (dispatch) => {
  const search = searchKeyword;
  const response = {
    loading: false,
    data: [],
  };

  const url = `get-items/search?search=${search}`;

  try {
    response.loading = true;
    dispatch({ type: Types.GET_SEARCHED_PRODUCT_LIST, payload: response });

    const res = await axios.get(url, {cancelToken: source.token});

    response.loading = false;
    response.data = res.data.data;
    dispatch({ type: Types.GET_SEARCHED_PRODUCT_LIST, payload: response });
    
  } catch (error) {
    if(axios.isCancel(error)) {
      console.log('from cancel token error handler')
    } else {
      response.loading = false;
      dispatch({ type: Types.GET_SEARCHED_PRODUCT_LIST, payload: response });
      console.log('from search catch handler => ', error)
    }
  }
};

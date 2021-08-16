import axios from "axios";
import * as types from "../types/types";

export const getStoreList = () => async (dispatch) => {
  const url = 'business';

  try {
    // initialize req
    dispatch({ type: types.INIT_STORE_LIST });
    const res = await axios.get(url);
    const res2 = await axios.get('business/2');
    console.log('res 2 => ', res2)
    const data = res.data.data.slice(0, 18)

    // successful res
    dispatch({ type: types.GET_STORE_LIST, payload: { storeList: data } });
    
  } catch (error) {
    // catch error
    dispatch({ type: types.FETCH_STORE_LIST_FAILED, payload: { error: true } });
  }
};

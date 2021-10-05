import axios from "axios";
import * as types from "../types/types";

export const getStoreList = () => async (dispatch) => {
  const url = 'business';

  try {
    // initialize req
    dispatch({ type: types.INIT_STORE_LIST });
    const res = await axios.get(url);
    const data = res.data.data

    // successful res
    dispatch({ type: types.GET_STORE_LIST, payload: { storeList: data } });
    
  } catch (error) {
    // catch error
    dispatch({ type: types.FETCH_STORE_LIST_FAILED, payload: { error: true } });
  }
};

export const getFilteredStoreList = (locations) => async (dispatch) => {
  let url = 'business?';

  for (const location in locations) {
    url = url + location + '=' + locations[location] + '&';
  }
  try {
    dispatch({type: types.INIT_STORE_LIST});
    const res = await axios.get(url);
    const data = res.data.data
    dispatch({ type: types.GET_STORE_LIST, payload: { storeList: data } });

  } catch (err) {
    console.log('err => ', err)
  }
}
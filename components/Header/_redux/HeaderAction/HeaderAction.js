import Axios from "axios";
import * as Types from "../Type/Types";

const url = `${process.env.NEXT_PUBLIC_API_URL}frontend-categories?type=navbar`;

/**
 * Get Menu List
 *
 * @since 1.0.0
 *
 * @param object dispatch
 *
 * @returns void
 */
export const getMenuListData = () => async (dispatch) => {
  try {
    dispatch({ type: Types.INIT_MENU_LIST, payload: { isLoading: true } });
    const res = await Axios.get(url);
    dispatch({ type: Types.GET_MENU_LIST, payload: { menuList: res.data.data } });
  } catch (error) {
    dispatch({ type: Types.FETCH_MENU_LIST_FAILED, payload: { error: true } });
  }
};

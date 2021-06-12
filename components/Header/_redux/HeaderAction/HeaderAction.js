import Axios from "axios";
import * as Types from "../Type/Types";

const url = "http://api.allgeneration.com/public/api/v1/frontend-categories";

export const getMenuListData = () => async (dispatch) => {
  try {
    dispatch({ type: Types.INIT_MENU_LIST, payload: { isLoading: true } });
    const res = await Axios.get(url);
    const menuList = res.data.data;
    dispatch({ type: Types.GET_MENU_LIST, payload: { menuList: menuList } });
  } catch (error) {
    dispatch({ type: Types.FETCH_MENU_LIST_FAILED, payload: { error: true } });
  }
};

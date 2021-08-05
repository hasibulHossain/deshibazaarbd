import Axios from "axios";
import * as Types from "../Type/Types";

export const getShopList = () => async (dispatch) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}brands`;

  try {
    // initialize req
    dispatch({ type: Types.INIT_SHOP_LIST });
    const res = await Axios.get(url);
    const fileteredData = res.data.data.filter(brand => (brand.slug !== 'un-categorized' && brand.slug !== 'others'));
    // successful res
    dispatch({ type: Types.GET_SHOP_LIST, payload: { ShopList: fileteredData } });
  } catch (error) {
    // catch error
    dispatch({ type: Types.FETCH_SHOP_LIST_FAILED, payload: { error: true } });
  }
};

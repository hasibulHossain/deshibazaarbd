import { TramOutlined } from "@material-ui/icons";
import * as Types from "../Type/Types";

const initialState = {
  ShopList: [],
  error: false,
  isLoading: false,
};
function ShopReducer(state = initialState, { type, payload }) {
  switch (type) {
    case Types.INIT_SHOP_LIST:
      return {
        ...state,
        isLoading: true,
      };

    case Types.GET_SHOP_LIST:
      return {
        ...state,
        ...payload,
        isLoading: false,
        error: false,
      };
    case Types.FETCH_SHOP_LIST_FAILED:
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
}
export default ShopReducer;

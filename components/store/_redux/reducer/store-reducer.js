import { TramOutlined } from "@material-ui/icons";
import * as types from "../types/types";

const initialState = {
  storeList: [],
  error: false,
  isLoading: false,
};

function storeReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.INIT_STORE_LIST:
      return {
        ...state,
        isLoading: true,
      };

    case types.GET_STORE_LIST:
      return {
        ...state,
        ...payload,
        isLoading: false,
        error: false,
      };
    case types.FETCH_STORE_LIST_FAILED:
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
}
export default storeReducer;

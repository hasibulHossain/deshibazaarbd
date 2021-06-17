import { CardActions } from "@material-ui/core";
import * as Types from "../Type/Types";

const initialState = {
  ProductList: [],
  product: null,
  error: false,
  isLoading: false,
};
const FastestDeliveryReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case Types.INIT_FASTEST_DELIVERY_PRODUCT:
      return {
        ...state,
        isLoading: true,
      };

    case Types.GET_FASTEST_DELIVERY_PRODUCT:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        ProductList: action.payload.data,
      };

    case Types.GET_FASTEST_DELIVERY_PRODUCT_DETAILS:
      return {
        ...state,
        product: action.payload.product,
      };

    case Types.RESET_FASTEST_DELIVERY_PRODUCT_DETAILS:
      return {
        ...state,
        product: null,
      };

    case Types.ERROR_OCCURRED:
      return {
        ...state,
        error: true,
        isLoading: false,
      };

    default:
      return newState;
  }
};
export default FastestDeliveryReducer;

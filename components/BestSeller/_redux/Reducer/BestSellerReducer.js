import * as Types from "../Type/Types";

const initialState = {
  product: null,
  error: false,
  isLoading: false,
};
const BestSoldProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_BEST_SOLD_PRODUCT_DETAILS:
      return {
        ...state,
        product: action.payload.product,
      };

    case Types.RESET_BEST_SOLD_PRODUCT_DETAILS:
      return {
        ...state,
        product: null,
      };

    default:
      return state;
  }
};
export default BestSoldProductReducer;

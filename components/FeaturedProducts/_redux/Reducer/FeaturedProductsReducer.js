import * as Types from "../Type/Types";

const initialState = {
  ProductList: [],
  product: null,
  error: false,
  isLoading: false,
};
function FeaturedProductsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case Types.INIT_FEATURED_PRODUCT_LIST:
      return {
        ...state,
        isLoading: true,
      };

    case Types.GET_FEATURED_PRODUCT_LIST:
      return {
        ...state,
        ProductList: payload.ProductList,
        isLoading: false,
      };

    case Types.GET_FEATURED_PRODUCT_DETAILS:
      return {
        ...state,
        product: payload.product,
      };

    case Types.RESET_FEATURED_PRODUCT_DETAILS:
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
      return state;
  }
}
export default FeaturedProductsReducer;

import * as Types from "../Type/Types";

const initialState = {
  ProductList: [],
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

    default:
      return state;
  }
}
export default FeaturedProductsReducer;

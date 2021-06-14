import * as Types from "../Type/Types";

const initialState = {
  ProductList: [],
  error: false,
  isLoading: false,
};
function ShopByCategoriesReducer(state = initialState, { type, payload }) {
  switch (type) {
    case Types.INIT_SHOP_BY_CATEGORIES_LIST:
      return {
        ...state,
        isLoading: true,
      };

    case Types.GET_SHOP_BY_CATEGORIES_LIST:
      return {
        ...state,
        ProductList: payload.ProductList,
        isLoading: false,
        error: false,
      };

    case Types.FETCH_SHOP_BY_CATEGORIES_LIST_FAILED:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
}
export default ShopByCategoriesReducer;

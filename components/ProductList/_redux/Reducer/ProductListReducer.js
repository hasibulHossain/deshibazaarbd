import * as Types from "../Type/Types";

const initialState = {
  FeaturedProductList: [],
  BestSoldProductList: [],
  HotDealsProductList: [],
  FastestDeliveryProductList: [],
  error: false,
  isLoading: false,
};
const ProductListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.INIT_PRODUCT_LIST:
      return {
        ...state,
        isLoading: true,
      };

    case Types.GET_PRODUCT_LIST_:
      const stateClone = { ...state };

      if (payload.productType === "featured") {
        stateClone.FeaturedProductList = payload.data;
      } else if (payload.productType === "best-sold") {
        stateClone.BestSoldProductList = payload.data;
      } else if (payload.productType === "hot-deal") {
        stateClone.HotDealsProductList = payload.data;
      } else if (payload.productType === "fastest-delivery") {
        stateClone.FastestDeliveryProductList = payload.data;
      }

      return {
        ...stateClone,
        isLoading: false,
        error: false,
      };

    case Types.ERROR_OCURRED:
      return {
        ...state,
        error: true,
        isLoading: false,
      };

    default:
      return state;
  }
};
export default ProductListReducer;

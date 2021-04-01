import * as Types from "../types/Types";

const initialState = {
  products: [],
  productsPaginated: null,
  loading: false,
  error: null,
};

const FirstPurchaseProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_OFFER_PRODUCTS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case Types.GET_FIRST_PURCHASE_PRODUCT_LIST:
      return {
        ...state,
        productsPaginated: action.payload.paginated,
        products: (action.payload.data !== null && typeof action.payload.data !== 'undefined') ? action.payload.data : [],
        loading: false,
      };
  
    default:
      return {
        ...state,
      };
      break;
  }
};


export default FirstPurchaseProductReducer;

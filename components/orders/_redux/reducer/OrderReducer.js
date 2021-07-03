import * as Types from "../types/Types";

const initialState = {
  loading: false,
  products: [],
  loading_add: false,
  loading_update: false,
  add_message: "",
  delete_message: "",
  error: null,
  cartProduct: {
    productID: null,
    productName: '',
    quantity: '',
    price: '',
    offerPrice: '',
    productImage: ''
  },
  // Place Order Part

  shippingCost: 0,
  shippingCostLoading: false,
  coupon: {
    code: "",
    carts: [
      {
        productID: "",
        quantity: ""
      }
    ]
  },
  couponLoading: false,
  couponData: {}
};

const OrderReducer = (state = initialState, action) => {
  switch (action.type) {

    case Types.APPLY_SHIPPING_COST:
      return {
        ...state,
        shippingCost: action.payload.shipping,
        shippingCostLoading: action.payload.shippingCostLoading
      };

    case Types.APPLY_COUPON_CODE:
      return {
        ...state,
        couponLoading: action.payload.couponLoading,
        couponData   : action.payload.couponData,
        // coupon: initialState.coupon,
      };

    default:
      return {
        ...state,
      };
  }
};

export default OrderReducer;

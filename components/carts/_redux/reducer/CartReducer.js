import { getSupplierWiseCartsData } from "../action/CartAction";
import * as Types from "../types/Types";

const initialState = {
  carts            : [],
  supplierWiseCarts: [],
  totalQuantity    : 0,
  totalPrice       : 0,
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {

    case Types.GET_CARTS:
      return {
        ...state,
        supplierWiseCarts: getSupplierWiseCartsData(action.payload),
        carts            : action.payload,
        totalQuantity    : calculateTotalQtyAndPrices(action.payload).totalQuantity,
        totalPrice       : calculateTotalQtyAndPrices(action.payload).totalPrice
      };

    default:
      return {
        ...state,
      };
  }
};

/**
 * Calculate Total Qty And Prices
 * 
 * @since 1.0.0
 * 
 * @param array carts 
 * 
 * @return object cart calculation response
 */
const calculateTotalQtyAndPrices = (carts) => {

  const response = {
    totalQuantity: 0,
    totalPrice   : 0
  }

  for (let i = 0; i < carts.length; i++) {
    response.totalQuantity += parseInt( carts[i].quantity );

    if (carts[i].isOffer !== '0' && carts[i].isOffer !== false) {
      response.totalPrice += parseFloat(carts[i].offerPrice);
    } else {
      response.totalPrice += parseFloat(carts[i].price);
    }

    response.totalPrice = response.totalPrice * parseFloat(carts[i].quantity);
  }

  return response;
};

export default CartReducer;

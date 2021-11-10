import { getSupplierWiseCartsData } from "../action/CartAction";
import * as Types from "../types/Types";

const initialState = {
  carts            : [],
  supplierWiseCarts: [],
  totalQuantity    : 0,
  totalPrice       : 0,

  checkedAllCarts  : false
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {

    case Types.GET_CARTS:
      return {
        ...state,
        supplierWiseCarts: getSupplierWiseCartsData(action.payload),
        carts            : action.payload,
        totalQuantity    : calculateTotalQtyAndPrices(action.payload).totalQuantity,
        totalPrice       : calculateTotalQtyAndPrices(action.payload).totalPrice,
        checkedAllCarts  : checkedAllCartsSelectedOrNot(action.payload)
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

  carts.forEach(cartItem => {
    if(cartItem.isChecked) {
      if(!cartItem.quantity) {
        response.totalQuantity += 1;
      } else {
        response.totalQuantity += parseInt(cartItem.quantity);
      }

      if(cartItem.isOffer && cartItem.offerPrice > 0) {
        response.totalPrice += cartItem.offerPrice * cartItem.quantity;
      } else {
        response.totalPrice += cartItem.price * cartItem.quantity;
      }
    }
  })
  return response;
};

const checkedAllCartsSelectedOrNot = (carts) => {
  return carts.every( cart => cart.isChecked === true );
}

export default CartReducer;

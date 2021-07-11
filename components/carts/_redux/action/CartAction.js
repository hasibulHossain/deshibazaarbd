import Axios from "axios";
import * as Types from "../types/Types";
import { showToast } from "../../../master/Helper/ToastHelper";

/**
 * Get all cart items Action
 * 
 * @since 1.0.0
 * 
 * @returns void Dispatch event `GET_CARTS`
 */
export const getCartsAction = () => async (dispatch) => {
  dispatch({ type: Types.GET_CARTS, payload: getCartData() });
};

/**
 * Add to cart Action
 * 
 * Handle two cases - 
 * 1) First time add to cart 
 * 2) Already added item, then again add - Update cart quantity
 * 
 * @since 1.0.0
 * 
 * @param object product 
 * @param object args Additional params when adding cart
 * 
 * @returns void Dispatch event `ADD_CART_DATA`
 */
export const addToCartAction = (product, args = {}) => async (dispatch) => {
  const carts    = getCartData();

  const quantity = typeof args['quantity'] !== 'undefined' ? args['quantity']: 1;

  // Check first if product is already added in the cart, then just update the quantity
  let isUpdateToProduct = false;

  carts.forEach( ( cart, index ) => {
    if ( cart.productID === product.id ) {
      isUpdateToProduct = true;
      cart.quantity     = cart.quantity + quantity;
      carts[index]      = cart;
    }
  });

  if ( ! isUpdateToProduct ) {
    const cartData = {
      productID   : product.id,
      productName : product.name,
      quantity    : quantity,
      isOffer     : product.is_offer_enable,
      price       : product.default_selling_price,
      offerPrice  : product.offer_selling_price,
      productImage: `${process.env.NEXT_PUBLIC_URL}images/products/${product.featured_image}`,
      sellerID    : product.seller_id,
      sellerName  : product.seller_name,
      sku         : product.sku,
      additional  : {}
    }
  
    carts.push( cartData );
  }

  localStorage.setItem( 'carts', JSON.stringify( carts ) );
  showToast('success', 'Product added to carts !')
  dispatch(getCartsAction());
};

/**
 * Update Cart Qty Action
 * 
 * @since 1.0.0
 * 
 * @param int productID 
 * @param int quantity 
 * 
 * @return void Dispatch 
 */
export const updateCartQtyAction = (productID, quantity = 1) => async (dispatch) => {
  const carts = getCartData();

  carts.forEach( ( cart, index ) => {
    if ( cart.productID === productID ) {
      cart.quantity     = quantity;
      carts[index]      = cart;
    }
  });
  
  localStorage.setItem( 'carts', JSON.stringify( carts ) );
  showToast('success', 'Carts Item Updated !')
  dispatch(getCartsAction());
};

/**
 * Delete carts data
 * 
 * @since 1.0.0
 * 
 * @params int productID
 * 
 * @return void Delete from localstorage by `productID`
 */
export const deleteCartItemAction = (productID) => async (dispatch) => {
  const carts = getCartData().filter(cart => cart.productID !== productID);
  localStorage.setItem("carts", JSON.stringify(carts));
  dispatch(getCartsAction());
};

/**
 * Get Supplier wise formatted carts data
 * 
 * @since 1.0.0
 * 
 * @return array Supplier Wise Carts based on `sellerID` params
 */
export const getSupplierWiseCartsData = () => {
  const data = getCartData().reduce( function ( results, cartItem ) {
      (results[cartItem.sellerID] = results[cartItem.sellerID] || []).push(cartItem);
      return results;
  }, {});

  const supplierWiseCarts = [];

  Object.keys(data).forEach(index => {
    const supplierWiseItem = data[index];

    let singleSupplierCart = {
      data      : supplierWiseItem,
      sellerID  : supplierWiseItem.length > 0 ? supplierWiseItem[0]['sellerID']  : null,
      sellerName: supplierWiseItem.length > 0 ? supplierWiseItem[0]['sellerName']: null
    };

    supplierWiseCarts.push(singleSupplierCart);
  });

  return supplierWiseCarts;
}

/**
 * Get Formatted carts data
 * 
 * @since 1.0.0
 * 
 * @returns array Formatted Carts data as array
 */
const getCartData = () => {
  const carts = localStorage.getItem("carts") || '';

  if (typeof carts !== "undefined" && carts !== null && carts !== '' ) {
    return JSON.parse(carts) || [];
  }

  return [];
}
import * as types from "../types/types";

export const toggleFloatingCart = (status = null) => {
  if (typeof status === 'undefined' || status === null) {
    return { type: types.TOGGLE_FLOATING_CART };
  }

  return {
    type   : types.TOGGLE_FLOATING_CART,
    payload: status
  };
};

export const toggleModal = () => {
  return {
    type: types.TOGGLE_MODAL,
  };
};

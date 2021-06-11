import * as types from "../types/types";

export const toggleFloatingCart = () => {
  return {
    type: types.TOGGLE_FLOATING_CART,
  };
};

export const toggleModal = () => {
  return {
    type: types.TOGGLE_MODAL,
  };
};

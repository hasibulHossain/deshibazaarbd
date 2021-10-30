import { getSession } from 'next-auth/client'
import * as types from "../types/types";

export const isSignedIn = () => async (dispatch) => {
  const session = await getSession();
  if(session && session.accessToken) {
    dispatch({type: types.IS_SIGNED_IN, payload: true})
  } else {
    dispatch({type: types.IS_SIGNED_IN, payload: false})
  }
};

export const toggleFloatingCart = (status = null) => {
  if (typeof status === "undefined" || status === null) {
    return { type: types.TOGGLE_FLOATING_CART };
  }

  return {
    type: types.TOGGLE_FLOATING_CART,
    payload: status,
  };
};

export const toggleModal = () => {
  return {
    type: types.TOGGLE_MODAL,
  };
};

export const toggleBackdrop = () => {
  return {
    type: types.TOGGLE_BACKDROP,
  };
};

export const checkIsMobileDevice = (isMobile) => {
  return {
    type: types.GET_DEVICE_INFO,
    payload: isMobile,
  };
};

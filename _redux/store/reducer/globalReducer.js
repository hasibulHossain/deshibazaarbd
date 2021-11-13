import * as types from "../types/types";
const initialState = {
  isModalActive: false,
  floatingCartVisible: false,
  backdrop: false,
  isMobile: false,
  isSignedIn  : false,
};

function GlobalReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.TOGGLE_FLOATING_CART:
      const isModalVisible =
        typeof payload !== "undefined" && typeof payload === "boolean"
          ? payload
          : !state.floatingCartVisible;

      return {
        ...state,
        backdrop: !state.backdrop,
        floatingCartVisible: isModalVisible,
      };

    case types.TOGGLE_BACKDROP:
      return {
        ...state,
        backdrop: !state.backdrop,
      };

    case types.TOGGLE_MODAL:
      return {
        ...state,
        isModalActive: !state.isModalActive,
        floatingCartVisible: false,
      };

    case types.GET_DEVICE_INFO:
      return {
        ...state,
        isMobile: payload,
      };
      
    case types.IS_SIGNED_IN:
      return {
        ...state,
        isSignedIn: payload,
      };

    default:
      return state;
  }
}

export default GlobalReducer;

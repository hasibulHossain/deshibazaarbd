import * as types from "../types/types";
const initialState = {
  isModalActive: false,
  floatingCartVisible: false,
  backdrop: false,
};

function GlobalReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.TOGGLE_FLOATING_CART:
      return {
        ...state,
        backdrop: !state.backdrop,
        floatingCartVisible: !state.floatingCartVisible,
      };

    case types.TOGGLE_MODAL:
      return {
        ...state,
        isModalActive: !state.isModalActive,
        floatingCartVisible: false,
      };

    default:
      return state;
  }
}

export default GlobalReducer;

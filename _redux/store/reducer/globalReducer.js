import * as types from "../types/types";
const initialState = {
  isModalActive: false,
  floatingCartVisible: false,
  backdrop: false,
};

function GlobalReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.TOGGLE_FLOATING_CART:
      const isModalVisible = typeof payload !== 'undefined' && typeof payload === 'boolean' ? payload : !state.floatingCartVisible;

      return {
        ...state,
        backdrop           : !state.backdrop,
        floatingCartVisible: isModalVisible,
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

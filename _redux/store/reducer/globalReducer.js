import * as types from "../types/types";
const initialState = {
  floatingCartVisible: false,
  backdrop: false,
};

function GlobalReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.TOGGLE_MODAL:
      return {
        ...state,
        backdrop: !state.backdrop,
        floatingCartVisible: !state.floatingCartVisible,
      };

    default:
      return state;
  }
}

export default GlobalReducer;

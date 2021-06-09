import * as types from "../types/types";
const initialState = {
  modalVisible: false,
  backdrop: false,
};

function GlobalReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.TOGGLE_MODAL:
      return {
        ...state,
        modalVisible: payload.modalVisible,
      };

    default:
      return state;
  }
}

export default GlobalReducer;

import * as types from "../types/types";

export const toggleModal = (value) => {
  return {
    type: types.TOGGLE_MODAL,
    payload: {
      modalVisible: value,
    },
  };
};

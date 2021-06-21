import * as Types from "../Type/Types";

const initialState = {
  menuList: [],
  isLoading: false,
  error: null,
};
function HeaderReducer(state = initialState, { type, payload }) {
  switch (type) {
    case Types.INIT_MENU_LIST:
      return {
        ...state,
        ...payload,
      };

    case Types.GET_MENU_LIST:
      return {
        ...state,
        ...payload,
        isLoading: false,
      };

    case Types.FETCH_MENU_LIST_FAILED:
      return {
        ...state,
        ...payload,
        isLoading: false,
      };

    default:
      return state;
  }
}
export default HeaderReducer;

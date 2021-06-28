import * as Types from "../types/Types";

const initialState = {
  orderList        : [],
  isLoading        : false,
};

const MyOrderReducer = (state = initialState, action) => {
  switch (action.type) {

    case Types.GET_USER_ORDER_LIST:
      return {
        ...state,
        orderList: action.payload.orderList,
        isLoading: action.payload.isLoading,
      };

    default:
      return {
        ...state,
      };
  }
};
export default MyOrderReducer;

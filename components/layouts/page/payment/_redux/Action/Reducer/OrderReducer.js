import * as Types from "../../Types/Types";

const initialState = {
    orderListData: [],
    isLoading: false
}

const MyOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_ORDER_LIST_DATA:
            return {
                ...state,
                orderListData: action.payload.orderList,
            }
        default:
            return {
                ...state,
            };
            break;
    }
};


export default MyOrderReducer;

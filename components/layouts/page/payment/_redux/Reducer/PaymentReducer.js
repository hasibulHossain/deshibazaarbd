import * as Types from "../Types/Types";

const initialState = {
    paymentList: [],
    isLoading: false
}

const PaymentReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_PAYMENT_LIST:
            return {
                ...state,
                paymentList: action.payload.paymentList,
                isLoading: action.payload.isLoading,
            }
        default:
            return {
                ...state,
            };
            break;
    }
};


export default PaymentReducer;

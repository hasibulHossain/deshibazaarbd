import * as Types from "../Types/Types";

const initialState = {
    paymentMethod: [],
    isLoading: false
}

const CheckoutPaymentReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_PAYMENT_METHOD:
            return {
                ...state,
                paymentMethod: action.payload.paymentMethod,
                isLoading: action.payload.isLoading,
            }
        default:
            return {
                ...state,
            };
            break;
    }
};


export default CheckoutPaymentReducer;

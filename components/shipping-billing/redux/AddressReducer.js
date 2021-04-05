import * as Types from './types';

const initialState = {
    loading: false,
    shippingAddress: [],
    billingAddress: []
};

const AddressReducer = (state = initialState, action) => {

    switch (action.type) {
        case Types.GET_BILLING_ADDRESS:
            return {
                ...state,
                billingAddress: action.payload,
            }

        case Types.GET_SHIPPING_ADDRESS:
            return {
                ...state,
                shippingAddress: action.payload,
            }

        case Types.LOADING_ADDRESS:
            return {
                ...state,
                loading: action.payload,
            }

        default:
            return {
                ...state,
            };
    }
}

export default AddressReducer;
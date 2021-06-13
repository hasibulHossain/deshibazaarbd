import * as Types from "./../Type/Types";

const initialState = {
    isLoading: false,
    bestSellerList: [],
    shippingAddress: [],
    billingAddress: [],

}
function ProfileAccountSettingReducer(state = initialState, action) {
    switch (action.type) {
        case Types.GET_SHIPPING_ADDRESS:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                shippingAddress: action.payload.data,
            }
        case Types.GET_BILLING_ADDRESS:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                billingAddress: action.payload.data,
            }
        default:
            break;
    }
    return state;
}
export default ProfileAccountSettingReducer;
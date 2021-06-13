import * as Types from "./../Type/Types";

const initialState = {
    isLoading: false,
    bestSellerList: [],
    shippingAddress: [],
    billingAddress: [],
    userInputData: {
        first_name: null,
        surname: null,
        last_name: null,
        email: null,
        username: null,
        phone_no: null,
        password: '123456',
        language: "en",
        avatar: null,
        banner: null,
        address: null
    },

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
        case Types.GET_USER_UPDATED_DATA:
            console.log('action.payload :>> ', action.payload);
            let getUserInput = { ...state.userInputData };
            getUserInput = action.payload;
            return {
                ...state,
                userInputData: getUserInput,
            }
        default:
            break;
    }
    return state;
}
export default ProfileAccountSettingReducer;
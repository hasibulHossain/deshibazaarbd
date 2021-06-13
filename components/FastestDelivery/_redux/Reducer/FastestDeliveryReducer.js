import * as Types from "../Type/Types";

const initialState = {
    ProductList: [],
    error: false,
    isLoading: false,

}
function FastestDeliveryReducer(state = initialState, {type, payload}) {
    switch (type) {
        case Types.INIT_FASTEST_DELIVERY_PRODUCT:
            return {
                ...state,
                isLoading: true
            }
            
        case Types.GET_FASTEST_DELIVERY_PRODUCT:
            return {
                ...state,
                ...payload,
                isLoading: false,
                error: false
            }

        case Types.GET_FASTEST_DELIVERY_PRODUCT:
            return {
                ...state,
                error: true
            }

        default:
            return state;
    }
}
export default FastestDeliveryReducer;
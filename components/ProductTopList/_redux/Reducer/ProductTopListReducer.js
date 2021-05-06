import * as Types from "../Type/Types";

const initialState = {
    isLoading: false,
    topProductList: [],

}
function ProductTopListReducer(state = initialState, action) {
    switch (action.type) {
        case Types.GET_TOP_PRODUCTS_LIST:
            return {
                isLoading: action.payload.isLoading,
                topProductList: action.payload.data,
            }
        default:
            break;
    }
    return state;
}
export default ProductTopListReducer;
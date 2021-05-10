import * as Types from "../Type/Types";

const initialState = {
    isLoading: false,
    ProductList: [],

}
function FeaturedProductsReducer(state = initialState, action) {
    switch (action.type) {
        case Types.GET_FEATURED_PRODUCT_LIST:
            return {
                isLoading: action.payload.isLoading,
                ProductList: action.payload.data,
            }
        default:
            break;
    }
    return state;
}
export default FeaturedProductsReducer;
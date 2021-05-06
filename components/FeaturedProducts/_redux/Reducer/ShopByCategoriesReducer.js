import * as Types from "../Type/Types";

const initialState = {
    isLoading: false,
    ProductList: [],

}
function ShopByCategoriesReducer(state = initialState, action) {
    switch (action.type) {
        case Types.GET_SHOP_BY_CATEGORIES_LIST:
            return {
                isLoading: action.payload.isLoading,
                ProductList: action.payload.data,
            }
        default:
            break;
    }
    return state;
}
export default ShopByCategoriesReducer;
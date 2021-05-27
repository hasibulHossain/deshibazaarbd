import * as Types from "../Type/Types";

const initialState = {
    isLoading: false,
    categoriesProductList: [],

}
function CategoryWiseProductReducer(state = initialState, action) {
    switch (action.type) {
        case Types.GET_CATEGORY_WISE_PRODUCT_LIST:
            return {
                isLoading: action.payload.isLoading,
                categoriesProductList: action.payload.data,
            }
        default:
            break;
    }
    return state;
}
export default CategoryWiseProductReducer;
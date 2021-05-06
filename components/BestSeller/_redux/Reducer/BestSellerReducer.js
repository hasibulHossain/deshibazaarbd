import * as Types from "../Type/Types";

const initialState = {
    isLoading: false,
    bestSellerList: [],

}
function BestSellerReducer(state = initialState, action) {
    switch (action.type) {
        case Types.GET_BEST_SELLER_LIST:
            return {
                isLoading: action.payload.isLoading,
                bestSellerList: action.payload.data,
            }
        default:
            break;
    }
    return state;
}
export default BestSellerReducer;
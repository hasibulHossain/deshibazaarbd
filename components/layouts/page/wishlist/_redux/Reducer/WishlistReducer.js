import * as Types from "../../Types";
import moment from "moment";
const initialState = {
    isLoading: false,
    wishList: [],
};

const WishlistReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_WISHLIST_DATA:
            return {
                ...state,
                orderInputData: orderInputData,
            };

        default:
            return {
                ...state,
            };
            break;
    }
};

export default WishlistReducer;

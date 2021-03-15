import * as Types from "../Types/Types";

// Initial state
const initialState = {
    wishList: [],
    isLoading: false,

};

const wishListReducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case Types.WISHLIST_ADDED:
            return {
                ...state,
                isLoading: action.payload.isLoading,
            }
            case Types.GET_WISHLIST_DATA:
                console.log(`action.payload`, action.payload)
                return {
                    ...state,
                    wishList: action.payload.wishList,
                    isLoading: action.payload.isLoading
                }
        default:
            break;
    }
    return newState;
};

export default wishListReducer;

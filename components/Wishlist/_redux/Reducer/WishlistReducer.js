import * as Types from "../Types/Types";
const initialState = {
    isLoading: false,
    isSubmitting: false,
    wishList: [],
    loadWishlistOnce: false,
    isAdded: false
};

const WishlistReducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case Types.WISHLIST_ADDED:
            return {
                ...state,
                isSubmitting: action.payload.isLoading,
                isAdded: true
            }
        case Types.WISHLIST_ADDED_CHANGE_STATUS:
            return {
                ...state,
                isAdded: action.payload
            }
        case Types.REMOVE_FROM_WISHLIST:
            return {
                ...state,
                isSubmitting: action.payload.isLoading,
                loadWishlistOnce: false
            }
        case Types.GET_WISHLIST_DATA:
            return {
                ...state,
                wishList: ! action.payload.isLoading ? action.payload.wishList : state.wishList,
                isLoading: action.payload.isLoading,
                loadWishlistOnce: true
            }
        case Types.GET_WISHLIST_DATA:
            return {
                ...state,
                wishList: action.payload.wishList,
                isLoading: false,
                loadWishlistOnce: true
            }
        case Types.LOADING_WISHLIST_DATA:
            return {
                ...state,
                isLoading: action.payload,
            }
        default:
            break;
    }
    return newState;
};

export default WishlistReducer;

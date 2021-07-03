import * as Types from "../types/types";
const initialState = {
    isLoading: false,
    itemList: [],
    reviewList: [],
};

const ReviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_ITEM_LIST_BY_USER:
            return {
                ...state,
                itemList: action.payload.itemList,
                isLoading: action.payload.isLoading,
            };
        case Types.GET_REVIEW_LIST_BY_USER:
            return {
                ...state,
                reviewList: action.payload.reviewList,
                isLoading: action.payload.isLoading,
            };
        default:
            return state;
    }
};


export default ReviewReducer;

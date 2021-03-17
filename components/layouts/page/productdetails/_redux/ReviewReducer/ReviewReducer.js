import * as Types from "../Types/Types";
import moment from "moment";
const initialState = {
    isLoading: false,
    itemList: []
};

const ReviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_ITEM_LIST_BY_USER:
            return {
                ...state,
                itemList: action.payload.itemList,
                isLoading: action.payload.isLoading,
            };
        default:
            return {
                ...state,
            };
            break;
    }
};


export default ReviewReducer;

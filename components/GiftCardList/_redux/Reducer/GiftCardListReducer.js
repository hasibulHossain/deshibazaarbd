import * as Types from "../Types/Types";

// Initial state
const initialState = {
    giftCardList: [],
    isLoading: false,

};

const GiftCardListReducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case Types.GET_GIFT_CARD_LIST:
            console.log(`action.payload`, action.payload)
            return {
                ...state,
                giftCardList: action.payload.giftCardList,
                isLoading: action.payload.isLoading
            }
        default:
            break;
    }
    return newState;
};

export default GiftCardListReducer;

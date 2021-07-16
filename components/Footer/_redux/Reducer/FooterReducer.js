import * as Types from "../Types/Types";
import moment from "moment";
const initialState = {
    isLoading   : false,
    isSubmitting: false,
    footerInfo  : [],
};

const FooterReducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case Types.GET_FOOTER_INFORMATION_DATA:
            return {
                ...state,
                footerInfo: action.payload,
            }
       
        default:
            break;
    }
    return newState;
};

export default FooterReducer;

import { CardActions } from "@material-ui/core";
import * as Types from "../Type/Types";

const initialState = {
    ProductList: [],
    error: false,
    isLoading: false,

}
const FastestDeliveryReducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case Types.INIT_FASTEST_DELIVERY_PRODUCT:
            return {
                ...state,
                isLoading: true
            }

        case Types.GET_FASTEST_DELIVERY_PRODUCT:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                ProductList: action.payload.data
            }



        default:
            return newState;
    }
}
export default FastestDeliveryReducer;
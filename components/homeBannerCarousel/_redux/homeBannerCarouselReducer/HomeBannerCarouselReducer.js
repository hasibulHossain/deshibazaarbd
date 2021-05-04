import * as Types from "../Type/Types";

const initialState = {
    isLoading: false,
    carouselList: [],

}
function HomeBannerCarouselReducer(state = initialState, action) {
    switch (action.type) {
        case Types.GET_BANNER_CAROUSEL_LIST:
            return {
                isLoading: action.payload.isLoading,
                carouselList: action.payload.data,
            }
        default:
            break;
    }
    return state;
}
export default HomeBannerCarouselReducer;
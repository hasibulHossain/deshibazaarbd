import * as Types from "../Type/Types";

const initialState = {
    isLoading: false,
    menuList: [],

}
function HeaderReducer(state = initialState, action) {
    switch (action.type) {
        case Types.GET_MENU_LIST:
            return {
                isLoading: action.payload.isLoading,
                menuList: action.payload.data,
            }
        default:
            break;
    }
    return state;
}
export default HeaderReducer;
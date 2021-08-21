import axios from 'axios';
import * as Types from "../Type/Types";

export const getDealFlashList = () => (dispatch) => {
    
    const data = [];
    const responseData = {
        data: data,
        status: true,
        isLoading: false,
    }
    dispatch({type: Types.GET_FLASH_DEAL_DATA, payload: responseData});
}
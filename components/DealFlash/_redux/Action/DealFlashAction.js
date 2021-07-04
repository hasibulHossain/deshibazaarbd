import Axios from 'axios';
import * as Types from "../Type/Types";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const getDealFlashList = () => (dispatch) => {
    const responseData = {
        data: [],
        status: true,
        isLoading: true,
    }
    dispatch({type: Types.GET_FLASH_DEAL_DATA, payload: responseData});
    
    Axios.get(`${baseUrl}get-items?type=deals-of-day&paginate_no=2`)
        .then(res => {
            responseData.data = res.data.data.data;
            responseData.isLoading = false;
            
            dispatch({type: Types.GET_FLASH_DEAL_DATA, payload: responseData});
        })
        .catch(err => {
            console.log('deals of the day err => ', err);
        })
}
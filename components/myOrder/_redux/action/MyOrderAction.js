import Axios from "axios";
import * as Types from "../types/Types";
import { showToast } from "../../../master/Helper/ToastHelper";

const base_url = `${process.env.NEXT_PUBLIC_API_URL}`;

/**
 * Get orderList by specific user 
 * 
 * @since 1.0.0
 * 
 * @return array oderList based on user_id
 */
export const getUserOrderList = (user_id) => async (dispatch) => {
    const responseData = {
        orderList      : [],
        status         : false,
        isLoading      : true,
    }

    dispatch({ type: Types.GET_USER_ORDER_LIST, payload: responseData });

    await Axios.get(`${base_url}sales?business_id=${user_id}`) //noted it would be change business_id to user_id
        .then((res) => {
            responseData.orderList = res.data.data.data;
            responseData.status    = true;
            responseData.isLoading = false;
            dispatch({ type: Types.GET_USER_ORDER_LIST, payload: responseData });
        }).catch((error) => {
            const responseLog      = error.response;
            responseData.isLoading = false;

            if (typeof responseLog !== 'undefined') {
                showToast('error', responseLog.data.message);
                dispatch({ type: Types.GET_USER_ORDER_LIST, payload: responseData });
                
            }
        })
}
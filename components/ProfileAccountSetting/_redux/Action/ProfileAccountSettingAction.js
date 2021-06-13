import Axios from 'axios';
import { showToast } from '../../../master/Helper/ToastHelper';
import * as Types from "../Type/Types";

//get shipping address
export const getShippingAddress = (addressType) => (dispatch) => {
    const responseData = {
        data: null,
        status: false,
        isLoading: true
    }
    dispatch({ type: Types.GET_SHIPPING_ADDRESS, payload: responseData });
    const userStorageData = JSON.parse(localStorage.getItem("loginData"));
    Axios.get(`${process.env.NEXT_PUBLIC_API_URL}address?user_id=${userStorageData.userData.id}&type=${addressType}`)
        .then((res) => {
            responseData.data = res.data.data[0];
            responseData.isLoading = false;
            responseData.status = true;
            dispatch({ type: Types.GET_SHIPPING_ADDRESS, payload: responseData });
        })
}
//get billing address
export const getBillingAddress = (addressType) => (dispatch) => {
    const responseData = {
        data: null,
        status: false,
        isLoading: true
    }
    dispatch({ type: Types.GET_BILLING_ADDRESS, payload: responseData });
    const userStorageData = JSON.parse(localStorage.getItem("loginData"));
    Axios.get(`${process.env.NEXT_PUBLIC_API_URL}address?user_id=${userStorageData.userData.id}&type=${addressType}`)
        .then((res) => {
            responseData.data = res.data.data[0];
            responseData.isLoading = false;
            responseData.status = true;
            dispatch({ type: Types.GET_BILLING_ADDRESS, payload: responseData });
        })
}

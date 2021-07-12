import Axios from 'axios';
import { showToast } from '../../../master/Helper/ToastHelper';
import { getUserDataAction } from '../../../_redux/getUserData/Action/UserDataAction';
import * as Types from "../Type/Types";

//get shipping address
export const getShippingAddress = (addressType) => (dispatch) => {
    const responseData = {
        data     : null,
        status   : false,
        isLoading: true
    }
    dispatch({ type: Types.GET_SHIPPING_ADDRESS, payload: responseData });
    const userStorageData = JSON.parse(localStorage.getItem("loginData"));
    Axios.get(`${process.env.NEXT_PUBLIC_API_URL}address?user_id=${userStorageData.userData.id}&type=${addressType}`)
        .then((res) => {
            responseData.data      = res.data.data[0];
            responseData.isLoading = false;
            responseData.status    = true;
            dispatch({ type: Types.GET_SHIPPING_ADDRESS, payload: responseData });
        })
}
//get billing address
export const getBillingAddress = (addressType) => (dispatch) => {
    const responseData = {
        data     : null,
        status   : false,
        isLoading: true
    }
    dispatch({ type: Types.GET_BILLING_ADDRESS, payload: responseData });
    const userStorageData = JSON.parse(localStorage.getItem("loginData"));
    Axios.get(`${process.env.NEXT_PUBLIC_API_URL}address?user_id=${userStorageData.userData.id}&type=${addressType}`)
        .then((res) => {
            responseData.data      = res.data.data[0];
            responseData.isLoading = false;
            responseData.status    = true;
            dispatch({ type: Types.GET_BILLING_ADDRESS, payload: responseData });
        })
}
// get user data for set input field 
export const getUserData = () => (dispatch) => {
    const userStorageData = JSON.parse(localStorage.getItem("loginData"));
    let userData = null;
    if (typeof userStorageData !== "undefined" && userStorageData !== null) {
        userData = userStorageData.userData;
    }
    dispatch({ type: Types.GET_USER_UPDATED_DATA, payload: userData })

}

//handle change user input field 
export const handleChangeUserInput = (name, value) => (dispatch) => {
    const data = {
        name : name,
        value: value
    }
    dispatch({ type: Types.CHANGE_USER_INPUT_DATA, payload: data })
}


//handle update user input 
export const handleUpdateUserData = (userInputData, user_id) => (dispatch) => {
    const response = {
        isLoading  : true,
        status     : false,
        data       : null
    }
    dispatch({ type: Types.UPDATED_USER_DATA, payload: response });
   
    Axios.put(`${process.env.NEXT_PUBLIC_API_URL}user?id=${user_id}`, userInputData)
        .then((response) => {
            if (response.data.status) {
                response.isLoading = false;
                showToast('success', response.data.message);
                dispatch(getWishListData())
                dispatch({ type: Types.UPDATED_USER_DATA, payload: responseLog });
            }
        }).catch((error) => {
            const responseLog = error.response;
            response.isLoading = false;
            if (typeof responseLog !== 'undefined') {
                const { request, ...errorObject } = responseLog;
                if (responseLog.data.message !== "") {
                    showToast('error', responseLog.data.message);
                }else{
                    showToast('error', "Sorry! Something went wrong..");
                }
                dispatch({ type: Types.UPDATED_USER_DATA, payload: responseLog })
            }
        })
}

//handle change input field 
export const handleChangeBillingAddressInput = (name, value) => (dispatch) => {
    const addressData = {
        name : name,
        value: value
    }
    dispatch({ type: Types.CHANGE_BILLING_ADDRESS_INPUT, payload: addressData })
}
//handle change input field 
export const handleChangeShippingAddressInput = (name, value) => (dispatch) => {
    const addressData = {
        name : name,
        value: value
    }
    dispatch({ type: Types.CHANGE_SHIPPING_ADDRESS_INPUT, payload: addressData })
}

// get countries list 
export const getCountry = () => (dispatch) => {
    Axios.get(`${process.env.NEXT_PUBLIC_API_URL}countries`)
        .then((res) => {
            dispatch({ type: Types.GET_COUNTRIES_LIST, payload: res.data.data });
        })
}
// get countries list 
export const getCity = (country) => (dispatch) => {
    Axios.get(`${process.env.NEXT_PUBLIC_API_URL}cities?country=${country}`)
        .then((res) => {
            dispatch({ type: Types.GET_CITIES_LIST, payload: res.data.data });
        })
}
// get countries list 
export const getArea = (cityID) => (dispatch) => {
    Axios.get(`${process.env.NEXT_PUBLIC_API_URL}areas?city=${cityID}`)
        .then((res) => {
            dispatch({ type: Types.GET_AREA_LIST, payload: res.data.data });
        })
}

//handle store shipping address
export const handleStoreShippingAddress = (shippingAddressInput) => (dispatch) => {
    const responseData = {
        status   : false,
        isLoading: true,
    }
    dispatch({ type: Types.STORE_SHIPPING_ADDRESS, payload: responseData });
    const userStorageData = JSON.parse(localStorage.getItem("loginData"));
    const submittedData   = shippingAddressInput;
    submittedData.user_id = userStorageData.userData.id;
    Axios.post(`${process.env.NEXT_PUBLIC_API_URL}address`, shippingAddressInput)
        .then((res) => {
            responseData.status    = true;
            responseData.isLoading = false;
            showToast('success', res.data.message);
            dispatch({ type: Types.STORE_SHIPPING_ADDRESS, payload: responseData });
        })

}

//handle store billing address
export const handleStoreBillingAddress = (billingAddressInput) => (dispatch) => {
    const responseData = {
        status   : false,
        isLoading: true,
    }
    dispatch({ type: Types.STORE_BILLING_ADDRESS, payload: responseData });
    const userStorageData = JSON.parse(localStorage.getItem("loginData"));
    const submittedData   = billingAddressInput;
    submittedData.user_id = userStorageData.userData.id;
    Axios.post(`${process.env.NEXT_PUBLIC_API_URL}address`, submittedData)
        .then((res) => {
            responseData.status    = true;
            responseData.isLoading = false;
            showToast('success', res.data.message);
            dispatch({ type: Types.STORE_BILLING_ADDRESS, payload: responseData });
        })

}
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


//get billing address
export const getAddress = (addressType) => (dispatch) => {
    const responseData = {
        data: null,
        status: false,
        isLoading: true
    }
    dispatch({ type: Types.GET_BILLING_ADDRESS, payload: responseData });
    const userStorageData = JSON.parse(localStorage.getItem("loginData"));
    Axios.get(`${process.env.NEXT_PUBLIC_API_URL}address?user_id=${userStorageData.userData.id}&type=${addressType}`)
    .then((res) => {
        responseData.data = res.data.data;
        responseData.isLoading = false;
        responseData.status = true;
        if(addressType === 'billing_address') {
            dispatch({ type: Types.GET_BILLING_ADDRESS, payload: responseData });
        }
        if(addressType === 'shipping_address') {
            dispatch({ type: Types.GET_SHIPPING_ADDRESS, payload: responseData });
        }
    })
}

// get single address
export const getSingleAddress = (id, type) => {
    return {
        type: Types.GET_SINGLE_ADDRESS,
        payload: {
            id: id,
            type: type
        }
    }
}
    
    
    
    
    
    


// get user data for set input field 
export const handleSetDataIntoInputField = () => (dispatch) => {
    const userStorageData = JSON.parse(localStorage.getItem("loginData"));
    dispatch({ type: Types.GET_USER_UPDATED_DATA, payload: userStorageData.userData })

}

//handle change input field 
export const handleChangeShippingAddressInput = (name, value) => (dispatch) => {
    const addressData = {
        name: name,
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
        status: false,
        isLoading: true,
    }
    dispatch({ type: Types.STORE_SHIPPING_ADDRESS, payload: responseData });
    const userStorageData = JSON.parse(localStorage.getItem("loginData"));
    const submittedData = shippingAddressInput;
    submittedData.user_id = userStorageData.userData.id;
    Axios.post(`${process.env.NEXT_PUBLIC_API_URL}address`, shippingAddressInput)
        .then((res) => {
            responseData.status = true;
            responseData.isLoading = false;
            showToast('success', res.data.message);
            dispatch({ type: Types.STORE_SHIPPING_ADDRESS, payload: responseData });
        })

}

//handle store billing address
export const handleStoreBillingAddress = (billingAddressInput) => (dispatch) => {
    const responseData = {
        status: false,
        isLoading: true,
    }
    dispatch({ type: Types.STORE_BILLING_ADDRESS, payload: responseData });
    const userStorageData = JSON.parse(localStorage.getItem("loginData"));
    const submittedData = billingAddressInput;
    submittedData.user_id = userStorageData.userData.id;
    Axios.post(`${process.env.NEXT_PUBLIC_API_URL}address`, submittedData)
        .then((res) => {
            responseData.status = true;
            responseData.isLoading = false;
            showToast('success', res.data.message);
            dispatch({ type: Types.STORE_BILLING_ADDRESS, payload: responseData });
        })

}






////////



//handle change input field 
export const handleChangeBillingAddressInput = (name, value) => (dispatch) => {
    const addressData = {
        name: name,
        value: value,
    }
    dispatch({ type: Types.CHANGE_ADDRESS_INPUT, payload: addressData })
}









//handle store billing address
export const handleUpdateBillingAddress = (billingAddressInput) => (dispatch) => {
    billingAddressInput['id'] = +billingAddressInput.id; 
    billingAddressInput['is_default'] = +billingAddressInput.is_default; 
    billingAddressInput['area_id'] = +billingAddressInput.area_id; 
    billingAddressInput['city_id'] = +billingAddressInput.city_id; 
    billingAddressInput['country_id'] = +billingAddressInput.country_id; 
    const responseData = {
        status: false,
        isLoading: true,
    }
    dispatch({ type: Types.STORE_BILLING_ADDRESS, payload: responseData });
    // const userStorageData = JSON.parse(localStorage.getItem("loginData"));
    // const submittedData = billingAddressInput;
    // submittedData.user_id = userStorageData.userData.id;

    Axios.put(`${process.env.NEXT_PUBLIC_API_URL}address`, billingAddressInput)
        .then((res) => {
            responseData.status = true;
            responseData.isLoading = false;
            showToast('success', res.data.message);
            dispatch({ type: Types.STORE_BILLING_ADDRESS, payload: responseData });
        })
        .catch(err => {
            console.log('address update err => ', err);
        })

}

//handle store billing address
export const addAddress = (billingAddressInput) => (dispatch) => {
    const responseData = {
        status: false,
        isLoading: true,
    }
    dispatch({ type: Types.STORE_BILLING_ADDRESS, payload: responseData });
    const userStorageData = JSON.parse(localStorage.getItem("loginData"));
    billingAddressInput['user_id'] = userStorageData.userData.id;

    Axios.post(`${process.env.NEXT_PUBLIC_API_URL}address`, billingAddressInput)
        .then((res) => {
            responseData.status = true;
            responseData.isLoading = false;
            showToast('success', res.data.message);
            dispatch({ type: Types.STORE_BILLING_ADDRESS, payload: responseData });
        })
        .catch(err => {
            console.log('address update err => ', err);
        })

}

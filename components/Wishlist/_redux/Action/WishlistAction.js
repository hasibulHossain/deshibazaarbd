import * as Types from "../Types/Types";
import Axios from "axios"
import { showToast } from "../../../master/Helper/ToastHelper";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export const WishListAdded = (itemID) => (dispatch) => {
    const response = {
        isLoading  : true,
        status     : false,
        data       : null
    }

    dispatch({ type: Types.WISHLIST_ADDED, payload: response });
    const postData = {
        item_id: itemID
    }
    const localStorageData = localStorage.getItem("loginData");
    
    if (typeof localStorageData === "undefined" || localStorageData === null || localStorageData === "") {
        toast.error(<p><FontAwesomeIcon icon={faTimesCircle} /> You must login or register to add items to your wishlist!</p>, {
            position : "bottom-center",
            autoClose: 5000,
            className: "wishlist_warning_alert",
        });
    } else {
        Axios.post(`wishlist`, postData)
            .then((response) => {
                if (response.data.status) {
                    response.isLoading = false;
                    showToast('success', response.data.message);
                    dispatch(getWishListData())
                    dispatch({ type: Types.WISHLIST_ADDED, payload: responseLog });
                }
            }).catch((error) => {
                const responseLog  = error.response;
                response.isLoading = false;
                if (typeof responseLog !== 'undefined') {
                    const { request, ...errorObject } = responseLog;
                    showToast('error', responseLog.data.message);
                    dispatch({ type: Types.WISHLIST_ADDED, payload: responseLog })
                }
            })
    }

}
export const removeFromWishList = (itemID) => (dispatch) => {
    const response = {
        isLoading  : true,
        status     : false,
        data       : null
    }
    dispatch({ type: Types.REMOVE_FROM_WISHLIST, payload: response });
    const postData = {
        item_id: itemID
    }

    Axios.delete(`wishlist/${itemID}`, postData)
        .then((response) => {
            if (response.data.status) {
                response.isLoading = false;
                showToast('success', response.data.message);
                dispatch(getWishListData());
                dispatch({ type: Types.REMOVE_FROM_WISHLIST, payload: responseLog });
            }
        }).catch((error) => {
            const responseLog  = error.response;
            response.isLoading = false;
            if (typeof responseLog !== 'undefined') {
                // const { request, ...errorObject } = responseLog;
                showToast('error', responseLog.data.message);
                dispatch({ type: Types.REMOVE_FROM_WISHLIST, payload: responseLog })
            }
        })
}

//get wish list
export const getWishListData = () => (dispatch) => {
    const responseList = {
        status         : false,
        isLoading      : true,
        wishList       : []
    }
    dispatch({ type: Types.GET_WISHLIST_DATA, payload: responseList });
    Axios.get(`wishlist`)
        .then((res) => {
            if (res.data.status) {
                responseList.status    = res.data.status;
                responseList.wishList  = res.data.data;
                responseList.isLoading = false;
                dispatch({ type: Types.GET_WISHLIST_DATA, payload: responseList })
            }
        })
}
import * as Types from "../Types/Types";
import Axios from "axios"
import { showToast } from "../../../master/Helper/ToastHelper";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import store from '../../../../_redux/Store';


//get wish list
export const getWishListData = () => (dispatch) => {
    const response = {
        status         : false,
        isLoading      : true,
        wishList       : []
    }
    
    // dispatch({ type: Types.GET_WISHLIST_DATA, payload: response });
  
    Axios.get('wishlist')
        .then((res) => {
            if (res.data.status) {
                response.status    = res.data.status;
                response.wishList  = res.data.data;
                response.isLoading = false;
                dispatch({ type: Types.GET_WISHLIST_DATA, payload: response })
            }
        })
        .catch(_ => {
            response.isLoading = false;
            // dispatch({ type: Types.GET_WISHLIST_DATA, payload: response })
        })
}

/**
 * This function will add wishItem or remove wishItem from wish list. and toggle wish btn color immediately.
 * @param {String | Number} itemId 
 * @param {Boolean} isWishItemFound 
 * @returns {void}
 */
export const addOrRemoveWishItem = (itemId, isWishItemFound) => async dispatch => {
    const wishList = store.getState() && store.getState().WishlistReducer && store.getState().WishlistReducer.wishList;
    
    const localStorageData = localStorage.getItem("loginData");

    if (!localStorageData) {
        toast.error(<p><FontAwesomeIcon icon={faTimesCircle} /> You must login to add items to your wishlist!</p>, {
            position : "bottom-center",
            autoClose: 3000,
            className: "wishlist_warning_alert",
        });
        return;
    }

    const postData = {
        item_id: itemId.toString()
    }

    if(!isWishItemFound) {
        dispatch({ type: Types.WISHLIST_ADDED, payload: postData.item_id });

        Axios.post(`wishlist`, postData)
        .then((_) => {
            dispatch(getWishListData());
            
            // if (response.data.status) {
            //     showToast('success', response.data.message);
            // }
        })
        .catch((error) => {
            // console.log(error);
        })
    } else {
        const wishItem = wishList.find(item => item.item_id === postData.item_id );

        if(!wishItem) return;

        dispatch({ type: Types.REMOVE_FROM_WISHLIST, payload: postData.item_id });

        Axios.delete(`wishlist/${wishItem.id}`)
        .then((_) => {
            dispatch(getWishListData());
            // if (response.data.status) {
            //     showToast('success', response.data.message);
            // }
        })
        .catch((error) => {
            // console.log(error)
        })
    }
}
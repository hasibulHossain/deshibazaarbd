import * as Types from "../types/types";
import Axios from "axios";
import { showToast } from "../../../master/Helper/ToastHelper";


export const getItemListByUser = () => (dispatch) => {
    const responseList = {
        status: false,
        isLoading: true,
        itemList: []
    }
    dispatch({ type: Types.GET_ITEM_LIST_BY_USER, payload: responseList });
    Axios.get(`${process.env.NEXT_PUBLIC_API_URL}sales/sale-items/by-user`)
        .then((res) => {
            if (res.data.status) {
                responseList.status = res.data.status;
                responseList.itemList = res.data.data;
                responseList.isLoading = false;
                dispatch({ type: Types.GET_ITEM_LIST_BY_USER, payload: responseList })
            }
        })
        .catch(err => {
            console.log('err from getItemListByUser', err)
        })
}

//Get Review List By User
export const getReviewListByUser = (itemID, userID, status) => (dispatch) => {
    const responseList = {
        status: false,
        isLoading: true,
        reviewList: []
    }
    dispatch({ type: Types.GET_REVIEW_LIST_BY_USER, payload: responseList });
    Axios.get(`${process.env.NEXT_PUBLIC_API_URL}item-review/get-by-item?item_id=${itemID}&user_id=${userID}&status=${status}`)
        .then((res) => {
            if (res.data.status) {
                responseList.status = res.data.status;
                responseList.reviewList = res.data.data;
                responseList.isLoading = false;
                dispatch({ type: Types.GET_REVIEW_LIST_BY_USER, payload: responseList })
            }
        })
        .catch(err => {
            console.log('err from get Review List by user', err)
        })
}

//handle change review item 
export const handleChangeReviewItemInput = (name, value) => (dispatch) => {
    const reviewInput = {
        name: name,
        value: value
    }
    dispatch({ type: Types.CHANGE_REVIEW_INPUT, payload: reviewInput })
}

// store review 
export const storeReviewData = (reviewStoreInput, handleClose) => (dispatch => {
    let responseData = {
        status: false,
        message: "",
        isLoading: true,
        returnData: ""
    };
    dispatch({ type: Types.STORE_REVIEW_DATA, payload: responseData });

    const { userData } = JSON.parse(localStorage.getItem('loginData'));
    const userID       = userData.id;

    Axios.post(`${process.env.NEXT_PUBLIC_API_URL}item-review/create`, reviewStoreInput)
        .then((res) => {
            if (res.data.status) {
                let data = res.data;
                responseData.message = data.message;
                responseData.status = data.status;
                responseData.isLoading = false;
                showToast('success', "your review added successfully!")
                dispatch({ type: Types.STORE_REVIEW_DATA, payload: responseData });
                dispatch(getItemListByUser());
                dispatch(getReviewListByUser(reviewStoreInput.item_id, userID));
                handleClose();
            }
        })
        .catch((err) => {
            const { response } = err;
            // const { request, ...errorObject } = response;
            responseData.isLoading = false;
            dispatch({ type: Types.STORE_REVIEW_DATA, payload: responseData });
            // handleClose();
        });
})
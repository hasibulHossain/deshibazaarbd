import * as Types from "../Types/Types";
import Axios from "axios";


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
}

//Get Review List By User
export const getReviewListByUser = () => (dispatch) => {
    const responseList = {
        status: false,
        isLoading: true,
        reviewList: []
    }
    dispatch({ type: Types.GET_REVIEW_LIST_BY_USER, payload: responseList });
    Axios.get(`${process.env.NEXT_PUBLIC_API_URL}item-review/get-by-item?item_id=0&user_id=1&status=1`)
        .then((res) => {
            console.log(`res`, res.data.data)
            if (res.data.status) {
                responseList.status = res.data.status;
                responseList.reviewList = res.data.data;
                responseList.isLoading = false;
                dispatch({ type: Types.GET_REVIEW_LIST_BY_USER, payload: responseList })
            }
        })
}
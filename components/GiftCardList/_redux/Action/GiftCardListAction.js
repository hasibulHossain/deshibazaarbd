import * as Types from "../Types/Types";
import Axios from "axios"
import { showToast } from "../../../master/Helper/ToastHelper";

//get wish list
export const getWishListData = () => (dispatch) => {
    const responseList = {
      status: false,
      isLoading: true,
      giftCardList: []
    }
    dispatch({ type: Types.GET_GIFT_CARD_LIST, payload: responseList });
    Axios.get(`${process.env.NEXT_PUBLIC_API_URL}gift-cards`)
      .then((res) => {
        if (res.data.status) {
          responseList.status = res.data.status;
          responseList.giftCardList = res.data.data;
          responseList.isLoading = false;
          dispatch({ type: Types.GET_GIFT_CARD_LIST, payload: responseList })
        }
      })
  }
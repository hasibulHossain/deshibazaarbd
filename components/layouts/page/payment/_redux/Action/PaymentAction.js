import * as Types from "../Types/Types";
import Axios from 'axios'

export const getPaymentList = () => (dispatch) => {
    const responseList = {
      status: false,
      isLoading: true,
      paymentList: []
    }
    dispatch({ type: Types.GET_PAYMENT_LIST, payload: responseList });
    Axios.get(`${process.env.NEXT_PUBLIC_API_URL}wishlist`)
      .then((res) => {
        if (res.data.status) {
          responseList.status = res.data.status;
          responseList.paymentList = res.data.data;
          responseList.isLoading = false;
          dispatch({ type: Types.GET_PAYMENT_LIST, payload: responseList })
        }
      })
  }
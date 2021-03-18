import * as Types from "../Types/Types";
import Axios from 'axios'

export const getPaymentMethodList = () => (dispatch) => {
    const responseList = {
      status: false,
      isLoading: true,
      paymentMethod: []
    }
    dispatch({ type: Types.GET_PAYMENT_METHOD, payload: responseList });
    Axios.get(`${process.env.NEXT_PUBLIC_API_URL}payments/methods/get-payment-methods`)
      .then((res) => {
        if (res.data.status) {
          responseList.status = res.data.status;
          responseList.paymentMethod = res.data.data;
          responseList.isLoading = false;
          dispatch({ type: Types.GET_PAYMENT_METHOD, payload: responseList })
        }
      })
  }
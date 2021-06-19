import Axios from "axios";
import * as Types from "../Type/Types";

//handle change input field 
export const handleChangeDeliveryInputData = (name, value) => (dispatch) => {
  const addressData = {
    name: name,
    value: value
  }
  dispatch({ type: Types.DELIVER_CUSTOMER_INPUT_CHANGE, payload: addressData })
}
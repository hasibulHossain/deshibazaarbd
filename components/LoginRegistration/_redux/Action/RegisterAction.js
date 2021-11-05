import * as Types from "./../Type/Types";
import axios from "axios";
import { showToast } from "../../../master/Helper/ToastHelper";

//handle change register input field
export const ChangeRegisterInputField = (name, value) => (dispatch) => {
  const registerData = {
    name: name,
    value: value,
  };
  dispatch({ type: Types.CHANGE_REGISTER_INPUT_FIELD, payload: registerData });
};

// handle register first step
export const RegisterFirstStep = (registerInput) => (dispatch) => {
  let response = {
    message: null,
    status: false,
    isLoading: true,
    getOTP: false,
  };
  dispatch({ type: Types.REGISTER_FIRST_STEP, payload: response });
  const URL = `auth/register`;
  try {
    axios
      .post(URL, registerInput)
      .then((res) => {
        if (res.data.status) {
          response.message = res.data.message;
          response.isLoading = false;
          response.getOTP = true;
          showToast("success", response.message);
          dispatch({ type: Types.REGISTER_FIRST_STEP, payload: response });
        }
      })
      .catch((error) => {
        const responseLog = error.response;
        response.isLoading = false;
        response.getOTP = false;
        if (typeof responseLog !== "undefined") {
          const { request, ...errorObject } = responseLog;
          dispatch({ type: Types.REGISTER_FIRST_STEP, payload: responseLog });

          if (responseLog.data.errors) {
            let errorMessage;
            if (responseLog.data.errors.phone_no !== undefined) {
              errorMessage = responseLog.data.errors.phone_no[0];
            } else if (responseLog.data.errors.email !== undefined) {
              errorMessage = responseLog.data.errors.email[0];
            }
            showToast("error", errorMessage);
          } else {
            showToast("error", responseLog.data.message);
            return;
          }
        } else {
          response.isLoading = false;
          showToast("error", "Something went wrong !");
        }
      });
  } catch (error) {
    response.isLoading = false;
    showToast("error", "Network Error, Please Fix this !");
  }
  dispatch({ type: Types.REGISTER_FIRST_STEP, payload: response });
};

// customer register step two / final
export const customerRegister = async (registerInput) => {
  try {
    const res = await axios.post(`auth/register-next`, registerInput);
    return res;
    
  } catch (error) {
    console.log(error)
    // console.log(error)
    // throw new Error(error);
      const { response } = err;
      console.log('response =>', response);
      return Promise.reject(false)
  }
};

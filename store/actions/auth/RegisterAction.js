import * as Types from "../../Types";
import * as JwtDecode from "jwt-decode";
// import { generateToken } from "../../services/token/TokenService";

import axios from "axios";
import { API_POST_REGISTER } from "../../ApiEndpoint";
import { showToast } from "../../../components/master/Helper/ToastHelper";


//handle change register input field 
export const ChangeRegisterInputField = (name, value) => (dispatch) => {
  const registerData = {
    name: name,
    value: value
  }
  dispatch({ type: Types.CHANGE_REGISTER_INPUT_FIELD, payload: registerData })
}

// handle register first step 
export const RegisterFirstStep = (registerInput, setStepNo) => (dispatch) => {
  if (registerInput.first_name.length === 0) {
    showToast('error', "First name can't be blank!")
    return false;
  }
  if (registerInput.last_name.length === 0) {
    showToast('error', "Last name can't be blank!")
    return false;
  }
  if (registerInput.phone_no === null) {
    showToast('error', "Mobile number can't be blank!")
    return false;
  }
  let response = {
    message: null,
    status: false,
    isLoading: true,
  }
  dispatch({ type: Types.REGISTER_FIRST_STEP, payload: response })
  const URL = `${process.env.NEXT_PUBLIC_API_URL}auth/register`;
  axios.post(URL, registerInput)
    .then((res) => {
      if (res.data.status) {
        response.message = res.data.message;
        response.isLoading = false;
        showToast('success', response.message);
        dispatch({ type: Types.REGISTER_FIRST_STEP, payload: response })
        setStepNo(2)
      }
    }).catch((error) => {
      const { response } = error;
      const { request, ...errorObject } = response;
      response.isLoading = false;
      dispatch({ type: Types.REGISTER_FIRST_STEP, payload: response })

      if (response.data.errors) {
        const errorMessage = response.data.errors.phone_no[0];
        showToast('error', errorMessage);
      } else {
        showToast('error', response.data.message);
        return;
      }
    })
  dispatch({ type: Types.REGISTER_FIRST_STEP, payload: response })

}

// customer register step two / final 
export const customerRegister = (registerInput) => async (dispatch) => {
  if (registerInput.otp.length === 0) {
    showToast('error', "O can't be blank!")
    return false;
  }
  if (registerInput.password.length === 0) {
    showToast('error', "Password can't be blank!")
    return false;
  }
  if (registerInput.password_confirmation.length === 0) {
    showToast('error', "Confirm password can't be blank!")
    return false;
  }
  let response = {
    message: null,
    status: false,
    data: null,
    isLoading: true,
  }
  dispatch({ type: Types.AUTH_REGISTER, payload: response })
  axios.post(`${process.env.NEXT_PUBLIC_API_URL}auth/register-next`, registerInput)
    .then((res) => {
      if (res.data.status) {
        response.message = res.data.message;
        response.data = null;
        response.isLoading = false;
        showToast('success', response.message);
        dispatch({ type: Types.AUTH_REGISTER, payload: response })
      }
    })
    .catch((err) => {
      const { response } = err;
      const { request, ...errorObject } = response;
      response.isLoading = false;
      dispatch({ type: Types.AUTH_REGISTER, payload: response })
      showToast('error', response.data.message);
    })
    dispatch({ type: Types.AUTH_REGISTER, payload: response })
}

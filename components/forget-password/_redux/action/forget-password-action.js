import { showToast } from '../../../master/Helper/ToastHelper';
import * as Types from '../types/types';

/**
 * this function will check if the user email exists on the database or not
 * 
 * @since 1.0.0
 * 
 * @returns void Dispatch event `CHECK_EMAIL_STATUS`
 */

 export const checkIsValidEmail = (email) => async (dispatch) => {
     let response = {
         loading: true,
         email: email,
         isValidEmail: false
     }

     try {
         // call api
         dispatch({type: Types.CHECK_EMAIL_STATUS, payload: response});
         response.loading = false;
         response.isValidEmail = true;
         
         setTimeout(() => {
            dispatch({type: Types.CHECK_EMAIL_STATUS, payload: response});
            // showToast('error', 'error message')
         }, 400);
     } catch (err) {
        // caught unexpected error
     }
 };

/**
 * validate OTP
 * 
 * @since 1.0.0
 * 
 * @returns void Dispatch event `VALIDATE_OTP`
 */

 export const validateOtp = (otp) => async (dispatch) => {
     let response = {
         loading: true,
         otpVerified: false
     }

     console.log('OTP => ', otp)

     try {
         // call api with OTP
         dispatch({type: Types.VALIDATE_OTP, payload: response});
         response.loading = false;
         response.otpVerified = true

         setTimeout(() => {
            dispatch({type: Types.VALIDATE_OTP, payload: response});
         }, 400);
     } catch (err) {
        // caught unexpected error
     }
 };

/**
 * reset new password 
 * 
 * @since 1.0.0
 * 
 * @returns void Dispatch event `POST_RESET_PASSWORD`
 */

 export const resetPassword = (otp, password) => async (dispatch) => {
     let response = {
         loading: true,
     }

     try {
         // call api with OTP
         dispatch({type: Types.POST_RESET_PASSWORD, payload: response});
         response.loading = false;

         setTimeout(() => {
            dispatch({type: Types.POST_RESET_PASSWORD, payload: response});
         }, 400);
     } catch (err) {
        // caught unexpected error
     }
 };
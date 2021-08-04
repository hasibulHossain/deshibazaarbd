import * as Types from "../types/types";

const initialState = {
    email: "",
    otp: null,
    isValidEmail: false,
    isOtpVerified: false,
    isLoading: false
};

const forgetPasswordReducer = (state = initialState, {type, payload}) => {
  switch (type) {

    case Types.CHECK_EMAIL_STATUS:
      return {
        ...state,
        email: payload.email,
        isLoading: payload.loading,
        isValidEmail: payload.isValidEmail
      };

    case Types.VALIDATE_OTP:
      return {
        ...state,
        isLoading: payload.loading,
        isOtpVerified: payload.otpVerified
      };

    case Types.POST_RESET_PASSWORD:
      return {
        ...state,
        isLoading: payload.loading,
        email: "",
        isValidEmail: false,
        isOtpVerified: false
      };

    default:
      return state;
  }
}

export default forgetPasswordReducer;

import * as Types from "./../Type/Types";

// Initial state
const initialState = {
    isLoading: false,
    isCreating: false,
    is_first_validated: false,
    registerInput: {
        first_name           : "",
        last_name            : "",
        phone_no             : "",
        email                : "",
        otp                  : "",
        password             : "",
        password_confirmation: ""
    },
    registerData: null,
};
const RegisterReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.CHANGE_REGISTER_INPUT_FIELD:
            const registerInput = { ...state.registerInput };
            registerInput[action.payload.name] = action.payload.value
            return {
                ...state,
                registerInput
            };
        case Types.REGISTER_FIRST_STEP:
            const payloadData = action.payload;
            const newReg = { ...state.registerInput };
            return {
                ...state,
                isLoading: action.payload.isLoading,
                registerInput: newReg,
            }
        case Types.AUTH_REGISTER:
            return {
                ...state,
                isCreating: action.payload.isCreating,
                registerInput: initialState.registerInput
            }
        default:
            break;
    }
    return { ...state }
};

export default RegisterReducer;
import * as Types from "./../Type/Types";

export const handleLoginInput = (name, value) => (dispatch) => {
  const formData = {
    name: name,
    value: value
  }
  dispatch({ type: Types.CHANGE_LOGIN_INPUT_FIELD, payload: formData })
}
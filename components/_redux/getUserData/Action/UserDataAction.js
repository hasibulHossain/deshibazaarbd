import { getSession } from 'next-auth/client'
import * as Types from "../Types/Types";

export const isSignedIn = () => async (dispatch) => {
  const session = await getSession();
  if(session && session.accessToken) {
    dispatch({type: Types.IS_SIGNED_IN, payload: true})
  } else {
    dispatch({type: Types.IS_SIGNED_IN, payload: false})
  }
};

export const getUserDataAction = () => async (dispatch) => {
  const data = getUserData();
  dispatch({ type: Types.GET_USER_STORAGE_DATA, payload: data });
}

/**
 * Logout a User
 * 
 * @return void
 */
export const handleLogoutUser = () => (dispatch) => {
  // localStorage.removeItem('redirectTo');
  localStorage.removeItem("redirectTo");
  localStorage.removeItem('loginData');
  localStorage.removeItem('access_token');

  dispatch(getUserDataAction());
  dispatch({ type: Types.LOGOUT_USER, payload: true });
}

//updated user data in local localStorage

function getUserData() {

  const userStorageData = JSON.parse(localStorage.getItem("loginData"));
  const redirectData    = JSON.parse(localStorage.getItem("redirectTo"));

  let data      = {
    userData    : null,
    access_token: null,
    redirectTo  : null
  };

  if (typeof userStorageData !== "undefined" && userStorageData !== null) {
    data.userData     = userStorageData.userData;
    data.access_token = userStorageData.tokenData;
  }
  if (typeof redirectData !== "undefined" && redirectData !== null && redirectData !== "") {
    data.redirectTo = redirectData;
  }
  return data;
}
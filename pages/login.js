import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "../components/LoginRegistration/Login";
import { getUserDataAction } from "../components/_redux/getUserData/Action/UserDataAction";

export default function login(props) {

  const dispatch   = useDispatch();
  const router     = useRouter();
  const userData   = useSelector((state) => state.UserDataReducer.userData);
  const redirectTo = useSelector((state) => state.UserDataReducer.redirectTo);

  useEffect(() => {
    if (typeof window === "undefined") {
      global.window = {};
    }

    if (typeof userData !== "undefined" && userData !== null) {
      if (typeof redirectTo !== "undefined" && redirectTo !== null && redirectTo !== "") {
        router.push(`${redirectTo}`).then((_) => window.scrollTo(0, 0));
      } else {
        router.push("/profile").then((_) => window.scrollTo(0, 0));
      }
    }
  }, [userData, redirectTo]);


  useEffect(() => {
    dispatch(getUserDataAction());
  }, []);

  return (
    <Login />
  );
}

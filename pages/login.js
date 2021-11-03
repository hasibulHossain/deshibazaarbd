import React from "react";
import Login from "../components/LoginRegistration/Login";
import withProtectedRoute from "../components/master/hoc/withProtectedRoute";

export default function login() {
  return (
    <Login />
  );
}

withProtectedRoute(login, true);
import React, { useEffect } from "react";
import MainLayout from "../components/layouts/MainLayout";
import Login from "../components/LoginRegistration/Login";

export default function login(props) {

  useEffect(() => {
    if (typeof window === "undefined") {
      global.window = {};
    }
  }, []);

  return (
    <MainLayout pageTitle="Sign In" pageMetaDescription="Sign in to get all access">
      <Login />
    </MainLayout>
  );
}

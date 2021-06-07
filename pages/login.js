import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import Head from "next/head";
import Login from "../components/LoginRegistration/Login";

export default function login(props) {
  return (
    <>
      <Head>
        <title>
          Deshi Bazaar BD || Sign In
      </title>
        <meta name="description" content="Meta" />
      </Head>
      <MainLayout>
        <Login />
      </MainLayout>
    </>
  );
}

import React, { useEffect } from "react";
import MainLayout from "../components/layouts/MainLayout";
import Head from "next/head";
import Registration from "../components/LoginRegistration/Registration";

export default function register(props) {
  useEffect(() => {
    if (typeof window === "undefined") {
      global.window = {};
    }
  }, []);
  return (
    <>
      <Head>
        <title>
          Deshi Bazaar BD || Sign up
      </title>
        <meta name="description" content="Meta" />
      </Head>
      <MainLayout>
        <Registration />
      </MainLayout>
    </>
  );
}
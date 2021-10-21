import React, { useEffect } from "react";
import Head from "next/head";
// import Registration from "../components/LoginRegistration/Registration";

import dynamic from 'next/dynamic'

const Registration = dynamic(() => import('../components/LoginRegistration/Registration'))

export default function register() {
  useEffect(() => {
    if (typeof window === "undefined") {
      global.window = {};
    }
  }, []);

  return (
    <>
      <Registration />
    </>
  );
}
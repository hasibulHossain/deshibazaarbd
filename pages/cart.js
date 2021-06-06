import React, { useEffect } from "react";
import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";

export default function Home() {

  useEffect(() => {
    if (typeof window === "undefined") {
      global.window = {};
    }
  }, []);

  return (
    <>
      <Head>
        <title>
          Cart | Deshi Bazaar BD
        </title>
        <meta name="description" content="Meta" />
      </Head>
      <MainLayout>
        Cart Page
      </MainLayout>
    </>
  );
}

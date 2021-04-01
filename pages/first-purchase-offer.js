import React from "react";
import MainLayout from "../components/layouts/Layout";
import HomeFeaturList from "../components/layouts/page/home/HomeFeaturList";
import Head from "next/head";
import FirstPurchaseProduct from "../components/layouts/page/firstPurchaseOffer/FirstPurchaseProduct";

export default function Home(props) {
  return (
    <>
    <Head>
      <title>
        First Purchase Offer || Ecommerce Store
      </title>
      <meta name="description" content="First Purchase Offer | Ecommerce Store" />
    </Head>

      <MainLayout>
        <FirstPurchaseProduct />
        {/* <HomeFeaturList /> */}
      </MainLayout>
    </>
  );
}

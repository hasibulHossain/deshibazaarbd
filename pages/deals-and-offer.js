import React from "react";
import MainLayout from "../components/layouts/Layout";
import Head from "next/head";
import DealsAndOffer from "../components/layouts/page/firstPurchaseOffer/DealsAndOffer";

export default function Home(props) {
  return (
    <>
    <Head>
      <title>
        Deals And Offer || Ecommerce Store
      </title>
      <meta name="description" content="Deals And Offer | Ecommerce Store" />
    </Head>

      <MainLayout>
        <DealsAndOffer />
        {/* <HomeFeaturList /> */}
      </MainLayout>
    </>
  );
}

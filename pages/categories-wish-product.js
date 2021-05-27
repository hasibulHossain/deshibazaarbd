import React, { useEffect } from "react";
import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import ScrollToTop from "react-scroll-to-top";
import CategoryBanner from "../components/CategoryBanner/CategoryBanner";
import CategoryWishProductContainer from "../components/CategoryWishProductList/CategoryWishProductContainer";
export default function Categories_wish_product(props) {
  useEffect(() => {
    if (typeof window === "undefined") {
      global.window = {};
    }
  }, []);


  return (
    <>
      <Head>
        <title>
          Deshi Bazaar BD
      </title>
        <meta name="description" content="Meta" />
      </Head>
      <MainLayout>
        <ScrollToTop smooth />
        <CategoryBanner />
        <CategoryWishProductContainer />
      </MainLayout>
    </>
  );
}

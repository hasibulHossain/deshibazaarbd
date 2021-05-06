import React, { useEffect } from "react";
import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import HomeBannerCarousel from "../components/homeBannerCarousel/HomeBannerCarousel";
import ScrollToTop from "react-scroll-to-top";
import ShopByCategoryContainer from "../components/ShopByCategory/ShopByCategoryContainer";
import FastestDeliveryContainer from "../components/FastestDelivery/FastestDeliveryContainer";
import FeaturedProductsContainer from "../components/FeaturedProducts/FeaturedProductsContainer";

export default function Home(props) {
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
        <HomeBannerCarousel />
        <ShopByCategoryContainer />
        <FeaturedProductsContainer />
        <FastestDeliveryContainer />
      </MainLayout>
    </>
  );
}

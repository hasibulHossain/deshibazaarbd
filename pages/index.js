import React, { useEffect } from "react";
import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import HomeBannerCarousel from "../components/homeBannerCarousel/HomeBannerCarousel";
import ScrollToTop from "react-scroll-to-top";
import ShopByCategoryContainer from "../components/ShopByCategory/ShopByCategoryContainer";
import FastestDeliveryContainer from "../components/FastestDelivery/FastestDeliveryContainer";
import FeaturedProductsContainer from "../components/FeaturedProducts/FeaturedProductsContainer";
import CompanyPolicyContainer from '../components/CompanyPolicy/CompanyPolicyContainer'
import ShopContainer from "../components/Shop/ShopContainer";
import ShopBanner from "../components/ShopBanner/ShopBanner";
import BestSellerContainer from "../components/BestSeller/BestSellerContainer";
import ProductTopListContainer from "../components/ProductTopList/ProductTopListContainer";
import DealFlash from "../components/DealFlash/DealFlash";
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
        <ProductTopListContainer />
        <DealFlash />
        <BestSellerContainer />
        <ProductTopListContainer />
        <ShopByCategoryContainer />
        <FeaturedProductsContainer />
        <FastestDeliveryContainer />
        <ShopBanner />
        <ShopContainer />
        <CompanyPolicyContainer />
      </MainLayout>
    </>
  );
}

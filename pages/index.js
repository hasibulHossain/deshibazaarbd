import React, { useEffect } from "react";
import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import HomeBannerCarousel from "../components/homeBannerCarousel/HomeBannerCarousel";
import ScrollToTop from "react-scroll-to-top";
import CategoryListContainer from "../components/category/CategoryListContainer";
import FastestDeliveryContainer from "../components/FastestDelivery/FastestDeliveryContainer";
import FeaturedProductsContainer from "../components/FeaturedProducts/FeaturedProductsContainer";
import CompanyPolicyContainer from '../components/CompanyPolicy/CompanyPolicyContainer'
import ShopContainer from "../components/Shop/ShopContainer";
import ShopBanner from "../components/ShopBanner/ShopBanner";
import BestSellerContainer from "../components/BestSeller/BestSellerContainer";
import ProductTopListContainer from "../components/ProductTopList/ProductTopListContainer";
import DealFlash from "../components/DealFlash/DealFlash";
import NewCollection from "../components/NewCollection/NewCollection";
import OfferProducts from "../components/OfferProducts/OfferProducts";

export default function Home(props) {

  useEffect(() => {
    if (typeof window === "undefined") {
      global.window = {};
    }
  }, []);

  return (
    <MainLayout>
      <ScrollToTop smooth />
      <HomeBannerCarousel />
      <NewCollection />
      <OfferProducts />
      <ProductTopListContainer />
      <DealFlash />
      <CategoryListContainer />
      <BestSellerContainer />
      <FeaturedProductsContainer />
      <FastestDeliveryContainer />
      <ShopBanner />
      <ShopContainer />
      <CompanyPolicyContainer />
    </MainLayout>
  );
}

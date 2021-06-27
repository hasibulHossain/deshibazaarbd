import React, { useEffect } from "react";
import MainLayout from "../components/layouts/MainLayout";
import HomeBannerCarousel from "../components/homeBannerCarousel/HomeBannerCarousel";
import ScrollToTop from "react-scroll-to-top";
import CategoryListContainer from "../components/category/CategoryListContainer";
import CompanyPolicyContainer from '../components/CompanyPolicy/CompanyPolicyContainer'
import ShopContainer from "../components/Shop/ShopContainer";
import ShopBanner from "../components/ShopBanner/ShopBanner";
import ProductTopListContainer from "../components/ProductTopList/ProductTopListContainer";
import DealFlash from "../components/DealFlash/DealFlash";
import NewCollection from "../components/NewCollection/NewCollection";
import OfferProducts from "../components/OfferProducts/OfferProducts";
import ProductSection from "../components/products/ProductSection";

export default function Home() {

  return (
    <MainLayout>
      <ScrollToTop smooth />
      <HomeBannerCarousel />
      <NewCollection />
      <OfferProducts />
      <ProductTopListContainer />
      <DealFlash />
      <CategoryListContainer />

      <ProductSection title="Best Sold" type="best-sold" limit={6} url='best-sold-products' />
      <ProductSection title="Featured Products For You" type="featured" limit={6} url='featured-products' />
      <ProductSection title="Fastest Delivery" type="fastest-delivery" limit={6} url='fastest-delivery-products' />
      <ProductSection title="Latest Products" type="" limit={6} url='latest-products' />

      <ShopBanner />
      <ShopContainer />
      <CompanyPolicyContainer />
    </MainLayout>
  );
}

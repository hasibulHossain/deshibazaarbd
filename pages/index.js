import React, {useEffect, useState} from "react";
import MainLayout from "../components/layouts/MainLayout";
import HomeBannerCarousel from "../components/homeBannerCarousel/HomeBannerCarousel";
import ScrollToTop from "react-scroll-to-top";
import CategoryListContainer from "../components/category/CategoryListContainer";
import CompanyPolicyContainer from '../components/CompanyPolicy/CompanyPolicyContainer'
import ShopContainer from "../components/Shop/ShopContainer";
// import ShopBanner from "../components/ShopBanner/ShopBanner";
// import ProductTopListContainer from "../components/ProductTopList/ProductTopListContainer";
import DealFlash from "../components/DealFlash/DealFlash";
import NewCollection from "../components/NewCollection/NewCollection";
// import OfferProducts from "../components/OfferProducts/OfferProducts";
import ProductSection from "../components/products/ProductSection";
import { translate } from "../services/translation/translation";
import StoreContainer from "../components/store/StoreContainer";
import { useDispatch } from "react-redux";
import { checkIsMobileDevice } from "../_redux/store/action/globalAction";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    if(process.browser) {
      const isMobile = /Android|webOS|iPhone|Opera Mini/i.test(navigator.userAgent);
      dispatch(checkIsMobileDevice(isMobile))
    }
  }, [])
  
  return (
    <MainLayout>
      {/* <ScrollToTop smooth /> */}
      <HomeBannerCarousel />
      <NewCollection />
      {/* <OfferProducts /> */}
      {/* <ProductTopListContainer /> */}
      <DealFlash />
      <CategoryListContainer url='categories' />

      <ProductSection title={translate('Daily Essential')} type="daily-essentials" limit={6} url='latest-products' />
      <ProductSection title={translate('Best Sold')} type="best-sold" limit={6} url='best-sold-products' />
      <ProductSection title={translate('Featured Products For You')} type="featured" limit={6} url='featured-products' />
      <ProductSection title={translate('Fastest Delivery')} type="fastest" limit={6} url='fastest-delivery-products' />
      <ProductSection title={translate('Latest Products')} type="" limit={6} url='latest-products' />

      {/* <ShopBanner /> */}
      <ShopContainer />
      <StoreContainer />
      <CompanyPolicyContainer />
    </MainLayout>
  );
}

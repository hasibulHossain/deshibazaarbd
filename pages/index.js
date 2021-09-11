import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import HomeBannerCarousel from "../components/homeBannerCarousel/HomeBannerCarousel";
import CategoryListContainer from "../components/category/CategoryListContainer";
import CompanyPolicyContainer from '../components/CompanyPolicy/CompanyPolicyContainer'
import ShopContainer from "../components/Shop/ShopContainer";
// import ShopBanner from "../components/ShopBanner/ShopBanner";
// import ProductTopListContainer from "../components/ProductTopList/ProductTopListContainer";
import DealFlash from "../components/DealFlash/DealFlash";
import NewOffer from "../components/NewCollection/NewOffer";
// import OfferProducts from "../components/OfferProducts/OfferProducts";
import ProductSection from "../components/products/ProductSection";
import { translate } from "../services/translation/translation";
import StoreContainer from "../components/store/StoreContainer";
import { useSelector } from "react-redux";

export default function Home() {
  const {isMobile} = useSelector(state => state.GlobalReducer);

  return (
    <MainLayout>
      {/* <ScrollToTop smooth /> */}
      <HomeBannerCarousel />
      <NewOffer />
      {/* <OfferProducts /> */}
      {/* <ProductTopListContainer /> */}
      <CategoryListContainer url='categories' />
      <DealFlash />

      <ProductSection title={translate('Daily Essential')} type="daily-essentials" limit={isMobile ? 6 : 10} url='daily-essentials' isSliding={isMobile ? false : true} />
      <ProductSection title={translate('Fastest Delivery')} type="fastest" limit={6} url='fastest' />
      <ProductSection title={translate('Latest Products')} type="latest" limit={6} url='latest' />
      <ProductSection title={translate('Featured Products For You')} type="featured" limit={6} url='featured' />
      <ProductSection title={translate('Best Sold')} type="best-sold" limit={6} url='best-sold' />

      {/* <ShopBanner /> */}
      <ShopContainer />
      <StoreContainer />
      <CompanyPolicyContainer />
    </MainLayout>
  );
}

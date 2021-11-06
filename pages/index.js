import React from "react";
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
import LazyLoad from "react-lazyload";
import PageMeta from "../components/layouts/PageMeta";

export default function Home(props) {
  const {isMobile} = useSelector(state => state.GlobalReducer);

  return (
    <>
      <PageMeta
        title="Deshibazaarbd.com | Choose Order Enjoy | Best E-commerce"
        description="Deshi Bazaar BD is a multivendor e-commerce business solution in Bangladesh"
        keywords="deshibazaar,deshibazaarbd,deshibazar,deshibazarbd,daraz"
        ogpEnabled={true}
        pageSocialMetaUrl="https://deshibazaarbd.com"
        pageSocialMetaImage="https://www.deshibazaarbd.com/images/logos/logo-en.svg" />
      <HomeBannerCarousel homeBanner={props.homeBanner} />

      {/* <NewOffer /> */}
      {/* <OfferProducts /> */}
      {/* <ProductTopListContainer /> */}
      <CategoryListContainer homeCategory={props.homeCategory} />
      
      <LazyLoad height={280} once>
        <DealFlash dealFlashList={props.dealFlash} />
      </LazyLoad>

      <ProductSection title={translate('Daily Essential')} type="daily-essentials" limit={isMobile ? 6 : 10} url='daily-essentials' isSliding={isMobile ? false : true} />
      <ProductSection title={translate('Fastest Delivery')} type="fastest" limit={6} url='fastest' />
      <ProductSection title={translate('Latest Products')} type="latest" limit={6} url='latest' />
      <ProductSection title={translate('Featured Products For You')} type="featured" limit={6} url='featured' />
      <ProductSection title={translate('Best Sold')} type="best-sold" limit={6} url='best-sold' />

      {/* <ShopBanner /> */}
      <LazyLoad height={400} once>
        <ShopContainer />
      </LazyLoad>

      <LazyLoad height={400} once>
        <StoreContainer />
      </LazyLoad>
      <LazyLoad height={280} once>
        <CompanyPolicyContainer />
      </LazyLoad>
    </>
  );
}

export async function getStaticProps() {
  const homeBannerSliderRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}sliders-frontend`);
  const homeBannerSlider = await homeBannerSliderRes.json();

  const homeCategoryRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}frontend-categories?type=homepage&limit=12`);
  const homeCategory = await homeCategoryRes.json();

  const dealFlashRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}get-items?type=deals-of-day&paginate_no=2`);
  const dealFlash = await dealFlashRes.json();

  return {
    props: {
      homeBanner: homeBannerSlider.data,
      homeCategory: homeCategory.data,
      dealFlash: dealFlash.data.data
    },
    revalidate: 1800
  }
}

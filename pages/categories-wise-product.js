import React from "react";
import MainLayout from "../components/layouts/MainLayout";
// import ScrollToTop from "react-scroll-to-top";
// import CategoryBanner from "../components/CategoryBanner/CategoryBanner";
// import CategoryWishProductContainer from "../components/CategoryWishProductList/CategoryWishProductContainer";

import dynamic from 'next/dynamic';
const CategoryBanner = dynamic(() => import('../components/CategoryBanner/CategoryBanner'));
const CategoryWishProductContainer = dynamic(() => import('../components/CategoryWishProductList/CategoryWishProductContainer'));

export default function Categories_wise_product() {
  return (
    <MainLayout pageTitle="Products">
      <div className="container">
        {/* <ScrollToTop smooth /> */}
        <CategoryBanner />
        <CategoryWishProductContainer />
      </div>
    </MainLayout>
  );
}

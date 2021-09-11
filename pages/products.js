import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import ScrollToTop from "react-scroll-to-top";
// import CategoryBanner from "../components/CategoryBanner/CategoryBanner";
// import CategoryWishProductContainer from "";
import dynamic from 'next/dynamic';

const CategoryWishProductContainer = dynamic(() => import('../components/CategoryWishProductList/CategoryWishProductContainer'));

export default function Products() {
  return (
    <MainLayout>
      <ScrollToTop smooth />
      {/* <CategoryBanner /> */}
      <div className="container">
        <CategoryWishProductContainer />
      </div>
    </MainLayout>
  );
}

import React from "react";
import MainLayout from "../components/layouts/Layout";
import HomeFeaturList from "../components/layouts/page/home/HomeFeaturList";
import ElegantChair from "../components/layouts/page/productdetails/ElegantChair";
import ProductDetailsDescrition from "../components/layouts/page/productdetails/ProductDetailsDescrition";
import ProductRatings from "../components/layouts/page/productdetails/ProductRatings";
import ProductReview from "../components/layouts/page/productdetails/ProductReview";

export default function Home(props) {
  return (
    <>
      <MainLayout>
        <ElegantChair />
        <ProductDetailsDescrition />
        <ProductReview />
        <ProductRatings />
        <HomeFeaturList />
      </MainLayout>
    </>
  );
}

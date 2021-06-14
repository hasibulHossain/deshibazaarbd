import React, { useEffect } from "react";
import MainLayout from "../components/layouts/MainLayout";
import ScrollToTop from "react-scroll-to-top";
import CategoryBanner from "../components/CategoryBanner/CategoryBanner";
import CategoryWishProductContainer from "../components/CategoryWishProductList/CategoryWishProductContainer";

export default function Products() {

  useEffect(() => {
    if (typeof window === "undefined") {
      global.window = {};
    }
  }, []);


  return (
    <MainLayout>
      <ScrollToTop smooth />
      <CategoryBanner />
      <CategoryWishProductContainer />
    </MainLayout>
  );
}

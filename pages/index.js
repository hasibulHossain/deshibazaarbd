import React, { useEffect } from "react";
import MainLayout from "../components/layouts/Layout";
import HomeFlashSell from "../components/layouts/page/home/HomeFlashSell";
import HomeBrand from "../components/layouts/page/home/HomeBrand";
import VendorList from "../components/layouts/page/home/VendorList";
import HomeProduct from "../components/layouts/page/home/HomeProduct";
import FlashSell from "../components/layouts/page/home/FlashSell";
import HomeFeaturList from "../components/layouts/page/home/HomeFeaturList";

import { Container } from "react-bootstrap";
import HomeCategoryWiseProduct from "../components/layouts/page/home/HomeCategoryWiseProduct";

export default function Home(props) {
  useEffect(() => {
    if (typeof window === "undefined") {
      global.window = {};
    }
  }, []);
  return (
    <>
      <MainLayout>
        <img className="homesliderbaner" src="/images/slider/slide1.png" />
        <Container fluid>
          <FlashSell />

          <HomeCategoryWiseProduct no={1} />

          <HomeCategoryWiseProduct no={2} />

          <HomeBrand />
          <VendorList />
          <HomeProduct />

          <HomeFeaturList />
        </Container>
      </MainLayout>
    </>
  );
}

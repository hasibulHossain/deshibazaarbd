import React, { useEffect } from "react";
import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import HomeBannerCarousel from "../components/homeBannerCarousel/HomeBannerCarousel";

export default function Home(props) {
  useEffect(() => {
    if (typeof window === "undefined") {
      global.window = {};
    }
  }, []);
  return (
    <>
      <Head>
        <title>
          Deshi Bazaar BD
      </title>
        <meta name="description" content="Meta" />
      </Head>
      <MainLayout>
        <HomeBannerCarousel />
      </MainLayout>
    </>
  );
}

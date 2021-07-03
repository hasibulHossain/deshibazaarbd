import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import DemoWarning from "../Demo/DemoWarning";
import FloatingCart from "../carts/floating-cart/FloatingCart";
import Head from "next/head";

import { useSelector } from "react-redux";
import FloatingCartButton from "../carts/floating-cart/FloatingCartButton";

const MainLayout = (props) => {

  const { children, pageTitle, pageMetaDescription } = props;
  const { backdrop } = useSelector(state => state.GlobalReducer);

  const title = typeof pageTitle === 'undefined' ? 'Deshi Bazaar BD' : pageTitle + ' | Deshi Bazaar BD';
  const metaDescription = typeof pageMetaDescription === 'undefined' ? 'Deshi Bazaar BD is a multivendor e-commerce business solution in Bangladesh' : pageMetaDescription + ' .Deshi Bazaar BD is a multivendor e-commerce business solution in Bangladesh';

  useEffect(() => {
    if (typeof window === "undefined") {
      global.window = {};
    }
  }, [])

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
      </Head>

      <DemoWarning />
      <Header />
      <main>
        {backdrop && <div className="backdrop"></div>}
        {children}
      </main>

      <Footer />

      <FloatingCart />
      <FloatingCartButton />
    </>
  );
};

export default MainLayout;

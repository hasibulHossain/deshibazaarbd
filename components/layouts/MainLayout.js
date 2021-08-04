import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import DemoWarning from "../Demo/DemoWarning";
import FloatingCart from "../carts/floating-cart/FloatingCart";

import PageMeta from './PageMeta';
import FloatingCartButton from "../carts/floating-cart/FloatingCartButton";
import MessengerCustomerChat from 'react-messenger-customer-chat';

const MainLayout = (props) => {

  const { children } = props;
  const { backdrop } = useSelector(state => state.GlobalReducer);

  useEffect(() => {
    if (typeof window === "undefined") {
      global.window = {};
    }
  }, [])

  return (
    <>
      <PageMeta props={props} />

      {
        process.env.NODE_ENV === 'production' &&
        <MessengerCustomerChat
          pageId="100540491425945"
          appId="934088130725884"
          htmlRef=""
        />
      }

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

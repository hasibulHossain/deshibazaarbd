import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import DemoWarning from "../Demo/DemoWarning";
import FloatingCart from "../carts/floating-cart/FloatingCart";

import PageMeta from './PageMeta';
import FloatingCartButton from "../carts/floating-cart/FloatingCartButton";
// import MessengerCustomerChat from 'react-messenger-customer-chat';
import { checkIsMobileDevice, toggleBackdrop } from "../../_redux/store/action/globalAction";

const MainLayout = (props) => {
  const dispatch = useDispatch();
  const { children } = props;
  const { backdrop } = useSelector(state => state.GlobalReducer);

  useEffect(() => {
    const bodyDOM = window.document.body;

    // Remove scrollbar when Floating cart is open
    if (backdrop) {
      bodyDOM.style.height = "100vh";
      bodyDOM.style.overflowY = "hidden";
    } else {
      bodyDOM.style.height = "";
      bodyDOM.style.overflowY = "";
    }
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      global.window = {};
    }
    
    if(process.browser) {
      const isMobile = /Android|webOS|iPhone|Opera Mini/i.test(navigator.userAgent);
      dispatch(checkIsMobileDevice(isMobile))
    }
  }, [])

  return (
    <>
      <PageMeta props={props} />

      {/* {
        process.env.NODE_ENV === 'production' &&
        <MessengerCustomerChat
          pageId="100540491425945"
          appId="934088130725884"
          htmlRef=""
        />
      } */}

      <Header />
      <main>
        <div onClick={() => toggleBackdrop()} className={`backdrop ${backdrop ? 'open' : ''}`}></div>
        <div style={{minHeight: "37vh"}}>
          {children}
        </div>
      </main>

      <Footer />
      <FloatingCart />
      <FloatingCartButton />
    </>
  );
};

export default MainLayout;

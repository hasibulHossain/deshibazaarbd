import React, { useEffect } from "react";
import App from "next/app";
import Head from 'next/head';
import { Provider } from "react-redux";
import Router, { useRouter } from "next/router";
import NProgress from 'nprogress';
import { createWrapper } from "next-redux-wrapper";
import Script from 'next/script'
import Store from "../_redux/Store";
import * as fbq from '../lib/fpixel'

import "../assets/scss/variables.scss";
import "bootstrap/scss/bootstrap.scss";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import "../node_modules/slick-carousel/slick/slick.css";
import "../assets/scss/main.css";

import "../assets/scss/carts.scss"; // For carts page
import "../assets/scss/navigation.scss";
import "../assets/scss/RemoveCartItem.scss";
import "../assets/scss/product-details-info.scss";
import "../assets/scss/modal.scss";
import "../assets/scss/payment.css";
import "../assets/scss/responsive.scss";
import "../assets/scss/responsive-main.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../components/product-review/productListForReview.css";
import "../components/ProfileAccountSetting/ProfileAccountSetting.scss";
import "../assets/scss/nprogress.css"
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';

// For Order Pages
import "../components/orders/scss/order-invoice.scss";
import MainLayout from "../components/layouts/MainLayout";
import axiosDefault from "../services/axios-default";

axiosDefault();
toast.configure();

// Base url


NProgress.configure({ minimum: 0.1 });

Router.onRouteChangeStart = () => {
  // console.log('onRouteChangeStart triggered');
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  // console.log('onRouteChangeComplete triggered');
  NProgress.done();
};

Router.onRouteChangeError = () => {
  // console.log('onRouteChangeError triggered');
  NProgress.done();
};



function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    // This pageview only triggers the first time (it's important for Pixel to have real information)
    fbq.pageview()

    const handleRouteChange = () => {
      fbq.pageview()
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      {/* Global Site Code Pixel - Facebook Pixel */}
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${fbq.FB_PIXEL_ID});
          `,
        }}
      />
      <Provider store={Store}>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
        </Head>
          <MainLayout>
            <Component {...pageProps}></Component>
          </MainLayout>
      </Provider>
    </>
  )
}

const makeStore = () => Store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);

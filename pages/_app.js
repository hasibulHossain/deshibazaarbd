import App from "next/app";
import React from "react";
import { Provider } from "react-redux";
import axios from "axios";
import { createWrapper } from "next-redux-wrapper";
import Store from "../_redux/Store";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
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

// For Order Pages
import "../components/orders/scss/order-invoice.scss";

// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false;

toast.configure();

// Import axios.js so that it can inject token in every request
require("../services/axios");

// Base url
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={Store}>
        <Component {...pageProps}></Component>
      </Provider>
    );
  }
}

const makeStore = () => Store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);

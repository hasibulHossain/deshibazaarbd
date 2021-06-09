import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import DemoWarning from "../Demo/DemoWarning";
import FloatingCart from "../FloatingCart/FloatingCart";

import { useSelector } from "react-redux";

const MainLayout = (props) => {
  const { children } = props;
  const { modalVisible } = useSelector((state) => state.GlobalReducer);
  return (
    <>
      <DemoWarning />
      <Header />
      {modalVisible && <FloatingCart />}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;

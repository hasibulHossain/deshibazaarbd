import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import DemoWarning from "../Demo/DemoWarning";
import FloatingCart from "../FloatingCart/FloatingCart";

import { useSelector } from "react-redux";

const MainLayout = (props) => {
  const { children } = props;
  const { floatingCartVisible, backdrop } = useSelector(
    (state) => state.GlobalReducer
  );

  return (
    <>
      <DemoWarning />
      <Header />
      {floatingCartVisible && <FloatingCart />}
      <main>
        {backdrop && <div className="backdrop"></div>}
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;

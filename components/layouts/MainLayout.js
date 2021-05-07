import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import DemoWarning from "../Demo/DemoWarning";

const MainLayout = (props) => {
  return (
    <>
      <DemoWarning />
      <Header />
      {props.children}
      <Footer/>
    </>
  );
};

export default MainLayout;

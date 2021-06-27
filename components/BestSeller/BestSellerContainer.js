import React from "react";
import ViewAll from "../ViewAll/ViewAll";
import ProductMainList from "../products/ProductMainList";

const BestSoldContainer = () => {
  return (
    <section className="product-container">
      <div className="product-heading">
        <h5>Best Sold</h5>
        <ViewAll url='/best-sold-products' />
      </div>

      <ProductMainList type='best-sold' limit={6} page='home' />
    </section>
  );
};

export default BestSoldContainer;

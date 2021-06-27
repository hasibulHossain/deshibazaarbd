import React from "react";
import ViewAll from "../ViewAll/ViewAll";
import ProductMainList from "../products/ProductMainList";

const FastestDeliveryContainer = () => {
  return (
    <section className="product-container">
      <div className="product-heading">
        <h5> Fastest Delivery </h5>
        <ViewAll url='/fast-delivery-products' />
      </div>

      <ProductMainList type='' limit={6} page='home' />
    </section>
  );
};

export default FastestDeliveryContainer;

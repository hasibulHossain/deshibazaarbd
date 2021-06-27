import React from "react";
import ViewAll from "../ViewAll/ViewAll";
import ProductMainList from "../products/ProductMainList";

const FeaturedProductsContainer = () => {
  return (
    <section className="product-container">
      <div className="product-heading">
        <h5>Featured Products for you</h5>
        <ViewAll url='/featured-products' />
      </div>

      <ProductMainList type='featured' limit={6} page='home' />
    </section>
  );
};

export default FeaturedProductsContainer;

import React from "react";
import PropTypes from 'prop-types';
import ViewAll from "../ViewAll/ViewAll";
import ProductMainList from "../products/ProductMainList";

const ProductSection = ({ title, description = null, url = '', type = '', limit = 6, page = 'home'}) => {
  return (
    <section className="container product-container">
      <div className="product-heading">
        <h5> 
          {title} 
        </h5>
        {
           description !== null && <p>{ description }</p>
        }
        <ViewAll type={type} />
      </div>

      <ProductMainList type={type} limit={limit} page={page} />
    </section>
  );
};

ProductSection.propTypes = {
    title      : PropTypes.string,
    description: PropTypes.string,
    url        : PropTypes.string,
    type       : PropTypes.string,
    limit      : PropTypes.number,
    page       : PropTypes.string
}

export default ProductSection;

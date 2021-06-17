import React, { useState, useEffect } from "react";
import Button from "../master/Button/Button";
import ProductList from "../ProductList/ProductList";

// third party imports
import { useDispatch, useSelector } from "react-redux";

// local imports
import {
  getFeaturedProductDetails,
  getFeaturedProductList,
  resetFeaturedProductDetails,
} from "./_redux/Action/FeaturedProductsAction";

const FeaturedProductsContainer = () => {
  const [show, setShow] = useState(false);

  const {
    ProductList: productList,
    isLoading,
    product,
  } = useSelector((state) => state.FeaturedProductsReducer);

  const dispatch = useDispatch();

  const handleClose = () => setShow(false);

  const handleShow = (item) => {
    setShow(true);
    dispatch(getFeaturedProductDetails(item.sku));
  };

  useEffect(() => {
    dispatch(getFeaturedProductList());
  }, []);

  useEffect(() => {
    if (!show && product) {
      dispatch(resetFeaturedProductDetails());
    }
  }, [show]);

  return (
    <section className="product-container">
      <div className="product-heading">
        <h5>Featured Products</h5>
        <Button buttonText="view all" isFontAwesome={true} />
      </div>
      <ProductList
        productList={productList}
        handleClose={handleClose}
        handleShow={handleShow}
        isLoading={isLoading}
        product={product}
        show={show}
      />
    </section>
  );
};

export default FeaturedProductsContainer;

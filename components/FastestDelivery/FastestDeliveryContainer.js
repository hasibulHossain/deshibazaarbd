import React, { useState, useEffect } from "react";
import Button from "../master/Button/Button";
import ProductList from "../ProductList/ProductList";

// third party imports
import { useDispatch, useSelector } from "react-redux";

// local imports
import { getProductList } from "../ProductList/_redux/Action/ProductListAction";
import {
  getFastestDeliveryProductDetails,
  resetFastestDeliveryProductDetails,
} from "./_redux/Action/FastestDeliveryAction";

const FastestDeliveryContainer = () => {
  const [show, setShow] = useState(false);

  const { product } = useSelector((state) => state.FastestDeliveryReducer);

  const { FastestDeliveryProductList: productList, isLoading } = useSelector(
    (state) => state.ProductListReducer
  );

  const dispatch = useDispatch();

  const handleClose = () => setShow(false);

  const handleShow = (item) => {
    setShow(true);
    dispatch(getFastestDeliveryProductDetails(item.sku));
  };

  useEffect(() => {
    dispatch(getProductList("fastest-delivery"));
  }, []);

  useEffect(() => {
    if (!show && product) {
      dispatch(resetFastestDeliveryProductDetails());
    }
  }, [show]);

  return (
    <section className="product-container">
      <div className="product-heading">
        <h5>Fastest Delivery</h5>
        <Button buttonText="view all" isFontAwesome={true} />
      </div>
      <ProductList
        type="fastest_delivery"
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

export default FastestDeliveryContainer;

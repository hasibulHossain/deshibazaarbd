import React, { useState, useEffect } from "react";
import Button from "../master/Button/Button";
import { useRouter } from "next/router";

// third party imports
import { useDispatch, useSelector } from "react-redux";

// local imports
import { getProductList } from "../ProductList/_redux/Action/ProductListAction";
import {
  getFastestDeliveryProductDetails,
  resetFastestDeliveryProductDetails,
} from "./_redux/Action/FastestDeliveryAction";
import { setFilterParams } from "../CategoryWishProductList/_redux/Action/CategoryWiseProductAction";
import ProductList from "../ProductList/ProductList";
import ViewAll from "../ViewAll/ViewAll";

const FastestDeliveryContainer = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const { product } = useSelector((state) => state.FastestDeliveryReducer);

  const { FastestDeliveryProductList: productList, isLoading } = useSelector(
    (state) => state.ProductListReducer
  );

  const { filterParams } = useSelector(
    (state) => state.CategoryWiseProductReducer
  );

  const handleClose = () => setShow(false);

  const handleShow = (item) => {
    setShow(true);
    dispatch(getFastestDeliveryProductDetails(item.sku));
  };

  const viewAllHandler = () => {
    const cloneFilterParams = { ...filterParams };
    cloneFilterParams.type = "fastest-delivery";
    dispatch(setFilterParams(cloneFilterParams));
    router.push("/products");
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
        <ViewAll viewAllHandler={viewAllHandler} />
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

export default FastestDeliveryContainer;

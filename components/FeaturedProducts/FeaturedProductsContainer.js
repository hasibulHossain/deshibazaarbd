import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
// third party imports
import { useDispatch, useSelector } from "react-redux";

// local imports
import {
  getFeaturedProductDetails,
  resetFeaturedProductDetails,
} from "./_redux/Action/FeaturedProductsAction";
import { getProductList } from "../ProductList/_redux/Action/ProductListAction";
import { setFilterParams } from "../CategoryWishProductList/_redux/Action/CategoryWiseProductAction";
import ViewAll from "../ViewAll/ViewAll";
import ProductList from "../ProductList/ProductList";

const FeaturedProductsContainer = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const router = useRouter();
  const { product } = useSelector((state) => state.FeaturedProductsReducer);

  const { FeaturedProductList: productList, isLoading } = useSelector(
    (state) => state.ProductListReducer
  );

  const { filterParams } = useSelector(
    (state) => state.CategoryWiseProductReducer
  );

  const handleClose = () => setShow(false);

  const handleShow = (item) => {
    setShow(true);
    dispatch(getFeaturedProductDetails(item.sku));
  };

  const viewAllHandler = () => {
    const cloneFilterParams = { ...filterParams };
    cloneFilterParams.type = "featured";
    dispatch(setFilterParams(cloneFilterParams));
    router.push("/products");
  };

  useEffect(() => {
    dispatch(getProductList("featured"));
  }, []);

  useEffect(() => {
    if (!show && product) {
      dispatch(resetFeaturedProductDetails());
    }
  }, [show]);

  return (
    <section className="product-container">
      <div className="product-heading">
        <h5>Featured Products you you </h5>
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

export default FeaturedProductsContainer;

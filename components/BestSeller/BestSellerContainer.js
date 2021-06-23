import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

// third party imports
import { useDispatch, useSelector } from "react-redux";

// local imports
import ProductList from "../ProductList/ProductList";
import { getProductList } from "../ProductList/_redux/Action/ProductListAction";
import {
  getBestSoldProductDetails,
  resetBestSoldProductDetails,
} from "./_redux/Action/BestSellerAction";
import { setFilterParams } from "../CategoryWishProductList/_redux/Action/CategoryWiseProductAction";
import ViewAll from "../ViewAll/ViewAll";

const BestSoldContainer = (props) => {
  const [show, setShow] = useState(false);

  const { product } = useSelector((state) => state.BestSellerReducer);

  const { BestSoldProductList: productList, isLoading } = useSelector(
    (state) => state.ProductListReducer
  );

  const { filterParams } = useSelector(
    (state) => state.CategoryWiseProductReducer
  );

  const router = useRouter();
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);

  const handleShow = (item) => {
    setShow(true);
    dispatch(getBestSoldProductDetails(item.sku));
  };

  const viewAllHandler = () => {
    const cloneFilterParams = { ...filterParams };
    cloneFilterParams.type = "best-sold";
    dispatch(setFilterParams(cloneFilterParams));
    router.push("/products");
  };

  useEffect(() => {
    dispatch(getProductList("best-sold"));
  }, []);

  useEffect(() => {
    if (!show && product) {
      dispatch(resetBestSoldProductDetails());
    }
  }, [show]);

  return (
    <section className="product-container">
      <div className="product-heading">
        <h5>Best Sold</h5>
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

export default BestSoldContainer;

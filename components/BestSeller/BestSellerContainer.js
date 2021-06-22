import React, { useState, useEffect } from "react";
import Button from "../master/Button/Button";
import Link from "next/link";
// third party imports
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// local imports
import ProductList from "../ProductList/ProductList";
import { getProductList } from "../ProductList/_redux/Action/ProductListAction";
import {
  getBestSoldProductDetails,
  resetBestSoldProductDetails,
} from "./_redux/Action/BestSellerAction";

const BestSoldContainer = () => {
  const [show, setShow] = useState(false);

  const { product } = useSelector((state) => state.BestSellerReducer);

  const { BestSoldProductList: productList, isLoading } = useSelector(
    (state) => state.ProductListReducer
  );

  const dispatch = useDispatch();

  const handleClose = () => setShow(false);

  const handleShow = (item) => {
    setShow(true);
    dispatch(getBestSoldProductDetails(item.sku));
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
        <Link href="/products">
          <div className="custom-button-component">
            View all
            <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
          </div>
        </Link>
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

export default BestSoldContainer;

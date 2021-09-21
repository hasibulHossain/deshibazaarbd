import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

import PriceCalculation from "./partials/PriceCalculation";
import { useDispatch } from "react-redux";
import { toggleProductModalAction } from "./_redux/Action/ProductAction";
import { addToCartAction } from "../carts/_redux/action/CartAction";
import { showToast } from "../master/Helper/ToastHelper";
import Translate from "../translation/Translate";
import router from 'next/router'
import Image from 'next/image';

/**
 * ProductSingleMini Component
 *
 * @since 1.0.0
 *
 * @param object item
 * @param string columnClassName
 * @param string cardClassName
 *
 * @return view
 */
const ProductSingleMini = ({
  item = {},
  columnClassName = "col-md-2",
  productKey = 0,
  length = 0,
  cardClassName = "product-card",
  isSliding
}) => {
  const dispatch = useDispatch();
  const cardClass = productKey !== length ? "" : "border-right-0";

  const addToCart = (item) => {
    if (parseInt(item.current_stock) === 0) {
      showToast("error", "This product is out of stock!");
    } else {
      dispatch(addToCartAction(item));
    }
  };

  // const imageLoader = ({ src, width, quality }) => {
  //     return `https://icon-library.com/images/img-icon/img-icon-0.jpg`
  // }

  const imageURL = `${process.env.NEXT_PUBLIC_URL}images/products/${item.featured_image}`;

  // const modalHandler = () => {
  //   dispatch(toggleProductModalAction(item.sku));
  // };

  const redirectToProductDetailsPage = (product) => {
    router
      .push("/products/" + product.sku)
      .then((_) => {
        window.scrollTo(0, 0);
      });
  };

  let singleProduct = (
    <div
      className={`
                ${
                  columnClassName === "col-md-2" &&
                  "col-xl-2 col-lg-3 col-md-4 col-6"
                } 
                ${
                  columnClassName === "col-md-3" &&
                  "col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6"
                }
                ${columnClassName === "col-md-12" && "col-12"}
        `}
    >
      {/* // <div className={`${(columnClassName === "col-md-2" || columnClassName === "col-md-3") ? columnClassName + ' col-6 col-sm-6' : "col-12"}`}> */}
      <div
        className={`${cardClassName} ${cardClass} ${
          columnClassName === "col-md-2" || columnClassName === "col-md-3"
            ? "filter_column_3"
            : "filter_column_10"
        } `}
      >

        <div className={`product-card-body`} >
          {columnClassName === "col-md-2" && (
            <>
              <div onClick={() => redirectToProductDetailsPage(item)} style={{overflow: 'hidden'}}>
              <Image src={imageURL} alt={item.name} width={200} height={200} />
              <div className="product-card-body-inner">
                <p className="product-title">
                  <Translate>{item.name}</Translate>
                </p>
                <span className="product-unit">{item.per_unit_value} {' '} {item.unit_name && item.unit_name}</span>
                <p
                  className={`stock-status ${
                    parseInt(item.current_stock) > 0
                      ? "stock-status-in"
                      : "stock-status-out"
                  }`}
                >
                  <span>
                    {parseInt(item.current_stock) > 0
                      ? "In stock"
                      : "Out of stock"}
                  </span>
                </p>
                <PriceCalculation item={item} />
                <div
                  className={
                    columnClassName === "col-md-3" || "col-md-2"
                      ? ""
                      : "d-flex justify-content-start"
                  }
                >
                  {/* <ProductRating rating={item.average_rating} /> */}
                  {/* {
                                            item.average_rating != 0 && (
                                                <ProductRating rating={item.average_rating} />
                                            )
                                        } */}
                </div>
              </div>
              </div>
              <div className="product-single-mini-cart">
                <button type='button' onClick={() => addToCart(item)} className='simple-btn homepage-product-btn'>
                  <div className="simple-btn__inner">
                    <div className="simple-btn__icon">
                      <FontAwesomeIcon icon={faShoppingBag} />
                    </div>
                    <span className="simple-btn__txt">Add to cart</span>
                  </div>
                </button>
              </div>
            </>
          )}

          {(columnClassName === "col-md-3" ||
            columnClassName === "col-md-12") && (
            <>
              <div className="row">
                {/* <div
                  className={ columnClassName == "col-md-3" ? "col-md-12" : "col-5" } >
                </div> */}
                <div
                  onClick={() => redirectToProductDetailsPage(item)}
                  className={
                    columnClassName === "col-md-3" ? "col-md-12" : "col-7"
                  }
                > 
                  <div style={{overflow: 'hidden'}}>
                    <img src={imageURL} alt={item.name} className="img-fluid" />
                  </div>
                  <div>
                    <p className="product-title">{item.name}</p>
                    <span className="product-unit">{item.per_unit_value} {' '} {item.unit_name && item.unit_name}</span>
                    <p
                      className={`stock-status ${
                        parseInt(item.current_stock) > 0
                          ? "stock-status-in"
                          : "stock-status-out"
                      }`}
                    >
                      <span>
                        {parseInt(item.current_stock) > 0
                          ? "In stock"
                          : "Out of stock"}
                      </span>
                    </p>
                    <PriceCalculation item={item} />
                    {/* <div
                      className={
                        columnClassName === "col-md-3"
                          ? ""
                          : "d-flex justify-content-start"
                      }
                    > */}
                      {/* {
                                                item.average_rating != 0 && (
                                                    <ProductRating rating={item.average_rating} />
                                                )
                                            } */}
                    {/* </div> */}
                  </div>
                </div>
              </div>
              <div className="product-single-mini-cart">
              <button type='button' onClick={() => addToCart(item)} className='simple-btn product-btn'>
                <div className="simple-btn__inner">
                  <div className="simple-btn__icon">
                    <FontAwesomeIcon icon={faShoppingBag} />
                  </div>
                  <span className="simple-btn__txt">Add to cart</span>
                </div>
              </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )

  if(isSliding) {
    singleProduct = (
      <div className="product-card filter_column_3">
      <div className="product-card-body">
        <div onClick={() => redirectToProductDetailsPage(item)} style={{overflow: 'hidden'}}>
        <Image src={imageURL} alt={item.name} width={200} height={200} />
        <div className="product-card-body-inner">
          <p className="product-title">
            <Translate>{item.name}</Translate>
          </p>
          <span className="product-unit">{item.per_unit_value} {' '} {item.unit_name && item.unit_name}</span>
          <p
            className={`stock-status ${
              parseInt(item.current_stock) > 0
                ? "stock-status-in"
                : "stock-status-out"
            }`}
          >
            <span>
              {parseInt(item.current_stock) > 0
                ? "In stock"
                : "Out of stock"}
            </span>
          </p>
          <PriceCalculation item={item} />
          <div
            className={
              columnClassName === "col-md-3" || "col-md-2"
                ? ""
                : "d-flex justify-content-start"
            }
          >
          </div>
        </div>
        </div>
        <div className="product-single-mini-cart">
          <button type='button' onClick={() => addToCart(item)} className='simple-btn homepage-product-btn'>
            <div className="simple-btn__inner">
              <div className="simple-btn__icon">
                <FontAwesomeIcon icon={faShoppingBag} />
              </div>
              <span className="simple-btn__txt">Add to cart</span>
            </div>
          </button>
        </div>
      </div>
      </div>
    )
  }

  return singleProduct;
};

ProductSingleMini.propTypes = {
  item: PropTypes.object,
  columnClassName: PropTypes.string,
  cardClassName: PropTypes.string,
};

export default ProductSingleMini;

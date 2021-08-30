import React, { useEffect } from "react";
import Rater from "react-rater";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactImageZoom from "react-image-zoom";
import Link from "next/link";
import {
  addToCartAction,
  getCartsAction,
  updateCartQtyAction,
} from "../carts/_redux/action/CartAction";
import ProductDetailsDescription from "./ProductDetailsDescription";
import AddWishList from "../Wishlist/AddWishList";
import ProductRatings from "./ProductRatings";
import DeliveryFeatures from "./DeliveryFeatures";
import Slider from "react-slick";
import PriceCalculation from "../products/partials/PriceCalculation";
import { showToast } from "../master/Helper/ToastHelper";
import ProductMainList from "../products/ProductMainList";
import { useRouter } from "next/router";
import { formatCurrency } from "../../services/currency";

const ProductDetailInfo = (props) => {
  const dispatch = useDispatch();
  const { product } = props;
  const [quantity, setQuantity] = useState(1);
  const userData = useSelector((state) => state.UserDataReducer.userData);
  const { carts } = useSelector((state) => state.CartReducer);
  const [filterCarts, setFilterCarts] = useState(null);
  const [updatedID, setUpdatedID] = useState(null);
  const [previewImg, setPreviewImg] = useState("");

  const zoomImage = { width: 250, zoomWidth: 600, img: previewImg };

  const default_price =
    product.is_offer_enable && product.offer_selling_price !== 0
      ? product.offer_selling_price
      : product.default_selling_price;
  const [subTotal, setSubTotal] = useState("");

  const router = useRouter();
  const { asPath } = router;
  const queries = router.query;

  useEffect(() => {
    dispatch(getCartsAction());
  }, []);

  const handleChangePreviewImg = (image_url) => {
    setPreviewImg(image_url);
  };

  // const cartProduct = {
  //   id: product.id,
  //   name: product.name,
  //   quantity: quantity,
  //   isOffer: product.is_offer_enable,
  //   default_selling_price: product.default_selling_price,
  //   offer_selling_price: product.offer_selling_price,
  //   featured_image: product.featured_image,
  //   seller_id: product.business.id,
  //   seller_name: product.business.name,
  //   sku: product.sku,
  // }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  useEffect(() => {
    if (product) {
      const newFilterCarts = carts.find((item) => item.productID == product.id);
      setFilterCarts(newFilterCarts);
      if (typeof newFilterCarts !== "undefined" && newFilterCarts !== null) {
        setQuantity(newFilterCarts.quantity);
        setUpdatedID(newFilterCarts.productID);
        setSubTotal(newFilterCarts.quantity * default_price);
      }
    }
  }, [product, carts]);

  useEffect(() => {
    const featured_image = `${process.env.NEXT_PUBLIC_URL}images/products/${product.featured_image}`;
    setPreviewImg(featured_image);
  }, [asPath]);

  const updateQuantity = (quantity) => {
    if (
      typeof filterCarts !== "undefined" &&
      filterCarts !== null &&
      updatedID !== null
    ) {
      setQuantity(filterCarts.quantity);
      dispatch(updateCartQtyAction(updatedID, quantity));
    } else {
      setQuantity(quantity);
      setSubTotal(quantity * default_price);
    }
  };

  const addToCart = () => {
    if (parseInt(product.current_stock) === 0) {
      showToast("error", "This product is out of stock!");
    } else if (typeof filterCarts !== "undefined" && filterCarts !== null) {
      dispatch(updateCartQtyAction(updatedID, quantity));
    } else {
      dispatch(addToCartAction(product, { quantity }));
    }
  };

  const redirectToCheckoutPage = () => {
    if (process.browser) {
      const userData = localStorage.getItem("loginData");
      if (typeof userData === "undefined" || userData === null) {
        showToast("error", "Please Login to checkout");
        router.push("/login").then((_) => window.scrollTo(0, 0));
        return;
      }

      if (parseInt(product.current_stock) === 0) {
        showToast("error", "Product is out of stock!");
      } else {
        dispatch(addToCartAction(product));
        router.push("/checkout").then((_) => window.scrollTo(0, 0));
      }
    }
  };
console.log('product :>> ', product);
  return (
    <>
      {product !== "undefined" && product !== null && (
        <div className="product-info-page">
          <Breadcrumb>
            {typeof product.category !== "undefined" &&
              product.category !== null && (
                <Link href={`/categories/${product.category.slug}`}>
                  <Breadcrumb.Item
                    href={`/products?category=${product.category.slug}`}
                  >
                    {product.category.name}
                  </Breadcrumb.Item>
                </Link>
              )}

            {typeof product.sub_category !== "undefined" &&
              product.sub_category !== null && (
                <Link href={`/categories/${product.sub_category.slug}`}>
                  <Breadcrumb.Item
                    href={`/products?category=${product.sub_category.slug}`}
                  >
                    {product.sub_category.name}
                  </Breadcrumb.Item>
                </Link>
              )}

            {typeof product.sub_category2 !== "undefined" &&
              product.sub_category2 !== null && (
                <Link href={`/categories/${product.sub_category2.slug}`}>
                  <Breadcrumb.Item
                    href={`/products?category=${product.sub_category2.slug}`}
                  >
                    {product.sub_category2.name}
                  </Breadcrumb.Item>
                </Link>
              )}
            <Breadcrumb.Item active>{product.name}</Breadcrumb.Item>
          </Breadcrumb>

          {/**Product Details area****/}
          {previewImg && (
            <div className="product_details_section">
              <div className="">
                <div className="card shadow-md">
                  <div className="row ">
                    <div className="col-lg-9 bg-white">
                      <div className="">
                        <div className="row">
                          <div className="col-lg-4">
                            <div className=" d-none d-md-block">
                              <div
                                style={{
                                  height: "250px",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <ReactImageZoom
                                  className="zoom-image mt-3"
                                  {...zoomImage}
                                />
                              </div>
                            </div>
                            <div className=" d-block d-md-none text-center">
                              <img
                                src={previewImg}
                                alt="product preview image"
                                style={{ maxHeight: "180px" }}
                                className="img-fluid"
                              />
                            </div>
                            <div className="product_preview_gallery">
                              {product.images && product.images.length > 0 && (
                                <Slider {...settings}>
                                  <div>
                                    <img
                                      onClick={() =>
                                        handleChangePreviewImg(previewImg)
                                      }
                                      src={previewImg}
                                      className="multiple_preview_images pointer"
                                      alt=""
                                    />
                                  </div>
                                  {product.images.map((item, index) => (
                                    <div key={index + 1}>
                                      <img
                                        onClick={() =>
                                          handleChangePreviewImg(item.image_url)
                                        }
                                        src={item.image_url}
                                        className="multiple_preview_images pointer"
                                        alt=""
                                      />
                                    </div>
                                  ))}
                                </Slider>
                              )}
                              {product.images && product.images.length === 0 && (
                                <div>
                                  <img
                                    onClick={() =>
                                      handleChangePreviewImg(previewImg)
                                    }
                                    src={previewImg}
                                    className="multiple_preview_images pointer"
                                    alt=""
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="col-lg-8">
                            <div className="product_details_information py-2">
                              <h3 className="product_title">{product.name}</h3>

                              <div className="d-flex justify-content-between align-items-end">
                                <div>
                                  <div className="review_rating">
                                    <Rater
                                      total={5}
                                      interactive={false}
                                      rating={parseInt(product.average_rating)}
                                    />{" "}
                                    <span className="rating_value_text">
                                      {" "}
                                      {product.total_rating} Ratings{" "}
                                    </span>
                                  </div>
                                  <div className="product__details__brand">
                                    {typeof product.brand != "undefined" &&
                                      product.brand != null && (
                                        <Link
                                          href={`/brand/${product.brand.slug}`}
                                          className="LinkToBrandPage pointer"
                                        >
                                          <span>
                                            {" "}
                                            Brand Name:{" "}
                                            <span className="brand_name_in_details">
                                              {product.brand.name}
                                            </span>
                                          </span>
                                        </Link>
                                      )}
                                  </div>

                                  <div>
                                    {product.current_stock > 0 &&
                                      product.enable_stock ? (
                                      <div className="stock-area in-stock">
                                        <span>
                                          In Stock - {product.current_stock}{" "}
                                        </span>
                                      </div>
                                    ) : (
                                      <div className="stock-area out-stock">
                                        <span>Out of Stock</span>
                                      </div>
                                    )}
                                  </div>
                                </div>
                                <div>
                                  <span className="float-right mr-3">
                                    <AddWishList product={product} />
                                  </span>
                                </div>
                              </div>
                              <div className="mt-4">
                                <PriceCalculation item={product} />
                              </div>
                              <hr />

                              <div className="product_details_price">
                                {/* <PriceCalculation item={product} /> */}

                                <div className="d-flex justify-content-between align-items-center">
                                  <div className="quantity">
                                    <button
                                      disabled={quantity <= 1 ? true : false}
                                      onClick={() => updateQuantity(quantity - 1)}
                                      className={
                                        quantity <= 1 ? `not-allowed` : `pointer`
                                      }
                                    >
                                      <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                    <input
                                      type="text"
                                      value={quantity}
                                      onChange={(e) =>
                                        updateQuantity(e.target.value)
                                      }
                                    />
                                    <button
                                      className="pointer"
                                      onClick={() => updateQuantity(quantity + 1)}
                                    >
                                      <FontAwesomeIcon icon={faPlus} />
                                    </button>
                                  </div>
                                  <div className="badge mt-3">
                                    <p className="floating-cart__product-price">
                                      {quantity} <span>X</span>&nbsp;
                                      {formatCurrency(default_price)} ={" "}
                                      {formatCurrency(subTotal)}&nbsp;
                                    </p>
                                  </div>
                                </div>

                                <div className="d-flex mt-3 product-details-section">
                                  <div className="mr-2">
                                    <button
                                      className="btn buy_now_btn"
                                      onClick={() => redirectToCheckoutPage()}
                                    >
                                      Buy Now
                                    </button>
                                  </div>
                                  <div>
                                    <button
                                      className="btn add_to_cart_btn"
                                      onClick={() => addToCart()}
                                    >
                                      Add To Cart
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>


                          </div>
                        </div>
                      </div>

                      {/*Product Details Information*/}
                      <div className="mt-4">
                        {typeof product.description != "undefined" &&
                          product.description !== null && (
                            <ProductDetailsDescription product={product} />
                          )}
                      </div>

                      
                    </div>
                    {/*Location Section*/}
                    <div className="col-lg-3 bg-light">
                      <DeliveryFeatures product={product} />
                    </div>
                  </div>
                </div>
              </div>

              <ProductRatings product={product} />
              <div className="mb-5 mt-5">
                <p className="font-weight-bold product_details_people_viewed_title">
                  People who viewed this item also viewed
                </p>
                <ProductMainList
                  type=""
                  limit={6}
                  category={queries.category}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ProductDetailInfo;

import React, { useEffect } from "react";
import Rater from "react-rater";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import LazyLoad from "react-lazyload";
import InnerImageZoom from 'react-inner-image-zoom';

const ProductDetailInfo = (props) => {
  const dispatch = useDispatch();
  const { product } = props;
  const [quantity, setQuantity] = useState(1);
  const { carts } = useSelector((state) => state.CartReducer);
  const [filterCarts, setFilterCarts] = useState(null);
  const [updatedID, setUpdatedID] = useState(null);
  const [previewImg, setPreviewImg] = useState("");

  const default_price =
    product.is_offer_enable && product.offer_selling_price !== 0
      ? product.offer_selling_price
      : product.default_selling_price;
  const [subTotal, setSubTotal] = useState("");

  const router = useRouter();
  const { asPath } = router;

  useEffect(() => {
    dispatch(getCartsAction());
  }, []);

  const handleChangePreviewImg = (image_url) => {
    setPreviewImg(image_url);
  };

  const settings = {
    arrows: true,
    dots: false,
    infinite: false,
    speed: 500,
    draggable: true,
    focusOnSelect: false,
    slidesToShow: 4,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  };

  useEffect(() => {
    if (product) {
      const newFilterCarts = carts.find((item) => item.productID == product.id);

      if (typeof newFilterCarts !== "undefined" && newFilterCarts !== null) {
        setQuantity(newFilterCarts.quantity);
        setUpdatedID(newFilterCarts.productID);
        setSubTotal(newFilterCarts.quantity * default_price);
      } else {
        // @todo - Manage this counting using MRP while completed in API end
        setQuantity(1);
        setSubTotal(1 * default_price);
      }

      setFilterCarts(newFilterCarts);
    }
  }, [product]);

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

  return (
    <>
      {product !== "undefined" && product !== null && (
        <div className="product-info-page">
          <Breadcrumb>
            {typeof product.category !== "undefined" &&
              product.category !== null && (
                <Link href={`/products?category=${product.category.id}`}>
                  <Breadcrumb.Item
                    href={`/products?category=${product.category.id}`}
                  >
                    {product.category.name}
                  </Breadcrumb.Item>
                </Link>
              )}

            {typeof product.sub_category !== "undefined" &&
              product.sub_category !== null && (
                <Link href={`/products?category=${product.sub_category.id}`}>
                  <Breadcrumb.Item
                    href={`/products?category=${product.sub_category.id}`}
                  >
                    {product.sub_category.name}
                  </Breadcrumb.Item>
                </Link>
              )}

            {typeof product.sub_category2 !== "undefined" &&
              product.sub_category2 !== null && (
                <Link href={`/products?category=${product.sub_category2.id}`}>
                  <Breadcrumb.Item
                    href={`/products?category=${product.sub_category2.id}`}
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
                          <div className="col-lg-6 mt-2">
                              <InnerImageZoom 
                                src={previewImg} 
                                zoomSrc={previewImg}
                                zoomType="hover"
                                width={500}
                                height={500}
                                zoomScale={1.7}
                                alt={previewImg}
                                hasSpacer
                              />
                            <div className="product_preview_gallery mt-2">
                              <Slider {...settings}>
                                {product.images && product.images.length > 0 && product.images.map((item, index) => (
                                  <div key={index}>
                                    <div onClick={() => handleChangePreviewImg(item.image_url) } style={{padding: '5px', width: '100%', height: '100px'}}>
                                      <img  style={{maxWidth: '100%', objectFit: 'contain', height: '100%', border: '1px solid #ddd', padding: '5px'}} src={item.image_url} alt={item.image_url} />
                                    </div>
                                  </div>
                                ))}
                              </Slider>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="product_details_information py-2">
                              <h2 className="product_title">{product.name}</h2>

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
                              <span className="product-unit">{product.per_unit_value} {' '} {product.unit && product.unit.actual_name && product.unit.actual_name}</span>
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
                    <div className="col-lg-3 pt-3 pt-md-0" style={{background: '#f7ae9d26'}}>
                      {
                        product.business.location && (
                          <DeliveryFeatures product={product} />
                        )
                      }
                    </div>
                  </div>
                </div>
              </div>
              <LazyLoad height={200} once>
                <ProductRatings product={product} />
              </LazyLoad>
              <div className="mb-5 mt-5">
                <p className="font-weight-bold product_details_people_viewed_title">
                  People who viewed this item also viewed
                </p>
                <LazyLoad height={400} once>
                  <ProductMainList
                    type=""
                    limit={6}
                    category={product.category_id}
                  />
                </LazyLoad>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ProductDetailInfo;
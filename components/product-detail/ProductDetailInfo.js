import React from "react";
import Rater from "react-rater";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import SimpleBtn from "../master/SimpleBtn/SimpleBtn";
import ReactImageZoom from "react-image-zoom";
import { useRouter } from "next/router";
import Link from "next/link";
import ReactHtmlParser from "react-html-parser";
import { addToCartAction, getCartsAction, updateCartQtyAction } from "../carts/_redux/action/CartAction";
import ProductDetailsDescription from "./ProductDetailsDescription";
import AddWishList from "../Wishlist/AddWishList";
import CartQuantity from "../carts/partials/CartQuantity";
import ProductRatings from "./ProductRatings";
import DeliveryFeatures from "./DeliveryFeatures";

const ProductDetailInfo = (props) => {
  const { product } = props;

  //product quantity set
  const [quantity, setQuantity] = useState(1);

  const router = useRouter();
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.CartReducer.carts);

  useEffect(() => {
    dispatch(getCartsAction());
  }, []);



  const featured_image = `${process.env.NEXT_PUBLIC_URL}public/images/products/${product.featured_image}`;
  const [previewImg, setPreviewImg] = useState(featured_image);
  const handleChangePreviewImg = (image) => {
    setPreviewImg(image.image_url);
  };
  const zoomImage = { height: 280, zoomWidth: 700, img: previewImg };
  // const zoomImage = {width: 400, height: 250, zoomWidth: 500, img: previewImg}
  const userData = useSelector((state) => state.UserDataReducer.userData);

  // const handleBuyProduct = (cartProduct, id) => {
  //   dispatch(addToCartAction(cartProduct, id));
  //   if (userData !== null) {
  //     router.push("/placeorder");
  //   } else if (userData === null) {
  //     router.push("/login");
  //   }
  // };

  // let zoomImgProps;
  // if (product) {
  //   zoomImgProps = {
  //     width: 400,
  //     zoomWidth: 500,
  //     zoomStyle: `opacity: 0.4;`,
  //     img: cartProduct.productImage,
  //   };
  // }

  const cartProduct = {
    id: product.id,
    name: product.name,
    quantity: quantity,
    isOffer: product.is_offer_enable,
    default_selling_price: product.default_selling_price,
    offer_selling_price: product.offer_selling_price,
    featured_image: product.featured_image,
    seller_id: product.business.id,
    seller_name: product.business.name,
    sku: product.sku,
  }

  console.log('product :>> ', product);
  return (
    <>
      {
        product !== null && (
          <div className="container-fluid">
            <Breadcrumb>
              {
                typeof product.category != "undefined" && product.category != null &&
                <Link href={`/categories/${product.category.slug}`}>
                  <Breadcrumb.Item href={`/products?category=${product.category.slug}`}>
                    {product.category.name}
                  </Breadcrumb.Item>
                </Link>
              }

              {
                typeof product.sub_category != "undefined" && product.sub_category != null &&
                <Link href={`/categories/${product.sub_category.slug}`}>
                  <Breadcrumb.Item href={`/products?category=${product.sub_category.slug}`}>
                    {product.sub_category.name}
                  </Breadcrumb.Item>
                </Link>
              }

              {
                typeof product.sub_category2 != "undefined" && product.sub_category2 != null &&
                <Link href={`/categories/${product.sub_category2.slug}`}>
                  <Breadcrumb.Item href={`/products?category=${product.sub_category2.slug}`}>
                    {product.sub_category2.name}
                  </Breadcrumb.Item>
                </Link>
              }
              <Breadcrumb.Item active>{product.name}</Breadcrumb.Item>
            </Breadcrumb>

            {/**Product Details area****/}
            <div className="product_details_section">
              <div className="container-fluid">
                <div className="card shadow-md">
                  <div className="row ">
                    <div className="col-lg-9 bg-white">
                      <div className="p-3">
                        <div className="row">
                          <div className="col-lg-4">
                            <div className="custom_image_position">
                              <ReactImageZoom
                                className="zoom-image mt-3"
                                {...zoomImage}
                              />
                            </div>
                            <div className="d-flex m-1 border-top pt-4 image-cart">
                              <img onClick={() => handleChangePreviewImg({ image_url: featured_image })} src={featured_image} className="img-thumbnail multiple_preview_images pointer" alt="" />
                              {
                                product.images && product.images.length > 0 && product.images.map((item, index) => (
                                  <img onClick={() => handleChangePreviewImg(item)} src={item.image_url} className="img-thumbnail multiple_preview_images" alt="" />
                                ))
                              }
                            </div>
                          </div>
                          <div className="col-lg-8">
                            <h3 className="product_titles">{product.name}</h3>

                            <div className="d-flex justify-content-between align-items-end">
                              <div>
                                <div className="review_rating">
                                  <Rater total={5} interactive={false} rating={parseInt(product.average_rating)} /> <span className="rating_value_text"> {product.total_rating} Ratings </span>
                                </div>
                                <div>
                                  {
                                    typeof product.brand != "undefined" && product.brand != null &&

                                    <Link href={`/brand/${product.brand.slug}`} className="LinkToBrandPage pointer">
                                      <span> Brand Name: <span className="brand_name_in_details">
                                        {product.brand.name}
                                      </span>
                                      </span>
                                    </Link>

                                  }
                                </div>

                                <div>
                                  {
                                    product.current_stock > 0 && product.enable_stock ?
                                      <div className="stock-area in-stock">
                                        <span>In Stock - {product.current_stock} </span>
                                      </div>
                                      :
                                      <div className="stock-area out-stock">
                                        <span>Out of Stock</span>
                                      </div>
                                  }
                                </div>
                              </div>
                              <div>
                                <span className="float-right mr-3">
                                  <AddWishList product={product} />
                                </span>
                              </div>
                            </div>
                            <hr />

                            <div className="product_details_price">
                              {product.is_offer_enable == false && (
                                <h2 className="product_details_current_price">
                                  Tk-{product.default_selling_price}
                                </h2>
                              )}

                              {product.is_offer_enable == true && (
                                <>
                                  <h4 className="product_details_current_price">
                                    Tk-{product.offer_selling_price
                                      ? product.offer_selling_price
                                      : product.default_selling_price}
                                  </h4>
                                  <h6 className="product_details_default_price">
                                    Tk-{product.default_selling_price}
                                  </h6>
                                </>
                              )}

                              <div className="quantity">
                                <button
                                  disabled={quantity <= 1 ? true : false}
                                  onClick={() => setQuantity(quantity - 1)}
                                  className={quantity <= 1 ? `not-allowed` : `pointer`}
                                >
                                  <FontAwesomeIcon icon={faMinus} />
                                </button>
                                <input type="text" value={quantity} onChange={() => { }} />
                                <button
                                  className="pointer"
                                  onClick={() => setQuantity(quantity + 1)}
                                >
                                  <FontAwesomeIcon icon={faPlus} />
                                </button>
                              </div>

                              <div className="row mt-3">
                                <div className="col-md-6">
                                  <button className="btn buy_now_btn">Buy Now</button>
                                </div>
                                <div className="col-md-6">
                                  <button className="btn add_to_cart_btn" onClick={() => dispatch(addToCartAction(cartProduct))}>Add To Cart</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*Location Section*/}
                    <div className="col-lg-3 bg-light">
                      <DeliveryFeatures />
                    </div>
                  </div>
                </div>
              </div>
              {
                typeof product.description != 'undefined' && product.description !== null &&
                <ProductDetailsDescription product={product} />
              }
              <ProductRatings product={product} />

            </div>
          </div>
        )
      }
    </>
  );
};

export default ProductDetailInfo;

import React from "react";
import { FaCartPlus } from "react-icons/fa";
import Rater from "react-rater";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import ReactImageFallback from "react-image-fallback";
import AddIcon from "@material-ui/icons/Add";
import { Remove } from "@material-ui/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getCartsAction,
  addToCartAction,
  updateCartQtyAction,
} from "../../../../store/actions/orders/CartAction";

import ReactImageZoom from 'react-image-zoom';
import { useRouter } from "next/router";
import { getUserDataAction } from "../../../getUserData/Action/UserDataAction";
import WishList from "../../../WishList/WishList";
import ProductDetailSidebar from "./ProductDetailSidebar";
import ProductDetailsDescrition from "./ProductDetailsDescrition";
import ProductRatings from "./ProductRatings";
import HomeFeaturList from "../home/HomeFeaturList";


const ProductDetailInfo = (props) => {
  const { product } = props;
  console.log('product :>> ', product);

  //product quantity set
  const [quantity, setQuantity] = useState(1);
  const [idAdded, setIsAdded] = useState(false);
  const router = useRouter()

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.cart.loading);
  const Getcarts = useSelector((state) => state.cart.carts);
  const cartState = useSelector((state) => state.cart);
  const carts = useSelector((state) => state.cart.carts);
  const findCurrentCart = carts.find((id) => id.productID === product.id);

  useEffect(() => {
    dispatch(getCartsAction());
    dispatch(getUserDataAction());
  }, []);

  // // manage product price with current quantity
  // if (product.is_offer_enable !== true) {
  //     const newPrice = product.default_selling_price * quantity;
  //     product.price = newPrice;
  //     product.quantity = quantity;
  // } else {
  //     const TotalPrice = product.offer_selling_price * quantity;
  //     product.price = TotalPrice;
  //     product.quantity = quantity;
  // }

  const cartProduct = {
    productID: product.id,
    productName: product.name,
    quantity: quantity,
    price: product.default_selling_price,
    offerPrice: product.offer_selling_price,
    productImage: `${process.env.NEXT_PUBLIC_URL}images/products/${product.featured_image}`,
    business: {
      businessID: product.business_id,
      businessName: product.business.name,
      businessLogo: `${process.env.NEXT_PUBLIC_URL}images/vendors/${product.business.logo_url}`,
    },
  };
  // increase quantity
  const increaseQuantity = (id, quantity) => {
    carts.find(
      (item) => item.productID === id && setQuantity((item.quantity += 1))
    );
    dispatch(updateCartQtyAction(id, (quantity += 1)));
    dispatch(addToCartAction(cartProduct, id));
  };

  //decrease quantity
  const decrementQunatity = (id, quantity) => {
    carts.find(
      (item) =>
        item.productID === id &&
        item.quantity > 1 &&
        setQuantity((item.quantity -= 1))
    );
    if (quantity > 1) {
      dispatch(updateCartQtyAction(id, (quantity -= 1)));
    }
  };

  const addToCart = (cartProduct, id) => {
    dispatch(addToCartAction(cartProduct, id));
  };

  const featured_image = `${process.env.NEXT_PUBLIC_URL}images/products/${product.featured_image}`;
  const [previewImg, setPreviewImg] = useState(featured_image);
  const handleChangePreviewImg = (image) => {
    setPreviewImg(image.image_url);
  }
  const zoomImage = { zoomWidth: 500, img: previewImg }
  // const zoomImage = {width: 400, height: 250, zoomWidth: 500, img: previewImg}
  const userData = useSelector((state) => state.UserDataReducer.userData)

  const handleBuyProduct = (cartProduct, id) => {
    dispatch(addToCartAction(cartProduct, id));
    if (userData !== null) {
      router.push('/placeorder')
    } else if (userData === null) {
      router.push('/login')
    }
  }

  return (
    <>
      {product != null && (
        <div className="homebanner single-product-section bp">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="elegentchairmenu">
                  <Breadcrumb>
                    {
                      typeof product.category != "undefined" && product.category != null &&
                      <Breadcrumb.Item href={`/products?category=${product.category.slug}`}>
                        {product.category.name}
                      </Breadcrumb.Item>
                    }

                    {
                      typeof product.sub_category != "undefined" && product.sub_category != null &&
                      <Breadcrumb.Item href={`/products?category=${product.sub_category.slug}`}>
                        {product.sub_category.name}
                      </Breadcrumb.Item>
                    }

                    {
                      typeof product.sub_category2 != "undefined" && product.sub_category2 != null &&
                      <Breadcrumb.Item href={`/products?category=${product.sub_category2.slug}`}>
                        {product.sub_category2.name}
                      </Breadcrumb.Item>
                    }


                    <Breadcrumb.Item active>{product.name}</Breadcrumb.Item>
                  </Breadcrumb>
                </div>
              </div>
            </div>

            <div className="row single-product-box">
              <div className="col-lg-8">
                <div className="row">

                  <div className="col-lg-5">
                    <div className="singlechair p-5">
                      {/* <ReactImageFallback
                    // src={`${process.env.NEXT_PUBLIC_URL}images/products/${product.featured_image}`}
                    src={previewImg}
                    fallbackImage="/images/default/fallback-image.png"
                    initialImage="/images/default/fallback-image.png"
                    alt={product.name}
                    className=""
                  /> */}

                      <ReactImageZoom
                        className="zoom-image mt-3 card"
                        {...zoomImage}
                      />

                      <div className="d-flex m-1 border-top pt-4">
                        <img onClick={() => handleChangePreviewImg({ image_url: featured_image })} src={featured_image} className="img-thumbnail multiple_preview_images" alt="" />
                        {
                          product.images && product.images.length > 0 && product.images.map((item, index) => (
                            <img onClick={() => handleChangePreviewImg(item)} src={item.image_url} className="img-thumbnail multiple_preview_images" alt="" />
                          ))
                        }
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-7">
                    <div className="chairdetails">
                      <h1>{product.name}</h1>

                      <div className="review">
                        <Rater total={5} rating={product.average_rating} /> <span> {product.total_rating} Ratings </span>

                        <span className="float-right">
                          <WishList product={product} />
                        </span>
                      </div>

                      <div>
                        {
                          typeof product.brand != "undefined" && product.brand != null &&
                          <>
                            Brand: {product.brand.name}
                          </>
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

                      <div className="chairdetailstext">
                        {product.is_offer_enable === false && (
                          <h2 className="text-warning">
                            ৳{" "}
                            {product.default_selling_price}{" "}
                          </h2>
                        )}

                        {product.is_offer_enable === true && (
                          <>
                            <h2 className="text-warning">
                              ৳{" "}
                              {product.offer_selling_price
                                ? product.offer_selling_price
                                : product.default_selling_price}{" "}
                            </h2>
                            <h4 className="text-danger">
                              ৳ {product.default_selling_price}
                            </h4>
                          </>
                        )}

                        {/* <h4 className="text-danger">৳ 1200</h4>
                                        <span className="text-dark">-38%</span> */}
                      </div>
                      {/* <div className="Promotion">
                                        <h6 className="float-left">Promotions</h6>
                                        <h6 className="float-right">Spend ৳ 2000 get ৳ 200 off
                                        <DropdownButton  title="Dropdown button">
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </DropdownButton>
                                            </h6>
                                        </div> */}

                      <div className="chaircolor">
                        {/* <h2 className="mt-4">Color:</h2> */}

                        {/**Available color */}

                        {/* <p className="mb-4">
                      Color:
                      <span className="colorType border rounded text-dark">
                        Red
                      </span>
                      <span className="colorTypeTwo border rounded text-primary ">
                        Blue
                      </span>
                      <span className="colorType border rounded text-dark">
                        Yellow
                      </span>
                    </p> */}


                        {/* <h2 className="">
                      Quantity :
                      <button
                        className="btn btn-light quantity-btn decrement bg-light border rounded-circle text-dark ml-3"
                        onClick={(id, quantity) =>
                          decrementQunatity(cartProduct.productID, cartProduct.quantity)} >
                        {" "}
                        <Remove />
                      </button>
                      <span className="colorType border rounded text-dark">
                        {findCurrentCart && findCurrentCart.quantity
                          ? findCurrentCart.quantity
                          : quantity}
                      </span>
                      <button className="btn btn-light quantity-btn  increment bg-light border rounded-circle text-dark ml-2" onClick={(id, quantity) =>
                        increaseQuantity(cartProduct.productID, cartProduct.quantity)} >
                        <AddIcon />
                      </button>
                    </h2> */}

                        <h2>
                          Quantity:
                          <div className="cart-quantity-area">
                            <button
                              className="btn btn-light quantity-btn decrement bg-light text-dark"
                              onClick={(id, quantity) => decrementQunatity(cartProduct.productID, cartProduct.quantity)} >

                              {" "}
                              <Remove />
                            </button>
                            <span className="colorType rounded text-dark">
                              {/* {findCurrentCart && findCurrentCart.quantity
                            ? findCurrentCart.quantity
                            : quantity} */}
                              {quantity}
                            </span>
                            <button
                              className="btn btn-light quantity-btn  increment bg-light text-dark ml-2"
                              onClick={(id, quantity) => increaseQuantity(cartProduct.productID, cartProduct.quantity)} >
                              <AddIcon />
                            </button>
                          </div>
                        </h2>


                      </div>
                      <div className="stock cart two">
                        <button onClick={() => addToCart(cartProduct, product.id)}>
                          Add to cart
                        </button>
                      </div>
                      <div className="stock cart">
                        <button onClick={() => handleBuyProduct(cartProduct, product.id)}>Buy Now</button>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </div>
                <ProductDetailsDescrition product={product} />
                <ProductRatings product={product} />
                <HomeFeaturList product={product} />
              </div>

              <div className="col-lg-4 deliverysection">
                <ProductDetailSidebar product={product} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetailInfo;

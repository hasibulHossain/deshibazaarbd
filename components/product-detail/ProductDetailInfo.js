import React from "react";
import Rater from "react-rater";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import AddIcon from "@material-ui/icons/Add";
import { Remove } from "@material-ui/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
    getCartsAction,
    addToCartAction,
    updateCartQtyAction,
} from "../../components/_redux/CartProduct/Action/CartAction";

import ReactImageZoom from 'react-image-zoom';
import { useRouter } from "next/router";
import Link from "next/link";


const ProductDetailInfo = (props) => {
    const { product } = props;

    //product quantity set
    const [quantity, setQuantity] = useState(1);
    
    const router   = useRouter()
    const dispatch = useDispatch();
    const carts    = useSelector(state => state.CartReducer.carts)

    useEffect(() => {
        dispatch(getCartsAction());
    }, []);

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
    const zoomImage = { zoomWidth: 700, zoomWidth: 700, img: previewImg }
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
                                </div>
                            </div>
                        </div>

                        <div className="row single-product-box">
                            <div className="col-lg-8">
                                <div className="row">

                                    <div className="col-lg-5">
                                        <div className="singlechair p-5">

                                            <ReactImageZoom
                                                className="zoom-image mt-3 card"
                                                {...zoomImage}
                                            />

                                            <div className="d-flex m-1 border-top pt-4 image-cart">
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
                                            </div>

                                            <div>
                                                {
                                                    typeof product.brand != "undefined" && product.brand != null &&

                                                    <Link href={`/brand/${product.brand.slug}`} className="LinkToBrandPage">
                                                        <span>
                                                            Brand Name: {product.brand.name}
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
                                            </div>

                                            <div className="chaircolor">
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
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductDetailInfo;
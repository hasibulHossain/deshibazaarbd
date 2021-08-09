import React, { useState, useEffect } from "react";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactImageZoom from "react-image-zoom";
import Link from "next/link";
import PriceCalculation from "./partials/PriceCalculation";
import ShareProduct from "./partials/ShareProduct";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction, getCartsAction, updateCartQtyAction } from "../carts/_redux/action/CartAction";
import { showToast } from "../master/Helper/ToastHelper";
import router from "next/router";
import { toggleProductModalAction } from "./_redux/Action/ProductAction";
import LoadingSpinner from "../master/LoadingSpinner/LoadingSpinner";
import { activeCurrency, formatCurrency } from "../../services/currency";

const ProductSingleFull = ({ product }) => {

    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const [previewImg, setPreviewImg] = useState(null);
    const { carts } = useSelector((state) => state.CartReducer)
    const [filterCarts, setFilterCarts] = useState(null)
    const [updatedID, setUpdatedID] = useState(null)
    
    const default_price    = ( product.is_offer_enable && product.offer_selling_price !== 0 ) ? product.offer_selling_price: product.default_selling_price;

    const [subTotal, setSubTotal] = useState(default_price)

   

    const zoomImg = { width: 200, height: 250, zoomWidth: 600, img: previewImg };


    useEffect(() => {
        if (product) {
            setPreviewImg(product.featured_url);
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
        dispatch(getCartsAction())
    }, []);

    const addToCart = () => {
        if (parseInt(product.current_stock) === 0) {
            showToast("error", "This product is out of stock!");
        } else if (typeof filterCarts !== "undefined" && filterCarts !== null) {
            showToast("error", "This product is already added in your cart. Please update quantity!");
        } else {
            dispatch(addToCartAction(product, { quantity }));
        }
    }

    const updateQuantity = (quantity) => {
        if (typeof filterCarts !== "undefined" && filterCarts !== null && updatedID !== null) {
            setQuantity(filterCarts.quantity);
            dispatch(updateCartQtyAction(updatedID, quantity));
        } else {
            setQuantity(quantity);
            setSubTotal(quantity * default_price);
        }

    }


    const redirectToCheckoutPage = () => {
        if (parseInt(product.current_stock) === 0) {
            showToast("error", "This product is out of stock!");
        } else {
            dispatch(addToCartAction(product));
            router.push("/checkout")

        }
    }

    const redirectToProductDetailsPage = (product) => {
        dispatch(toggleProductModalAction(''));
        router.push("/products/" + product.sku);
    }

    return (
        <>
            {product ? (
                <div className="row p-3">
                    <div className="col-md-1">
                        <div className="product_details_img_gallery">
                            <img
                                src={product.featured_url}
                                className={previewImg == product.featured_url ? "select_img" : ""}
                                onClick={() => setPreviewImg(product.featured_url)}
                                alt={product.name}
                            />
                            {product.images &&
                                product.images.length > 0 &&
                                product.images.map((img, index) => (
                                    <img
                                        src={img.image_url}
                                        className={
                                            previewImg == img.image_url ? "select_img" : ""
                                        }
                                        alt={img.image_title}
                                        key={index}
                                        onClick={() => setPreviewImg(img.image_url)}
                                    />
                                ))}
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="product_img">
                            {/* <ReactImageZoom
                                {...zoomImg}
                            /> */}
                            <img src={previewImg} alt={product.name} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="product_details_section">
                            <h3 className="product_title pointer" onClick={() => redirectToProductDetailsPage(product)}>
                                {product.name && product.name}
                            </h3>
                            {/* <Link href={"/products/" + product.sku}>
                                <h3 className="product_title pointer">
                                    {product.name && product.name}
                                </h3>
                            </Link> */}

                            <div className="h3 product_price">
                                <PriceCalculation item={product} />
                            </div>

                            <p className="product_description">
                                {product.short_description && product.short_description}
                            </p>

                            <div className="product_details_quantity_section">
                                <div>
                                    <h6>Quantity</h6>
                                    <div className="quantity">
                                        <button
                                            disabled={quantity <= 1 ? true : false}
                                            onClick={() => updateQuantity(quantity - 1)}
                                            className={quantity <= 1 ? `not-allowed` : `pointer`}
                                        >
                                            <FontAwesomeIcon icon={faMinus} />
                                        </button>
                                        <input type="text" value={quantity} onChange={e => updateQuantity(e.target.value)} />
                                        <button
                                            className="pointer"
                                            onClick={() => updateQuantity(quantity + 1)}
                                        >
                                            <FontAwesomeIcon icon={faPlus} />
                                        </button>
                                    </div>
                                    <p className="floating-cart__product-price mt-3">
                                        {quantity} <span>X</span>&nbsp;
                                        {formatCurrency(default_price)} = {formatCurrency(subTotal)}&nbsp;
                                        {activeCurrency('code')}
                                    </p>
                                </div>
                                <div className="mr-3">
                                    <h6>Pick your colo</h6>
                                    <div className="color_picker">
                                        <p className="colorBox" style={{ backgroundColor: "#2df" }}></p>
                                        <p className="colorBox" style={{ backgroundColor: "#4c3" }}></p>
                                        <p className="colorBox" style={{ backgroundColor: "#7d8" }}></p>
                                    </div>
                                </div>
                                <div className="d-flex mt-3">
                                    <div className="button addToCartBtn"
                                        disabled={true}
                                        onClick={() => addToCart()}
                                    >Add to cart</div>
                                    <div className="button buyBtn" onClick={() => redirectToCheckoutPage()}>Buy now</div>
                                </div>
                            </div>
                            <div className="product_details_bottom mt-2">
                                <div>
                                    <div className="category_tags d-flex">
                                        Categories:
                                        <p className="">
                                            {product.category && product.category.name}
                                        </p>
                                    </div>
                                    <div className="category_tags d-flex">
                                        Tags:
                                        <p className="category_tags">
                                            {/* {product.tags && product.tags} */}
                                        </p>
                                    </div>
                                </div>
                                <div className="Product_bottom_socail_media">
                                    <ShareProduct product={product} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    {/* <p>Loading...</p> */}
                    <LoadingSpinner text="Loading Product..." />
                </div>
            )}
        </>
    );
};

export default ProductSingleFull;

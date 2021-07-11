import React, { useState, useEffect } from "react";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactImageZoom from "react-image-zoom";
import Link from "next/link";
import PriceCalculation from "./partials/PriceCalculation";
import ShareProduct from "./partials/ShareProduct";

const ProductSingleFull = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const [previewImg, setPreviewImg] = useState(null);
    const zoomImg = { width: 200, height: 250, zoomWidth: 600, img: previewImg };

    useEffect(() => {
        if (product) {
            setPreviewImg(product.featured_url);
        }
    }, [product]);

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
                            <Link href={"/products/" + product.sku}>
                                <h3 className="product_title pointer">
                                    {product.name && product.name}
                                </h3>
                            </Link>

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
                                    <div className="button addToCartBtn">Add to cart</div>
                                    <div className="button buyBtn">Buy now</div>
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
                    <p>Loading...</p>
                </div>
            )}
        </>
    );
};

export default ProductSingleFull;

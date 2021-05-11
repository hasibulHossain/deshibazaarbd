import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import SocialMedia from '../Footer/SocialMedia';
import ReactImageZoom from 'react-image-zoom';

const BestSellerDetails = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const [previewImg, setPreviewImg] = useState(product.productImg)
    const previewImage = { zoomWidth: 200, "vertical": 2, "horizontal": 5, img: previewImg };
    return (
        <>
            <div className="row p-3">
                <div className="col-md-1">
                    <div className="product_details_img_gallery">
                        <img src={product.productImg} onClick={() => setPreviewImg(product.productImg)} alt="product image gallery" />
                        {
                            product.productGallery.length > 0 && product.productGallery.map((img, index) => (
                                <img src={img.img} alt="product image gallery" key={index}
                                    onClick={() => setPreviewImg(img.img)}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="product_img">
                        {/* <img src={product.productImg} alt={product.title} /> */}
                        <ReactImageZoom {...previewImage} className="product-details-img" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="product_details_section">
                        <h3 className="product_title">{product.title}</h3>
                        <div className="h3 product_price">
                            ${product.price}
                            <span className="product_offerPrice">
                                ${product.offerPrice}
                            </span>
                        </div>
                        <p className="product_description">
                            {product.productDetails}
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
                                    <input type="text" value={quantity} />
                                    <button className="pointer" onClick={() => setQuantity(quantity + 1)}>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </button>
                                </div>
                            </div>
                            <div className="mr-3">
                                <h6>Pick your colo</h6>
                                <div className="color_picker">
                                    {
                                        product.color.length > 0 && product.color.map((singleColor, colorIndex) => (
                                            <p className="colorBox" style={{ backgroundColor: singleColor.colorCode }}>
                                            </p>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="d-flex mt-3">
                                <div className="button addToCartBtn">
                                    Add to cart
                                </div>
                                <div className="button buyBtn">
                                    buy now
                                </div>
                            </div>
                        </div>
                        <div className="product_details_bottom mt-2">
                            <div>
                                <div className="category_tags d-flex">
                                    Categories:
                                <p className="">
                                        Vagetables
                                </p>
                                </div>
                                <div className="category_tags d-flex">
                                    Tags:
                                <p className="">
                                        Vegetables
                                </p>
                                </div>
                            </div>
                            <SocialMedia />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BestSellerDetails;
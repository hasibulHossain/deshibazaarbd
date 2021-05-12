import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import SocialMedia from '../Footer/SocialMedia';
import ReactImageZoom from 'react-image-zoom';

const FeaturedProductDetails = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const [previewImg, setPreviewImg] = useState(product.productImg)
    const previewImage = {
        zoomWidth: 400,
        // vertical: 1,
        // horizontal: 2,
        scale: 0.5,
        zoomLensStyle:  'opacity: 0.7;background-color: #ff3e2081;',
        img: previewImg
    };

    console.log('product :>> ', product);
    return (
        <>
            <div className="row p-3">
                <div className="col-md-1">
                    <div className="product_details_img_gallery">
                        <img src={product.productImg} onClick={() => setPreviewImg(product.productImg)} alt="product image gallery" />
                        {
                            product.productGallery && product.productGallery.length > 0 && product.productGallery.map((img, index) => (
                                <img src={img.img} className={previewImage.img == img.img.img ? "select_img" : ""} alt="product image gallery" key={index}
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
                        <h3 className="product_title">{product.title && product.title}</h3>
                        <div className="h3 product_price">
                            ${product.price && product.price}
                            <span className="product_offerPrice">
                                ${product.offerPrice && product.offerPrice}
                            </span>
                        </div>
                        <p className="product_description">
                            {product.productDetails && product.productDetails}
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
                                        product.color && product.color.length > 0 && product.color.map((singleColor, colorIndex) => (
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
                                        {product.categories && product.categories}
                                    </p>
                                </div>
                                <div className="category_tags d-flex">
                                    Tags:
                            <p className="category_tags">
                                        {product.tags && product.tags}
                                    </p>
                                </div>
                            </div>
                            <div className="Product_bottom_socail_media">
                                <SocialMedia />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeaturedProductDetails;
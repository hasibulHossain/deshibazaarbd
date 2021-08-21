import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

import PriceCalculation from "./partials/PriceCalculation";
import ProductRating from "./partials/ProductRating";
import { useDispatch } from "react-redux";
import { toggleProductModalAction } from "./_redux/Action/ProductAction";
import { addToCartAction } from '../carts/_redux/action/CartAction';
import { showToast } from '../master/Helper/ToastHelper';
import AddWishList from '../Wishlist/AddWishList';
import Translate from '../translation/Translate';

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
const ProductSingleMini = ({ item = {}, columnClassName = 'col-md-2', productKey = 0, length = 0, cardClassName = 'product-card' }) => {

    const dispatch = useDispatch();
    const cardClass = productKey !== length ? '' : 'border-right-0';

    const addToCart = (item) => {
        if (parseInt(item.current_stock) === 0) {
            showToast("error", "This product is out of stock!");
        } else {
            dispatch(addToCartAction(item));
        }
    }

    // const imageLoader = ({ src, width, quality }) => {
    //     return `https://icon-library.com/images/img-icon/img-icon-0.jpg`
    // }

    const imageURL = `${process.env.NEXT_PUBLIC_URL}images/products/${item.featured_image}`;

    return (
        
        <div className={`${(columnClassName === "col-md-2" || columnClassName === "col-md-3") ? columnClassName + 'col-xl-2 col-lg-3 col-md-6 col-sm-6 col-12' : "col-12"}`}>
            <div className={`${cardClassName} ${cardClass} ${(columnClassName === "col-md-2" || columnClassName === "col-md-3") ? "filter_column_3" : "filter_column_10"} `}>
                <div className="product-purchase-section">
                    <button>
                        <FontAwesomeIcon className="add_to_cart" icon={faShoppingBag}
                            onClick={() => addToCart(item)}
                        />
                    </button>
                    <button>
                        <AddWishList product={item} />
                        {/* <FontAwesomeIcon className="withlist" icon={faHeart} /> */}
                    </button>
                    {/* <button>
                        <FontAwesomeIcon className="details" icon={faListAlt} />
                    </button> */}
                </div>

                <div className={`product-card-body`} onClick={() => dispatch(toggleProductModalAction(item.sku))}>
                    {
                        columnClassName === "col-md-2" && (
                            <>
                                <img src={imageURL} className="img-fluid" />
                                <div>
                                    <p className="product-title">
                                        <Translate>{item.name}</Translate>
                                    </p>
                                    <p className={`stock-status ${parseInt(item.current_stock) > 0 ? 'stock-status-in' : 'stock-status-out'}`}>
                                        <span>{parseInt(item.current_stock) > 0 ? 'In stock' : 'Out of stock'}</span>
                                    </p>
                                    <PriceCalculation item={item} />
                                    <div className={columnClassName === "col-md-3" || "col-md-2" ? "" : "d-flex justify-content-start"}>
                                        <ProductRating rating={item.average_rating} />
                                    </div>
                                </div>
                            </>
                        )
                    }

                    {
                        (columnClassName === "col-md-3" || columnClassName === "col-md-12") &&
                        <div className="row">
                            <div className={columnClassName == "col-md-3" ? "col-md-12" : "col-5"}>
                                <img src={imageURL} alt={item.name} className="img-fluid" />
                            </div>
                            <div className={columnClassName === "col-md-3" ? "col-md-12" : "col-7"}>
                                <div>
                                    <p className="product-title">{item.name}</p>
                                    <p className={`stock-status ${parseInt(item.current_stock) > 0 ? 'stock-status-in' : 'stock-status-out'}`}>
                                        <span>{parseInt(item.current_stock) > 0 ? 'In stock' : 'Out of stock'}</span>
                                    </p>
                                    <PriceCalculation item={item} />
                                    <div className={columnClassName === "col-md-3" ? "" : "d-flex justify-content-start"}>
                                        <ProductRating rating={item.average_rating} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>

    );
}

ProductSingleMini.propTypes = {
    item: PropTypes.object,
    columnClassName: PropTypes.string,
    cardClassName: PropTypes.string
};

export default ProductSingleMini;
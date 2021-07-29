import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faListAlt, faShoppingBag } from "@fortawesome/free-solid-svg-icons";

import PriceCalculation from "./partials/PriceCalculation";
import ProductRating from "./partials/ProductRating";
import { useDispatch } from "react-redux";
import { toggleProductModalAction } from "./_redux/Action/ProductAction";
import { addToCartAction } from '../carts/_redux/action/CartAction';
import { showToast } from '../master/Helper/ToastHelper';
import AddWishList from '../Wishlist/AddWishList';

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
const ProductSingleMini = ({ item = {}, columnClassName = 'col-md-2', cardClassName = 'product-card' }) => {

    const dispatch = useDispatch();

    const addToCart = (item) => {
        if (parseInt(item.current_stock) === 0) {
            showToast("error", "This product is out of stock!");
        } else {
            dispatch(addToCartAction(item));
        }
    }

    return (
        <div className={columnClassName}>
            <div className={`${cardClassName} ${columnClassName === "col-md-3" ? "filter_column_3" : "filter_column_10"} `}>
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
                    <button>
                        <FontAwesomeIcon className="details" icon={faListAlt} />
                    </button>
                </div>

                <div className="product-card-body" onClick={() => dispatch(toggleProductModalAction(item.sku))}>
                    <div className="row">
                        <div className={columnClassName == "col-md-3" ? "col-md-12" : "col-5"}>
                            <img src={`${process.env.NEXT_PUBLIC_URL}images/products/${item.featured_image}`} alt={item.name} className="img-fluid" />
                        </div>
                        <div className={columnClassName === "col-md-3" ? "col-md-12" : "col-7"}>
                            <div>
                                <p className="product-title">{item.name}</p>
                                <p className={`stock-status ${parseInt(item.current_stock) > 0 ? 'stock-status-in' : 'stock-status-out'}`}>
                                    <span>{parseInt(item.current_stock) > 0 ? 'In stock' : 'Out of stock'}</span>
                                </p>
                                <PriceCalculation item={item} />
                                <div className={columnClassName === "col-md-3" ? "" : "d-flex justify-content-start"}>
                                {/* <div className="d-flex justify-content-start"> */}
                                    <ProductRating rating={item.average_rating} />
                                </div>
                            </div>
                        </div>
                    </div>
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
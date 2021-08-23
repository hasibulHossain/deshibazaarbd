import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import PriceCalculation from "./partials/PriceCalculation";
import ProductRating from "./partials/ProductRating";
import { useDispatch } from "react-redux";
import { toggleProductModalAction } from "./_redux/Action/ProductAction";
import { addToCartAction } from '../carts/_redux/action/CartAction';
import { showToast } from '../master/Helper/ToastHelper';
import AddWishList from '../Wishlist/AddWishList';
import Translate from '../translation/Translate';
import {useSelector} from 'react-redux'
import SimpleBtn from '../master/SimpleBtn/SimpleBtn';

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
    const {isMobile} = useSelector(state => state.GlobalReducer);
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

    const modalHandler = (isOpen) => {
        if(!isMobile) {
            dispatch(toggleProductModalAction(item.sku));
        }
        if(isOpen) {
            dispatch(toggleProductModalAction(item.sku));
        }
    }

    return (

        <div
            className={`
                ${columnClassName === "col-md-2" && "col-xl-2 col-lg-3 col-md-4 col-6"} 
                ${columnClassName === "col-md-3" && 'col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6'}
                ${columnClassName === "col-md-12" && 'col-12'}
        `}>
            {/* // <div className={`${(columnClassName === "col-md-2" || columnClassName === "col-md-3") ? columnClassName + ' col-6 col-sm-6' : "col-12"}`}> */}
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

                <div className={`product-card-body`} onClick={() => modalHandler(false)}>
                    {
                        columnClassName === "col-md-2" && (
                            <>
                                <div onClick={() => modalHandler(true)} className="product-card-body-details-icon">
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                </div>
                                <img src={imageURL} className="img-fluid" />
                                <div className="product-card-body-inner">
                                    <p className="product-title">
                                        <Translate>{item.name}</Translate>
                                    </p>
                                    <p className={`stock-status ${parseInt(item.current_stock) > 0 ? 'stock-status-in' : 'stock-status-out'}`}>
                                        <span>{parseInt(item.current_stock) > 0 ? 'In stock' : 'Out of stock'}</span>
                                    </p>
                                    <PriceCalculation item={item} />
                                    <div className={columnClassName === "col-md-3" || "col-md-2" ? "" : "d-flex justify-content-start"}>
                                        {/* <ProductRating rating={item.average_rating} /> */}
                                        {
                                            item.average_rating != 0 && (
                                                <ProductRating rating={item.average_rating} />
                                            )
                                        }
                                    </div>
                                </div>
                                <div className="product-single-mini-cart" >
                                    <SimpleBtn variant="danger" onClick={() => addToCart(item)} style={{borderRadius: '0px'}}>
                                        Add to cart
                                    </SimpleBtn>
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
                                        {
                                            item.average_rating != 0 && (
                                                <ProductRating rating={item.average_rating} />
                                            )
                                        }
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
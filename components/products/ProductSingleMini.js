import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faListAlt, faShoppingBag } from "@fortawesome/free-solid-svg-icons";

import PriceCalculation from "./partials/PriceCalculation";
import ProductRating from "./partials/ProductRating";
import { useDispatch } from "react-redux";
import { toggleProductModalAction } from "./_redux/Action/ProductAction";
import { showToast } from '../master/Helper/ToastHelper';

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

    const dispatch                = useDispatch();
    const [quantity, setQuantity] =  useState(1);

    const addToCart = (item) => {
        const cartProduct = {
            productID   : item.id,
            productName : item.name,
            quantity    : quantity,
            isOffer     : item.is_offer_enable,
            price       : item.default_selling_price,
            offerPrice  : item.offer_selling_price,
            productImage: `${process.env.NEXT_PUBLIC_URL}images/products/${item.featured_image}`,
            sellerID    : item.seller_id,
            sellerName  : item.seller_name,
            sku         : item.sku,
        };

        if (item.current_stock == 0) {
            showToast("error", "Product is not available in the stock!");
        } else {
            dispatch(addToCartAction(cartProduct, item.id));
        }
    };

    return (
        <div className={columnClassName}>
            <div className={cardClassName}>
                <div className="product-purchase-section">
                    <button>
                        <FontAwesomeIcon className="add_to_cart" icon={faShoppingBag} onClick={() => addToCart(item)} />
                    </button>
                    <button>
                        <FontAwesomeIcon className="withlist" icon={faHeart} />
                    </button>
                    <button>
                        <FontAwesomeIcon className="details" icon={faListAlt} />
                    </button>
                </div>

                <div className="product-card-body" onClick={() => dispatch(toggleProductModalAction(item.sku))}>

                    <img src={`${process.env.NEXT_PUBLIC_URL}images/products/${item.featured_image}`} alt={item.name} className="img-fluid" />

                    <div>
                        <p className="product-title">{item.name}</p>
                        <p className={`stock-status ${parseInt(item.current_stock) > 0 ? 'stock-status-in' : 'stock-status-out'}`}>
                            <span>{parseInt(item.current_stock) > 0 ? 'In stock' : 'Out of stock'}</span>
                        </p>
                        <PriceCalculation item={item} />
                        <ProductRating rating={item.average_rating} />
                    </div>
                </div>
            </div>
        </div>
        
     );
}

ProductSingleMini.propTypes = {
    item           : PropTypes.object,
    columnClassName: PropTypes.string,
    cardClassName  : PropTypes.string
};
 
export default ProductSingleMini;
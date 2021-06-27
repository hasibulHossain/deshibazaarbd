import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faListAlt, faShoppingBag } from "@fortawesome/free-solid-svg-icons";

import PriceCalculation from "./partials/PriceCalculation";
import ProductRating from "./partials/ProductRating";
import { useDispatch } from "react-redux";
import { toggleProductModalAction } from "./_redux/Action/ProductAction";

const ProductSingleMini = ({ item }) => {

    const dispatch = useDispatch();

    return (
        <div className="product-card col-md-2">
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

                <p className="product-title">{item.name}</p>

                <p className={`stock-status ${parseInt(item.current_stock) > 0 ? 'stock-status-in' : 'stock-status-out'}`}>
                    <span>{parseInt(item.current_stock) > 0 ? 'In stock' : 'Out of stock'}</span>
                </p>

                <PriceCalculation item={item} />
                <ProductRating rating={item.average_rating} />
            </div>
        </div>
     );
}
 
export default ProductSingleMini;
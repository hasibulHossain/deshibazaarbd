import React, { useEffect, useState, memo } from "react";
import PropTypes from 'prop-types';

import LoadingSkelleton from "./../master/skelleton/LoadingSkelleton.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction } from "../_redux/CartProduct/Action/CartAction";
import { showToast } from "../master/Helper/ToastHelper";

import { getProductListAction, getProductsData } from "./_redux/Action/ProductAction";
import ProductSingleMini from "./ProductSingleMini.js";

const ProductMainList = (props) => {
    const { type, limit, page } = props;

    const dispatch                  = useDispatch();
    const [loading, setLoading]     = useState(false);
    const [products, setProducts]   = useState([]);

    useEffect(() => {
        const args = {
            'type' : type,
            'limit': limit,
            'page' : page
        };

        if ( page !== 'home' ) { // for home page only return product, no need to dispatch
            dispatch(getProductListAction(args));
        } else {
            getProducts(args);
        }
    }, []);

    /**
     * Get Products for Home Pages
     * No dispatch, direct axios call and get data and set to state
     * 
     * @since 1.0.0
     * 
     * @param object args 
     * 
     * @return void set data to local state
     */
    const getProducts = async (args) => {
        setLoading( true );
        const data = await getProductsData(args);
        setProducts(data);
        setLoading( false );
    }

    const [quantity, setQuantity] = useState(1);

    const addToCart = (item) => {
        const cartProduct = {
            productID: item.id,
            productName: item.name,
            quantity: quantity,
            isOffer: item.is_offer_enable,
            price: item.default_selling_price,
            offerPrice: item.offer_selling_price,
            productImage: `${process.env.NEXT_PUBLIC_URL}images/products/${item.featured_image}`,
            sellerID: item.seller_id,
            sellerName: item.seller_name,
            sku: item.sku,
        };

        if (item.current_stock == 0) {
            showToast("error", "Product is not available in the stock!");
        } else {
            dispatch(addToCartAction(cartProduct, item.id));
        }
    };

    const { products: allProducts, isProductListloading } = useSelector(state => state.ProductReducer);

    useEffect(() => {
    }, [isProductListloading])

    return (
        <div className="productList-body">
            {loading && (
                <LoadingSkelleton
                    alignment="vertical"
                    count={3}
                    width={350}
                    height={200}
                />
            )}

            <div className="row">
                {products.length > 0 && products.map((item, index) => (
                    <ProductSingleMini item={item} key={index} />
                ))}
            </div>
        </div>
    );
};

// Default props
ProductMainList.defaultProps = {
    type: '',
    page: 'home'
};

// All props
ProductMainList.propTypes = {
    type : PropTypes.string,
    limit: PropTypes.number,
    page : PropTypes.string,
};

export default memo( ProductMainList );

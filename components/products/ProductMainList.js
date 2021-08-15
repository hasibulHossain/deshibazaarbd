import React, { useEffect, useState, memo } from "react";
import PropTypes from 'prop-types';

import LoadingSkelleton from "./../master/skelleton/LoadingSkelleton";
import { useDispatch, useSelector } from "react-redux";

import { getProductListAction, getProductsData } from "./_redux/Action/ProductAction";
import ProductSingleMini from "./ProductSingleMini";

const ProductMainList = (props) => {
    const { type, limit, page, category = "" } = props;

    const dispatch                  = useDispatch();
    const [loading, setLoading]     = useState(false);
    const [products, setProducts]   = useState([]);

    useEffect(() => {
        const args = {
            'type' : type,
            'limit': limit,
            'page' : page,
            category: category
        };

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
        
        if ( page !== 'home' ) { // for home page only return product, no need to dispatch
            dispatch(getProductListAction(args));
        } else {
            getProducts(args)
        }
    }, []);


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
                    <ProductSingleMini item={item} key={index} productKey={index+1} length={products.length} />
                ))}
            </div>
        </div>
    );
};

// Default props
ProductMainList.defaultProps = {
    type: '',
    page: 'home',
    category: ''
};

// All props
ProductMainList.propTypes = {
    type : PropTypes.string,
    limit: PropTypes.number,
    page : PropTypes.string,
    category: PropTypes.string
};

export default memo( ProductMainList );

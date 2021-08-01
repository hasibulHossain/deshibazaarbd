import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import TopProductSlickSetting from './TopProductSlickSetting';
import { getTopProductList } from './_redux/Action/ProductTopListAction';
import { toggleProductModalAction } from "../products/_redux/Action/ProductAction";
import { formatCurrency } from '../../services/currency';
import Translate from '../translation/Translate';

const ProductTopList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTopProductList())
    }, [])

    const topProductList = useSelector((state) => state.ProductTopListReducer.topProductList);

    return (
        <div>
            <Slider {...TopProductSlickSetting}>
                {
                    topProductList.length > 0 && topProductList.map((item, index) => (
                        <div key={index} className="top-product-card" onClick={() => dispatch(toggleProductModalAction(item.sku))}>
                            <div className="top-product-details">
                               <p className="title">
                                   <Translate>Hot Deal Products</Translate>
                                </p>
                               <h5 className="top-product-name">{item.name}</h5>
                               <p>
                                    <Translate>Price</Translate>: 
                                    <span className="price">
                                        {formatCurrency(item.offer_selling_price)}
                                    </span> <sup><del>{formatCurrency(item.default_selling_price)}</del></sup>
                                </p>
                            </div>
                            <div className="top-product-banner">
                                <img src={`${process.env.NEXT_PUBLIC_URL}images/products/${item.featured_image}`} alt={item.name} className="img-fluid" />                             
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
};

export default ProductTopList;
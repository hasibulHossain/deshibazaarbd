import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import TopProductSlickSetting from './TopProductSlickSetting';
import { getTopProductList } from './_redux/Action/ProductTopListAction';

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
                        <div key={index} className="top-product-card">
                            <div className="top-product-details">
                               <p className="title">Hot Deal Products</p>
                               <h5 className="top-product-name">{item.name}</h5>
                               <p>Price: <span className="price">${item.default_selling_price}</span> <sup>99</sup></p>
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
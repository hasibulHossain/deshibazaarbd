import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { getProductCategiesListByShop } from './_redux/Action/ShopByCategoriesAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faListAlt, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import ReactStars from "react-rating-stars-component";
import SlickSetting from '../master/slickSetting/SlickSetting';

const ProductList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductCategiesListByShop())
    }, [])

    const ProductList = useSelector((state) => state.ShopByCategoriesReducer.ProductList);

    return (
        <div className="productList-body">
            <Slider {...SlickSetting}>
                {
                    ProductList.length > 0 && ProductList.map((item, index) => (
                        <div key={index} className="product-card">
                            <div className="product-purchase-section">
                                <button>
                                    <FontAwesomeIcon className="add-to-cart" icon={faShoppingBag} />
                                </button>
                                <button>
                                    <FontAwesomeIcon className="withlist" icon={faHeart} />
                                </button>
                                <button>
                                    <FontAwesomeIcon className="" icon={faListAlt} />
                                </button>
                            </div>
                            <div className="product-card-body">
                                <img src={item.productImg} alt={item.title} className="img-fluid" />
                                <p className="product-title">{item.title}</p>
                                <div className="rating">
                                    <ReactStars
                                        value={item.rating}
                                        // onChange={ratingChanged}
                                        size={24}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
};

export default ProductList;
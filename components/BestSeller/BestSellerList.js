import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faListAlt, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import ReactStars from "react-rating-stars-component";
import SlickSetting from '../master/slickSetting/SlickSetting';
import { getBestSellerList } from './_redux/Action/BestSellerAction';
import BestSellerDetails from './BestSellerDetails';
import SimpleModal from '../master/Modal/SimpleModal';

const BestSellerList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBestSellerList())
    }, [])

    const bestSellerList = useSelector((state) => state.BestSellerReducer.bestSellerList);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [product, setProduct] = useState('');
    const handleShow = (item) => {
        setShow(true);
        setProduct(item);
    };

    return (
        <div className="productList-body">
            <Slider {...SlickSetting}>
                {
                    bestSellerList.length > 0 && bestSellerList.map((item, index) => (
                        <div key={index} className="product-card">
                            <div className="product-purchase-section">
                                <button>
                                    <FontAwesomeIcon className="add_to_cart" icon={faShoppingBag} />
                                </button>
                                <button>
                                    <FontAwesomeIcon className="withlist" icon={faHeart} />
                                </button>
                                <button>
                                    <FontAwesomeIcon className="details" icon={faListAlt} />
                                </button>
                            </div>
                            <div className="product-card-body" onClick={(() => handleShow(item))}>
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

            <SimpleModal
                size="xl"
                show={show}
                handleClose={handleClose}

            >
                <BestSellerDetails product={product} />
            </SimpleModal>
        </div>
    );
};

export default BestSellerList;
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { getDealFlashList } from './_redux/Action/DealFlashAction';
import Button from '../master/Button/Button';

const NewCollection = () => {
    // const dispatch = useDispatch();
    // const flashDealList = useSelector((state) => state.DealFlashReducer.flashDealList);
    // useEffect(() => {
    //     dispatch(getDealFlashList())
    // }, [])
    return (
        <section className="product-container">
            <div className="new-collection-section">
                <div className="row">
                    <div className="col-md-3">
                        <div className="home-appliance border-radius-5 mb-3 pointer">
                            <div className="new-collection-details">
                                <p>Explore New Collection Of </p>
                                <h3 className="title">Home Appliance</h3>
                                <button className="collectionBtn">View Collection</button>
                            </div>
                            <div className="collection-banner">
                                <img src={"/images/collection/01 (2).png"} className="img-fluid" />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="new-collection-card border-radius-5 mb-3 pointer">
                            <div className="custome-new-collection-details">
                                <p>Only This Weak </p>
                                <h3 className="title">Perfect Fit <br /> For Your Home</h3>
                                <button className="collectionBtn">View Collection</button>
                            </div>
                            <div className="middle-collection-banner">
                                <img src={"/images/collection/01 (3).png"} className="img-fluid" />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="stationary_carft border-radius-5 mb-3 pointer">
                            <div className="new-collection-details">
                                <p> New Collection Of </p>
                                <h3 className="title">Stationary & Carft</h3>
                                <Button buttonText="SHOP NOW" />
                            </div>
                            <div className="collection-banner">
                                <img src={"/images/collection/01 (1).png"} className="img-fluid w-75" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default NewCollection;
import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
// import { useDispatch, useSelector } from 'react-redux';
// import { getDealFlashList } from './_redux/Action/DealFlashAction';
import Button from '../master/Button/Button';
import Translate from '../translation/Translate';
import { translate } from '../../services/translation/translation';

const NewCollection = () => {
    // const dispatch = useDispatch();
    // const flashDealList = useSelector((state) => state.DealFlashReducer.flashDealList);
    // useEffect(() => {
    //     dispatch(getDealFlashList())
    // }, [])
    return (
        <section className="container product-container">
            <div className="new-collection-section">
                <div className="row text-center">
                    <div className="col-lg-3 col-md-4">
                    <a href="">
                        <div className="home-card border-radius-5 pointer">
                            <div className="collection-banner">
                                <img src={"/images/Cash-on-delivery.jpg"} className="img img-fluid" alt=""  />
                            </div>
                        </div>
                        </a>
                    </div>

                    <div className="col-lg-6 col-md-8">
                        <a href="">
                            <div style={{height: '100%', width: '100%'}}>
                                <div className="home-card border-radius-5 pointer">
                                    <img src={"/images/electronics_banner.jpg"} className="img img-fluid middle" alt="banner" />
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-lg-3 col-md-12">
                    <a href="">
                        <div className="home-card border-radius-5 pointer">
                            <img src={"/images/polli-dokan_banner.jpg"} className="img img-fluid" alt="" />
                        </div>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default NewCollection;
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
        <section className="product-container">
            <div className="new-collection-section">
                <div className="row">
                    <div className="col-md-3">
                        <div className="home-appliance border-radius-5 mb-3 pointer">
                            <div className="new-collection-details">
                                <p><Translate>Explore New Collection Of</Translate> </p>
                                <h4 className="new_collection_title"><Translate>Home Appliance</Translate></h4>
                                <button className="collectionBtn">
                                    <Translate>View Collection</Translate>
                                </button>
                            </div>
                            <div className="collection-banner">
                                <img src={"/images/collection/01 (2).png"} className="img-fluid" />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="new-collection-card border-radius-5 mb-3 pointer">
                            <div className="custome-new-collection-details">
                                <p><Translate>Only This Weak</Translate></p>
                                <h4 className="new_collection_title"><Translate>Perfect Fit</Translate> <br /> <Translate>For Your Home</Translate></h4>
                                <button className="collectionBtn"><Translate>View Collection</Translate></button>
                            </div>
                            <div className="middle-collection-banner">
                                <img src={"/images/collection/01 (3).png"} className="img-fluid" />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="stationary_carft border-radius-5 mb-3 pointer">
                            <div className="new-collection-details">
                                <p> <Translate>New Collection Of</Translate> </p>
                                <h4 className="new_collection_title"><Translate>Stationary & Carft</Translate></h4>
                                <Button buttonText={translate('Shop Now')} />
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
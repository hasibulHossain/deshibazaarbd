import { faCheckSquare, faMapMarkedAlt, faMoneyCheckAlt, faTruck} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingSpinner from "../master/LoadingSpinner/LoadingSpinner";
import { getShippingAddress } from '../ProfileAccountSetting/_redux/Action/ProfileAccountSettingAction';

const DeliveryFeatures = () => {

    const dispatch = useDispatch()
    const { shippingAddress, isLoading } = useSelector((state) => state.ProfileAccountSettingReducer);

    useEffect(() => {
        dispatch(getShippingAddress('shipping_address'));
    }, [])

    return (
        <>
            <div className="delivery_features_section p-2">
                <div className="d-flex justify-content-between">
                    <small className="text-secondary font-weight-bold mb-2">Delivery Options</small>
                    <small className="text-secondary font-weight-bold mb-2 pointer">Change</small>
                </div>
                {
                    isLoading && (
                        <LoadingSpinner text="Loading Shipping Address..." />
                    )
                }
                {
                    shippingAddress !== null && (
                        <>
                            <p>
                                <span className="user_icon">
                                    <FontAwesomeIcon className="product_details_font_awesome" icon={faMapMarkedAlt} />
                                </span>
                                <span className="user_address">
                                    {shippingAddress.area}, {shippingAddress.street1}, {shippingAddress.city} <br />
                                    {shippingAddress.country}
                                </span>
                            </p>
                        </>
                    )
                }
            </div>
            <div className="delivery_fee delivery_features_section mt-3 p-2">
                <div className="d-flex justify-content-between align-items-end">
                    <div className="d-flex">
                        <FontAwesomeIcon className="product_details_font_awesome" icon={faTruck} />
                        <div className="ml-3">
                            <p>Home Delivery</p>
                            <small className="delivery_time">4-7 Days</small>
                        </div>
                    </div>
                    <p>Tk-50</p>
                </div>
                <div className="d-flex">
                    <FontAwesomeIcon className="product_details_font_awesome" icon={faMoneyCheckAlt} />
                    <p className="ml-3">Cash on Delivery Available</p>
                </div>
            </div>

            <div className="delivery_features_section mt-3 p-2">
                <small className="text-secondary font-weight-bold">Return & Warranty</small>
                <div className="d-flex mt-3">
                    <FontAwesomeIcon className="return_font_awesome" icon={faCheckSquare} />
                    <p className="ml-3"> 100% Authentic</p>
                </div>
                <div className="d-flex">
                    <FontAwesomeIcon className="return_font_awesome" icon={faCheckSquare} />
                    <p className="ml-3"> 14 days easy return </p>
                </div>
            </div>
        </>
    );
};

export default DeliveryFeatures;
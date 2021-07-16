import React, { useEffect } from 'react';
import { faEnvelopeOpen, faHome, faMapMarkerAlt, faMobileAlt, faPencilAlt, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDataAction } from '../_redux/getUserData/Action/UserDataAction';
import { getShippingAddress } from '../ProfileAccountSetting/_redux/Action/ProfileAccountSettingAction';
import LoadingSpinner from '../master/LoadingSpinner/LoadingSpinner';

const ShippingInfo = () => {

    const dispatch                       = useDispatch();
    const { userData }                   = useSelector((state) => state.UserDataReducer);
    const { shippingAddress, isLoading } = useSelector((state) => state.ProfileAccountSettingReducer);

    useEffect(() => {
        dispatch(getUserDataAction());
        dispatch(getShippingAddress('shipping_address'));
    }, [])

    return (
        <div className="card shadow-md mb-2">
            <p className="shipping_info_title p-3">Shipping & Billing</p>
            <div className="shipping_details p-3">
                <div className="d-flex justify-content-between">
                    <h6 className="customer_name"> <FontAwesomeIcon className="shipping_info_fontAwesome" icon={faMapMarkerAlt} />
                        <span>
                            {userData && userData.first_name + " " + userData.last_name}
                        </span>
                    </h6>
                    <p className="customer_info_edit">
                        <FontAwesomeIcon icon={faPencilAlt} /> <span>Edit</span>
                    </p>
                </div>
                <div className="d-flex align-items-start mt-2">
                    <span className="delivery_area">OFFICE</span>
                    <div className="shipping_address">
                        {
                            isLoading && (
                                <LoadingSpinner text="Loading Shipping Address..." />
                            )
                        }
                        {
                            shippingAddress !== null && (
                                <>
                                    {shippingAddress.area}, {shippingAddress.street1}, {shippingAddress.city}
                                    {shippingAddress.country}
                                </>
                            )
                        }
                    </div>
                </div>
                <div className="delivery_collection">
                    <p className="delivery_collecting_message">Free Delivery on collecting your order from Deshibazaarbd Pick-up point</p>
                    <div className="d-flex justify-content-between">
                        <p className="collecting_suggesting">14 Suggested collection points nearby</p>
                        <p> <FontAwesomeIcon className="collection_suggesting_fontAwesome" icon={faQuestionCircle} /> </p>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="d-flex justify-content-between">
                        <p className="shipping_billing_details_info">
                            <FontAwesomeIcon className="shipping_billing_info_fontAwesome" icon={faHome} />
                            <span>Bill to the same address</span>
                        </p>
                        <p className="customer_info_edit">
                            <FontAwesomeIcon icon={faPencilAlt} /> <span>Edit</span>
                        </p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="shipping_billing_details_info">
                            <FontAwesomeIcon className="shipping_billing_info_fontAwesome ml-1" icon={faMobileAlt} />
                            <span> {userData && userData.phone_no} </span>
                        </p>
                        <p className="customer_info_edit">
                            <FontAwesomeIcon icon={faPencilAlt} /> <span>Edit</span>
                        </p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="shipping_billing_details_info">
                            <FontAwesomeIcon className="shipping_billing_info_fontAwesome" icon={faEnvelopeOpen} />
                            <span>{userData && userData.email}</span>
                        </p>
                        <p className="customer_info_edit">
                            <FontAwesomeIcon icon={faPencilAlt} /> <span>Edit</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShippingInfo;
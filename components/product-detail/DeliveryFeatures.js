import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
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
        <div className="delivery_section p-2">
            <small className="text-secondary font-weight-bold mb-2">Delivery Options</small>
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
                                <FontAwesomeIcon icon={faMapMarkedAlt} />
                            </span>
                            <span className="user_address">
                                {shippingAddress.area}, {shippingAddress.street1}, {shippingAddress.city} <br />
                                {shippingAddress.country}
                            </span>
                        </p>
                    </>
                )
            }
            <p className="font-weight-bold-text-dark">
                Fulfilled by Deshibazaar BD
            </p> <hr />
        </div>
    );
};

export default DeliveryFeatures;
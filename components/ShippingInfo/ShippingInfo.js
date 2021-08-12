import React, { useEffect, useState } from 'react';
import { faEnvelopeOpen, faHome, faMapMarkerAlt, faMobileAlt, faPencilAlt, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDataAction } from '../_redux/getUserData/Action/UserDataAction';
import { getAddress, getDefaultAddress, getSingleAddress } from '../ProfileAccountSetting/_redux/Action/ProfileAccountSettingAction';
import LoadingSpinner from '../master/LoadingSpinner/LoadingSpinner';
import SimpleModal from '../master/Modal/SimpleModal';
import AddressUpdate from '../ProfileAccountSetting/AddressUpdate';
import WarningMessage from '../master/warningMessage/WarningMessage';
import SimpleBtn from '../master/SimpleBtn/SimpleBtn';

const ShippingInfo = () => {

    const dispatch               = useDispatch();
    const { userData }           = useSelector((state) => state.UserDataReducer);
    const isLoading              = useSelector((state) => state.ProfileAccountSettingReducer.isLoading);
    const defaultBillingAddress  = useSelector((state) => state.ProfileAccountSettingReducer.defaultBillingAddress);
    const [show, setShow]        = useState(false);

    const toggleShowHandler = () => {
        setShow(preState => !preState);
    }

    const editHandler = (id, type) => {
        dispatch(getSingleAddress(id, type));
        // dispatch(getSingleAddress(1, "shipping_address"));
        setShow(preState => !preState);
    }

    useEffect(() => {
        dispatch(getUserDataAction());
        dispatch(getDefaultAddress('shipping_address'))
        dispatch(getDefaultAddress('billing_address'))
        dispatch(getAddress('billing_address'));

    }, [])

    return (
        <>
            <div className="card shadow-md mb-2">
                <div className="shipping_info_title p-3 d-flex justify-content-between align-items-center">
                    <p>Shipping & Billing</p>
                    {
                        !isLoading && defaultBillingAddress !== null && defaultBillingAddress.length === 0 && (
                            <SimpleBtn variant="success" style={{ width: 'fit-content' }} onClick={toggleShowHandler}>
                                Add new address
                            </SimpleBtn>
                        )
                    }
                </div>

                <div className="shipping_details p-3">
                    {
                        isLoading && (
                            <LoadingSpinner text="Loading Billing Info..." />
                        )
                    }
                    {
                        defaultBillingAddress !== null && defaultBillingAddress.length > 0 && (
                            <>
                                <div className="d-flex justify-content-between">
                                    <h6 className="customer_name text-capitalize"> <FontAwesomeIcon className="shipping_info_fontAwesome" icon={faMapMarkerAlt} />
                                        <span>
                                            {userData && userData.first_name + " "}
                                            {userData && ((userData.last_name !== null && userData.last_name !== 'null' ) ? userData.last_name : '')}
                                        </span>
                                    </h6>
                                    <p className="customer_info_edit" onClick={() => editHandler(defaultBillingAddress[0].id, defaultBillingAddress[0].type)}>
                                        <FontAwesomeIcon icon={faPencilAlt} /> <span>Edit</span>
                                    </p>
                                </div>
                                <div className="d-flex align-items-start mt-2">
                                    <span className="delivery_area">{defaultBillingAddress[0].location}</span>
                                    <div className="shipping_address ml-1">
                                        <>
                                            {defaultBillingAddress[0].area}, {defaultBillingAddress[0].street1}, {defaultBillingAddress[0].city},
                                            {defaultBillingAddress[0].country}
                                        </>
                                    </div>
                                </div>
                            </>
                        )
                    }
                    {
                        !isLoading && defaultBillingAddress !== null && defaultBillingAddress.length === 0 && (
                            <WarningMessage text="Please add your billing information..." />
                        )
                    }

                    <div className="delivery_collection">
                        <p className="delivery_collecting_message">Free Delivery on collecting your order from Deshibazaarbd Pick-up point</p>
                        <div className="d-flex justify-content-between">
                            <p className="collecting_suggesting">14 Suggested collection points nearby</p>
                            <p> <FontAwesomeIcon className="collection_suggesting_fontAwesome" icon={faQuestionCircle} /> </p>
                        </div>
                    </div>

                    { defaultBillingAddress !== null && defaultBillingAddress.length > 0 &&
                        <div className="mt-4">
                            <div className="d-flex justify-content-between">
                                <p className="shipping_billing_details_info">
                                    <FontAwesomeIcon className="shipping_billing_info_fontAwesome" icon={faHome} />
                                    <span>Bill to the same address</span>
                                </p>
                                <p className="customer_info_edit" onClick={() => editHandler(defaultBillingAddress[0].id, defaultBillingAddress[0].type)} >
                                    <FontAwesomeIcon icon={faPencilAlt} /> <span>Edit</span>
                                </p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="shipping_billing_details_info">
                                    <FontAwesomeIcon className="shipping_billing_info_fontAwesome ml-1" icon={faMobileAlt} />
                                    <span> {userData && userData.phone_no} </span>
                                </p>
                                <p className="customer_info_edit" onClick={() => editHandler(defaultBillingAddress[0].id, defaultBillingAddress[0].type)} >
                                    <FontAwesomeIcon icon={faPencilAlt} /> <span>Edit</span>
                                </p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="shipping_billing_details_info">
                                    <FontAwesomeIcon className="shipping_billing_info_fontAwesome" icon={faEnvelopeOpen} />
                                    <span>{userData && userData.email}</span>
                                </p>
                                <p className="customer_info_edit" onClick={() => editHandler(defaultBillingAddress[0].id, defaultBillingAddress[0].type)}>
                                    <FontAwesomeIcon icon={faPencilAlt} /> <span>Edit</span>
                                </p>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <SimpleModal
                size        = "xl"
                show        = {show}
                handleClose = {toggleShowHandler}
            >
                <AddressUpdate type="billing_address" closeModal={toggleShowHandler} />
            </SimpleModal>
        </>
    );
};

export default ShippingInfo;
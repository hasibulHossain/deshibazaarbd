import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProfileSideBar from '../myprofile/ProfileSideBar'
import PersonalInfoForm from './PersonalInfoForm'
import SingleAddress from './SingleAddress';
import { getAddress, getLocationData } from './_redux/Action/ProfileAccountSettingAction';
import SimpleModal from '../master/Modal/SimpleModal';
import AddressUpdate from './AddressUpdate';
import SimpleBtn from '../master/SimpleBtn/SimpleBtn';
import LoadingSpinner from '../master/LoadingSpinner/LoadingSpinner';
import WarningMessage from '../master/warningMessage/WarningMessage';
import Translate from '../translation/Translate';

const ProfileAccountSetting = () => {
    const dispatch = useDispatch();
    const { billingAddress, shippingAddress, userInputData, isLoading } = useSelector(state => state.ProfileAccountSettingReducer)
    const [show, setShow] = useState(false);
    const toggleShowHandler = () => {
        setShow(preState => !preState);
    }

    useEffect(() => {
        dispatch(getAddress('billing_address'));
        dispatch(getAddress('shipping_address'));
        dispatch(getLocationData('countries'))
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 d-none d-md-block">
                        <ProfileSideBar />
                    </div>
                    <div className="col-md-9 mt-3">
                        <div className="user_profile_setting_body">
                            <PersonalInfoForm />
                            <div className="profile_account shadow-sm bg-white" id="address-book">
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                    <h6><Translate>Address Book</Translate></h6>
                                    <SimpleBtn variant="success" style={{ width: 'fit-content' }} onClick={toggleShowHandler}>
                                        <Translate>Add New Address</Translate>
                                    </SimpleBtn>
                                </div>
                                {
                                    isLoading && <div className="d-flex justify-content-center">
                                        <LoadingSpinner text="Loading Address...." />
                                    </div>
                                }
                                {
                                    !isLoading &&
                                    <ul className="address-list">
                                        <div className="address-list__header">
                                            <div>Full name</div>
                                            <div>Address</div>
                                            <div>Region</div>
                                            <div>Mobile</div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <div>
                                            {
                                                !isLoading && billingAddress && billingAddress.length === 0 && shippingAddress && shippingAddress.length === 0 && (
                                                    <div className="mt-2">
                                                        <WarningMessage text="Address not found..." />
                                                    </div>
                                                )
                                            }
                                            {
                                                billingAddress && billingAddress.map((item, i) => {
                                                    return (
                                                        <SingleAddress
                                                            key        = {i}
                                                            id         = {item.id}
                                                            type       = {item.type}
                                                            name       = {item.name}
                                                            phone_no   = {item.phone_no}
                                                            location   = {item.location}
                                                            is_default = {item.is_default}
                                                            city       = {item.city}
                                                            area       = {item.area}
                                                            street1    = {item.street1}
                                                            street2    = {item.street2}
                                                            userName   = {userInputData.first_name}
                                                        />
                                                    );
                                                })
                                            }
                                            {
                                                shippingAddress && shippingAddress.map((item, i) => {
                                                    return (
                                                        <SingleAddress
                                                            key        = {i}
                                                            id         = {item.id}
                                                            type       = {item.type}
                                                            name       = {item.name}
                                                            phone_no   = {item.phone_no}
                                                            location   = {item.location}
                                                            is_default = {item.is_default}
                                                            city       = {item.city}
                                                            area       = {item.area}
                                                            street1    = {item.street1}
                                                            street2    = {item.street2}
                                                            userName   = {userInputData.first_name}
                                                        />
                                                    );
                                                })
                                            }
                                        </div>
                                    </ul>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SimpleModal
                size        = "xl"
                show        = {show}
                handleClose = {toggleShowHandler}
            >
                <AddressUpdate addAddress={true} type="new_address" closeModal={toggleShowHandler} />
            </SimpleModal>
        </>
    );
};

export default ProfileAccountSetting;
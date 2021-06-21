import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProfileSideBar from '../myprofile/ProfileSideBar'
import PersonalInfoForm from './PersonalInfoForm'
import ShippingAddressForm from './ShippingAddressForm'
import BillingAddressForm from './BillingAddressForm'
const ProfileAccountSetting = () => {
    const dispatch = useDispatch();


    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <ProfileSideBar />
                    </div>
                    <div className="col-md-9 mt-3">
                        <div className="user_profile_setting_body">
                            <PersonalInfoForm />
                            <ShippingAddressForm />
                            <BillingAddressForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileAccountSetting;
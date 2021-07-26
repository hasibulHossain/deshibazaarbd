import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileSideBar from "./ProfileSideBar";
import { getUserDataAction } from "../_redux/getUserData/Action/UserDataAction";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk, faMapMarkedAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { getAddress } from "../ProfileAccountSetting/_redux/Action/ProfileAccountSettingAction";
import LoadingSpinner from './../master/LoadingSpinner/LoadingSpinner'
import SimpleModal from '../master/Modal/SimpleModal';
import PersonalInformationUpdate from "./PersonalInformationUpdate";
import AddressUpdate from "./AddressUpdate";
import Link from 'next/link'

const ProductProfile = () => {

  const dispatch        = useDispatch()
  const userData        = useSelector((state) => state.UserDataReducer.userData);
  const isLoading       = useSelector((state) => state.ProfileAccountSettingReducer.isLoading);
  const shippingAddress = useSelector((state) => state.ProfileAccountSettingReducer.shippingAddress);
  const billingAddress  = useSelector((state) => state.ProfileAccountSettingReducer.billingAddress);

  useEffect(() => {
    dispatch(getUserDataAction());
    dispatch(getAddress('shipping_address'))
    dispatch(getAddress('billing_address'))
  }, [])

  const [show, setShow]               = useState(false);
  const handleClose                   = () => setShow(false);
  const handleShow                    = () => setShow(true);;
  const [addressShow, setAddressShow] = useState(false);
  const handleAddressShow             = () => setAddressShow(true);;
  const handleAddressClose            = () => setAddressShow(false);

  return (
    <>
      <div className="wishbanner pb">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <ProfileSideBar />
            </div>

            {/** user profile data */}
            <div className="col-md-9">
              <div className="row mt-5">
                <div className="col-md-6">
                  <div className="card mb-2 default_height shadow-sm p-3 mb-5 bg-white rounded">
                    <h6>Personal Profile | <span className="edit_profile_link" onClick={(() => handleShow())}>EDIT</span></h6>
                    <div className="border-top">
                      <div className="text-center mt-2">
                        {/* <div className="border rounded-circle p-1" style={{height: "90px", width: "90px"}}>
                          <FontAwesomeIcon icon={faUser} style={{ fontSize: "70px" }} />
                        </div> */}
                        <img className="border rounded-circle p-1 mb-2" style={{ height: "100px" }} src="https://cdn.iconscout.com/icon/free/png-256/laptop-user-1-1179329.png" alt="user image" />
                      </div>
                      <p className="user_name"> {`${userData !== null && userData.first_name} ${userData !== null && userData.last_name}`}</p>
                      <p>
                        <span className="user_icon">
                          <FontAwesomeIcon icon={faMailBulk} />
                        </span>
                        <span className="user_email">
                          {userData !== null && userData.email}
                        </span>
                      </p>
                      <p>
                        <span className="user_icon">
                          <FontAwesomeIcon icon={faPhone} />
                        </span>
                        <span className="user_phone">
                          {userData !== null && userData.phone_no}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="card mb-2 p-3 default_height">
                    <div className="card-title">
                      <h6>Address Book |
                        <Link href="/account-setting#address-book">
                          <a className="text-decoration-none">
                            <span className="edit_profile_link ml-2">EDIT</span>
                          </a>
                          {/* <span className="edit_profile_link" onClick={() => handleAddressShow()}>EDIT</span> */}
                        </Link>
                      </h6>
                      <div className="border-top">
                        <p className="address_sub_title mt-2">
                          Default Shipping Address :
                        </p>
                        {
                          isLoading && (
                            <LoadingSpinner text="Loading Shipping Address..." />
                          )
                        }
                        {
                          shippingAddress && shippingAddress.length > 0 && (
                            <>
                              <p>
                                <span className="user_icon">
                                  <FontAwesomeIcon icon={faMapMarkedAlt} />
                                </span>
                                <span className="user_address">
                                  {shippingAddress[0].area}, {shippingAddress[0].street1}, {shippingAddress[0].city} <br />
                                  {shippingAddress[0].country}
                                </span>
                              </p>
                            </>
                          )
                        }
                        <p className="address_sub_title">
                          Default Billing Address :
                        </p>
                        {
                          isLoading && (
                            <LoadingSpinner text="Loading Billing Address..." />
                          )
                        }
                        {
                          billingAddress && billingAddress.length > 0 && (
                            <>
                              <p>
                                <span className="user_icon">
                                  <FontAwesomeIcon icon={faMapMarkedAlt} />
                                </span>
                                <span className="user_address">
                                  {billingAddress[0].area}, {billingAddress[0].street1}, {billingAddress[0].city} <br />
                                  {billingAddress[0].country}
                                </span>
                              </p>
                            </>
                          )
                        }
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <SimpleModal
        size="lg"
        show={show}
        handleClose={handleClose}
      >
        <PersonalInformationUpdate />
      </SimpleModal>

      <SimpleModal
        size="xl"
        show={addressShow}
        handleClose={handleAddressClose}
      >
        <AddressUpdate />
      </SimpleModal>
    </>
  );
};

export default ProductProfile;

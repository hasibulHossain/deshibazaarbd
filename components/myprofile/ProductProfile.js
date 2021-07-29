import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileSideBar from "./ProfileSideBar";
import { getUserDataAction } from "../_redux/getUserData/Action/UserDataAction";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk, faMapMarkedAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { getAddress, getDefaultAddress } from "../ProfileAccountSetting/_redux/Action/ProfileAccountSettingAction";
import LoadingSpinner from './../master/LoadingSpinner/LoadingSpinner'
import SimpleModal from '../master/Modal/SimpleModal';
import PersonalInformationUpdate from "./PersonalInformationUpdate";
import AddressUpdate from "./../ProfileAccountSetting/AddressUpdate";
import Link from 'next/link'
import WarningMessage from "../master/warningMessage/WarningMessage";

const ProductProfile = () => {

  const dispatch = useDispatch()
  const userData = useSelector((state) => state.UserDataReducer.userData);
  const isLoading = useSelector((state) => state.ProfileAccountSettingReducer.isLoading);
  const defaultShippingAddress = useSelector((state) => state.ProfileAccountSettingReducer.defaultShippingAddress);
  const defaultBillingAddress = useSelector((state) => state.ProfileAccountSettingReducer.defaultBillingAddress);

  useEffect(() => {
    dispatch(getUserDataAction());
    dispatch(getDefaultAddress('shipping_address'))
    dispatch(getDefaultAddress('billing_address'))
  }, [])

  const toggleShowHandler = () => {
    setShow(preState => !preState);
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);;
  const [addressShow, setAddressShow] = useState(false);
  const handleAddressShow = () => setAddressShow(true);;
  const handleAddressClose = () => setAddressShow(false);

  console.log('defaultBillingAddress :>> ', defaultBillingAddress);
  console.log('defaultShippingAddress :>> ', defaultShippingAddress);
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

                        {
                          !isLoading && defaultBillingAddress && defaultBillingAddress.length > 0 || defaultShippingAddress && defaultShippingAddress.length > 0 && (
                            <Link href="/account-setting#address-book">
                              <a className="text-decoration-none">
                                <span className="edit_profile_link ml-2">EDIT</span>
                              </a>
                            </Link>
                          )
                        }

                        {
                          !isLoading && defaultBillingAddress && defaultBillingAddress.length === 0 && defaultShippingAddress.length === 0 && (
                            <span className="edit_profile_link ml-2" onClick={toggleShowHandler}>ADD NEW</span>

                          )
                        }

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
                          defaultShippingAddress && defaultShippingAddress.length > 0 && (
                            <>
                              <p>
                                <span className="user_icon">
                                  <FontAwesomeIcon icon={faMapMarkedAlt} />
                                </span>
                                <span className="user_address">
                                  {defaultShippingAddress[0].area}, {defaultShippingAddress[0].street1}, {defaultShippingAddress[0].city} <br />
                                  {defaultShippingAddress[0].country}
                                </span>
                              </p>
                            </>
                          )
                        }
                        {
                          !isLoading && defaultShippingAddress && defaultShippingAddress.length === 0 && (
                            <WarningMessage text="Default shipping address not found" />
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
                          defaultBillingAddress && defaultBillingAddress.length > 0 && (
                            <>
                              <p>
                                <span className="user_icon">
                                  <FontAwesomeIcon icon={faMapMarkedAlt} />
                                </span>
                                <span className="user_address">
                                  {defaultBillingAddress[0].area}, {defaultBillingAddress[0].street1}, {defaultBillingAddress[0].city} <br />
                                  {defaultBillingAddress[0].country}
                                </span>
                              </p>
                            </>
                          )
                        }
                        {
                          !isLoading && defaultBillingAddress && defaultBillingAddress.length === 0 && (
                            <WarningMessage text="Default billing address not found" />
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

      {/* <SimpleModal
        size="xl"
        show={addressShow}
        handleClose={handleAddressClose}
      >
        <AddressUpdate />
      </SimpleModal> */}

      <SimpleModal
        size="xl"
        show={show}
        handleClose={toggleShowHandler}
      >
        <AddressUpdate addAddress={true} type="new_address" closeModal={toggleShowHandler} />
      </SimpleModal>
    </>
  );
};

export default ProductProfile;

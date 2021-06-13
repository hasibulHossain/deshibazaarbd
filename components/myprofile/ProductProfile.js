import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileSideBar from "./ProfileSideBar";
import { getUserDataAction } from "../_redux/getUserData/Action/UserDataAction";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk, faMapMarkedAlt, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { getShippingAddress, getBillingAddress } from "../ProfileAccountSetting/_redux/Action/ProfileAccountSettingAction";
import LoadingSpinner from './../master/LoadingSpinner/LoadingSpinner'
const ProductProfile = () => {
  const dispatch = useDispatch()
  // const wallets = useSelector((state) => state.wallet.wallets);
  const userData = useSelector((state) => state.UserDataReducer.userData);
  const isLoading = useSelector((state) => state.ProfileAccountSettingReducer.isLoading);
  const shippingAddress = useSelector((state) => state.ProfileAccountSettingReducer.shippingAddress);
  const billingAddress = useSelector((state) => state.ProfileAccountSettingReducer.billingAddress);
  useEffect(() => {
    dispatch(getUserDataAction());
    dispatch(getShippingAddress('shipping_address'));
    dispatch(getBillingAddress('billing_address'));
    // dispatch(fetchWallets());
  }, [])
  console.log('shippingAddress :>> ', shippingAddress);
  console.log('billingAddress :>> ', billingAddress);
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
                <div className="col-md-2">
                  <div className="card mb-2 text-center p-2 shadow-sm align-items-center">
                    <FontAwesomeIcon icon={faUser} style={{ fontSize: "100px" }} />
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="card mb-2 p-3 default_height">
                    <div className="card-title">
                      <h6>Personal Profile | <span className="edit_protile_link">EDIT</span></h6>
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
                      <h6>Address Book | <span className="edit_protile_link">EDIT</span> </h6>
                      <p className="address_sub_title">
                        Shipping Address :
                      </p>
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
                      <p className="address_sub_title">
                        Billing Address :
                      </p>
                      {
                        isLoading && (
                          <LoadingSpinner text="Loading Billing Address..." />
                        )
                      }
                      {
                        billingAddress !== null && (
                          <>
                            <p>
                              <span className="user_icon">
                                <FontAwesomeIcon icon={faMapMarkedAlt} />
                              </span>
                              <span className="user_address">
                                {billingAddress.area}, {billingAddress.street1}, {billingAddress.city} <br />
                                {billingAddress.country}
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
    </>
  );
};

export default ProductProfile;

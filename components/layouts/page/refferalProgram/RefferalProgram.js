import React, { Component, useState, useEffect } from "react";
import { Media } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchWallets } from "../../../../store/redux/wallets/actions/WalletAction";
import LoadingSkelleton from "../../../master/skelleton/LoadingSkelleton";
import ProfileSideBar from "../myprofile/ProfileSideBar";

const RefferalProgram = ({ router }, props) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.wallet.loading);
  const wallets = useSelector((state) => state.wallet.wallets);

  useEffect(() => {
    dispatch(fetchWallets());
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <ProfileSideBar />
          </div>

          <div className="col-md-9 ">
            {/* <PageHeding name="notification" /> */}
            <div className="card card-middle">
              <div className="sidebar-card-title">
                <h2>Refferal Program</h2>
              </div>
            </div>
            <div className="card p-2 shadow-sm mt-3 walletMedia">
              {!loading && wallets.map.length === 0 && (
                <div>No Transaction Found !!</div>
              )}

              {loading && (
                <LoadingSkelleton
                  alignment="vertical"
                  count={1}
                  width={590}
                  height={100}
                />
              )}

              <div className="singleTransaction p-2">
                <h4 className="pb-2">Make money on Maccaf to invite your friends and family</h4>
                <p className="pb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit expedita autem, temporibus suscipit, neque et obcaecati dolore eius, eligendi magni nostrum maxime vero illo voluptatem.</p>
                <div className="row col-md-6">
                  <div className="d-flex justify-content-between align-items-center">
                    <h6>Request for payment : </h6>
                    <input type="text" placeholder="7856" className="form-control custome-ref-input card mr-2" />
                    <button className="btn custome-btn">Close</button>
                  </div>
                </div>
                <div className="row justify-content-center mt-3">
                  <div className="col-lg-4 col-md-6">
                    <div className="card text-center p-4 m-1">
                      <h6>Your Invitation Code</h6>
                      <p>Store this code</p>
                      <h6>2 5 6 7 8 9 6 3</h6>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="card text-center p-4 m-1">
                      <h6>Invite User</h6>
                      <p>Store this code</p>
                      <h6>2 5 6 7 8 9 6 3</h6>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="card text-center p-4 m-1">
                      <h6>Amount</h6>
                      <p>Store this code</p>
                      <h6>2 5 6 7 8 9 6 3</h6>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="card text-center p-4 m-1">
                      <h6>Request for payment</h6>
                      <p>Store this code</p>
                      <h6>2 5 6 7 8 9 6 3</h6>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="card text-center p-4 m-1">
                      <h6>Approve Payment</h6>
                      <p>Store this code</p>
                      <h6>2 5 6 7 8 9 6 3</h6>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="card text-center p-4 m-1">
                      <h6>Total user invite</h6>
                      <p>Store this code</p>
                      <h6>2 5 6 7 8 9 6 3</h6>
                    </div>
                  </div>
                </div>
                {/* <Media className="mt-3">
                  <img
                    width={80}
                    height={80}
                    className="mr-3"
                    src="/images/default/chair.png"
                    alt="Generic placeholder"
                  />
                  <Media.Body>
                    <p>
                      Thank you Placing your order to Gadage Guy for Hot
                      Deal.Our Customer Manager will contact you soon
                              </p>
                    <p className="text-right giftCard-taka text-primary font-weight-bold">
                      + &#x9f3; 1229
                              </p>
                    <p className="waletDate">6 Aug 2113</p>
                  </Media.Body>
                </Media> */}
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RefferalProgram;

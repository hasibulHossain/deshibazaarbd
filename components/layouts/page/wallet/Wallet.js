import React, { Component, useState, useEffect } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Rater from "react-rater";
import { Card, Media } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { fetchWallets } from "../../../../store/redux/wallets/actions/WalletAction";
import LoadingSkelleton from "../../../master/skelleton/LoadingSkelleton";
import ProfileSideBar from "../myprofile/ProfileSideBar";

const Wallet = ({ router }, props) => {
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
                <h2>Wallet</h2>
              </div>
            </div>

            {/* <div className="myProfileAsset mt-3 mb-2 font-wight-bold">
              <h1>My Assets</h1>
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6 myProfileCard">
                  <Card className="text-center ">
                    <Card.Body>
                      <Card.Text>{wallets.length > 0 ? wallets.length : 0}</Card.Text>
                      <Card.Title>Wallet</Card.Title>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 myProfileCard">
                  <Card className="text-center">
                    <Card.Body>
                      <Card.Text>29</Card.Text>
                      <Card.Title>Gift Cards</Card.Title>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 ">
                  <Card className="text-center">
                    <Card.Body>
                      <Card.Text>89</Card.Text>
                      <Card.Title>Vouchers</Card.Title>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div> */}


            <div className="row">
              <div className="col-md-4 shadow-sm p-3 mb-5 bg-body rounded">
                <div className="wallertbalanceContainer mt-3">

                  {loading && (
                    <LoadingSkelleton
                      alignment="vertical"
                      count={1}
                      width={170}
                      height={80}
                    />
                  )}

                  <div className="">
                    {wallets.map.length > 0 && (
                      <>
                        {wallets.map((wallet, index) => (
                          <div className="singleWallet card mt-2 shadow p-3 mb-3 bg-body rounded">
                            <p className="text-center lineheight">3225</p>
                            <p className="text-center">Wallet Balance</p>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="card p-2 shadow-sm mt-3 walletMedia">
                  <h3>Transaction History</h3>

                  {!loading && wallets.map.length === 0 && (
                    <div>No Transaction Found !!</div>
                  )}

                  {loading && (
                    <LoadingSkelleton
                      alignment="vertical"
                      count={1}
                      width={520}
                      height={100}
                    />
                  )}

                  {wallets.map.length > 0 && (
                    <>
                      {wallets.map((wallet, index) => (
                        <div className="singleTransaction">
                          <Media className="mt-3">
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
                          </Media>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wallet;

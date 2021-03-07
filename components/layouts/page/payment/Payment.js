import React, { Component, useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import { getUserDataAction } from "../../../getUserData/Action/UserDataAction";
import { useDispatch, useSelector } from "react-redux";
import ProfileSideBar from "../myprofile/profileSideBar";
const Payment = ({ router }, props) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserDataAction())
  }, [])
  const userData = useSelector((state) => state.UserDataReducer.userData);
  return (
    <>
      <div className="wishbanner pb">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 offset-lg-1">
              <ProfileSideBar />
            </div>
            <div className="col-lg-7">
              <div className="myProfileAsset">
                <h5 className="mt-4 mb-4 mt-3">Partial payment/Draft</h5>
                <div className="row bg-white myProfileTitle mb-2 py-2  rounded">
                  <div className="float-left profileItem ">
                    <h6 className="text-center">Item</h6>
                  </div>
                  <div className="float-left profileItem one">
                    <h6 className="">Order No</h6>
                  </div>
                  <div className="float-left profileItem">
                    <h6 className="text-left">Order On</h6>
                  </div>
                  <div className="float-left profileItem two">
                    <h6 className="text-center">Total</h6>
                  </div>
                  <div className="float-left profileItem status ">
                    <h6 className="text-center">Status</h6>
                  </div>
                </div>
                <div className="innerwishlist bg-white myProfileBox mb-2">
                  <div className="wishsingleproduct shippingImg myProfileImg">
                    <img src="/images/default/chair.png" />
                  </div>
                  <div className="shippmentBoxText myProfileText border-right">
                    <h5>#ORD 11221245</h5>
                  </div>
                  <div className="wishsingleproductIcon myProfileTime">
                    <p className="text-center">Mon,Aug 28,20 10.26 AM</p>
                  </div>
                  <div className="wishsingleproductIcon myProfilePrice border-left">
                    <p className="text-danger text-center">৳ 5000000</p>
                  </div>
                  <div className="wishsingleproductIcon myProfileStatus border-right border-left ">
                    <p className="text-danger text-center">Payment pending</p>
                  </div>

                  <div className="border-left myProfilePriceBtn">
                    <button className="btn btn-outline-danger">
                      View details
                    </button>
                  </div>
                  <div className="clearfix"></div>
                </div>
                <div className="clearfix"></div>
                <div className="innerwishlist bg-white myProfileBox">
                  <div className="wishsingleproduct shippingImg myProfileImg">
                    <img src="/images/default/chair.png" />
                  </div>
                  <div className="shippmentBoxText myProfileText border-right">
                    <h5>#ORD 11221245</h5>
                  </div>
                  <div className="wishsingleproductIcon myProfileTime">
                    <p className="text-center">Mon,Aug 28,20 10.26 AM</p>
                  </div>
                  <div className="wishsingleproductIcon myProfilePrice border-left">
                    <p className="text-danger text-center">৳ 500</p>
                  </div>
                  <div className="wishsingleproductIcon myProfileStatus border-right border-left ">
                    <p className="text-primary text-center">Delivered</p>
                  </div>

                  <div className="border-left myProfilePriceBtn">
                    <button className="btn btn-outline-danger">
                      View details
                    </button>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;

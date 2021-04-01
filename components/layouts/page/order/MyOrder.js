import React, { Component, useState, useEffect } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Rater from "react-rater";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyOrders, getOrderDataList } from "../../../../store/redux/myOrders/actions/MyOrderAction";
import LoadingSkelleton from "../../../master/skelleton/LoadingSkelleton";
import ProfileSideBar from "../myprofile/ProfileSideBar";

const MyOrder = ({ router }, props) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.myOrder.loading);
  const myOrders = useSelector((state) => state.myOrder.myOrders);
  const orderListData = useSelector((state) => state.MyOrderReducer.orderListData);

  console.log('orderListData :>> ', orderListData);

  useEffect(() => {
    dispatch(fetchMyOrders());
    dispatch(getOrderDataList());
  }, []);

  return (
    <>
      <div className="wishbanner pb">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 offset-lg-1">
              <ProfileSideBar />
            </div>

            <div className="col-lg-7">
              <div className="wishlisttitle">
                <h1>My Orders</h1>
              </div>

              {!loading && myOrders.map.length === 0 && (
                <div>No Order Found !!</div>
              )}

              {loading && (
                <LoadingSkelleton
                  alignment="vertical"
                  count={1}
                  width={850}
                  height={200}
                />
              )}
              {
                orderListData.length > 0 && orderListData.map((item, index) => (
                  <div className="mt-4">
                    <div className="card bg-white">
                      <div className="card-title orderboxDetails">
                        <div className="ordercode">
                          <h2>{item.orderCode}</h2>
                        </div>
                        <div className="ordercode one">
                          <h2>
                            {/* View Details */}
                            Invoice No-{index + 1}
                          </h2>
                        </div>
                      </div>

                      {
                        item.product.length > 0 && item.product.map((product, index) => (
                          <>
                            <div className="row orderDetailsBorder p-2">
                              <div className="col-3">
                                <div className="">
                                  <img src={product.image} />
                                </div>
                              </div>
                              <div className="col-5">
                                <h3>{product.title}</h3>
                                <div className="d-flex">
                                  <h6 className="mr-3 text-danger"><del>৳ {product.price}</del></h6>
                                  <h6>৳ {product.offerPrice}</h6>
                                </div>
                              </div>
                              <div className="col-4">
                                <h5>Order Date</h5>
                                <h6>{product.orderData}</h6>
                                <button className="btn btn-outline-warning returnButton">Return / Refund</button>
                              </div>
                            </div>
                          </>
                        ))
                      }
                      <div className="singlestatus">
                        <h2 className="order-status">
                          Order status:<span> {item.status}</span>
                        </h2>
                        <h2>Total Amount: <span className="font-weight-bold text-dark ml-1">৳ {item.product.reduce((accumulator, currentValue) => accumulator + currentValue.offerPrice, 0)}</span> </h2>
                      </div>
                    </div>
                  </div>
                ))
              }

              {/*  */}

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyOrder;

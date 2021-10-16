import React, { useEffect } from 'react';
import PageTitle from '../master/page-title/PageTitle.jsx'
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderDetails } from './_redux/action/OrderAction.js';
import LoadingSkelleton from '../master/skelleton/LoadingSkelleton.jsx';
import SingleOrder from './SingleOrder.js';
import dayjs from 'dayjs';
import { formatCurrency } from '../../services/currency.js';
import OrderLifeCycle from './OrderLifeCycle.js';

const OrderDetails = ({ orderID }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { manageOrder } = router.query;
    const { orderDetails, isLoading } = useSelector((state) => state.OrderReducer);

    useEffect(() => {
        dispatch(getOrderDetails(manageOrder))
    }, [])

    // const handleClick = (event) => {
    //     setShowTooltip(!showTooltip);
    //     setTarget(event.target);
    // };

    return (
        <>
            <PageTitle title="Order Details" />
            {
                isLoading && (
                    <div className="card shadow-sm">
                        <LoadingSkelleton
                            alignment="vertical"
                            count={1}
                            width="100%"
                            height={150}
                        />
                    </div>
                )
            }
            {
                orderDetails !== null && (
                    <>
                        <div className="card shadow-sm p-2">
                            <div className="d-flex justify-content-between">
                                <div className="details_heading">
                                    <div className="order_id">Order #{orderDetails.id}</div>
                                    <small className="text-secondary">Placed on {dayjs(orderDetails.transaction_date).format("dddd, MMMM Do YYYY")}</small>
                                </div>
                                <div className="">
                                    <small className="order_total_price"><span className="text-secondary">Due Total</span>&nbsp; &nbsp; :  {formatCurrency(orderDetails.due_total)}</small>
                                    <small className="order_total_price"><span className="text-secondary">Paid Total</span>&nbsp; &nbsp; :  {formatCurrency(orderDetails.paid_total)}</small>
                                    <small className="order_total_price"><span className="text-secondary">Grand Total </span> :  {formatCurrency(orderDetails.final_total)}</small>
                                </div>
                            </div>
                        </div>

                        <div className="mt-3 mb-3">
                            <SingleOrder item={orderDetails} isManageable={false} />
                            <OrderLifeCycle orderID={manageOrder} />
                            {/* <div className="order_package d-flex justify-content-between p-3">
                                <div className="package_vendor_details">
                                    <h6 className="package_no"><FontAwesomeIcon icon={faGift} /> Package 1</h6>
                                    <small>Sold By : <span className="text-primary">Akash Shop</span></small>
                                </div>
                                <div className="text-right">
                                    <small className="text-success">Estimated Delivery By  <br /> 03 Jul - Mon 12 Jul</small>
                                    <p className="order_chating pointer"> <FontAwesomeIcon icon={faComments} /> Chat Now </p>
                                </div>
                            </div>
                            <div className="order_tracking_system p-2">
                                <OrderTracking />
                                <div className="order_product_list p-3">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-4">
                                                    <img src="https://static-01.daraz.com.bd/p/a2a62d3c0dcbc4727545ee6e227a2980.jpg_340x340q80.jpg_.webp" alt="product img" className="img-fluid img-thumbnail" />
                                                </div>
                                                <div className="col-8">
                                                    <h4 className="order_product_title">Colour T-Shirt</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mt-3">
                                            <div className="row">
                                                <div className="col-3">
                                                    <p className="order_product_qty"> <span className="text-secondary">Qty : </span> 2</p>
                                                </div>
                                                <div className="col-4">
                                                    <div className="badge badge-secondary">Processing</div>
                                                </div>

                                                <div className="col-5" ref={ref}>
                                                    <SimpleTooltip
                                                        title="Cancellation Not Available"
                                                        description="Sorry, you cannot cancel this package as it has already been shipped by the seller. If you still wish to cancel the package please contact Deshibazaar customer support via live chat."
                                                        showTooltip={showTooltip}
                                                        target={target}
                                                        res={ref}
                                                    />
                                                    <button
                                                        className="btn text-secondary"
                                                        onMouseEnter={handleClick}
                                                        onMouseLeave={handleClick}
                                                    >
                                                        Cancel <FontAwesomeIcon icon={faExclamationCircle} /></button>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div> */}

                        </div>
                    </>
                )
            }

        </>
    );
};

export default OrderDetails;
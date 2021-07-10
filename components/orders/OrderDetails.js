import React, { useRef } from 'react';
import PageTitle from '../master/page-title/PageTitle.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faExclamationCircle, faGift } from '@fortawesome/free-solid-svg-icons';
import OrderTracking from './OrderTracking.js';
import SimpleTooltip from '../master/Tooltip/SimpleTooltip'
import { useState } from 'react';
import { useRouter } from 'next/router';

const OrderDetails = ({ order }) => {
    const router = useRouter();
    const [showTooltip, setShowTooltip] = useState(false);
    const [target, setTarget]           = useState(null);
    const ref                           = useRef(null);

    const handleClick = (event) => {
        setShowTooltip(!showTooltip);
        setTarget(event.target);
    };
    // get order id for fetch order details
    const {manageOrder} = router.query;
    return (
        <>
            <PageTitle title="Order Details" />
            <div className="card shadow-sm p-2">
                <div className="d-flex justify-content-between">
                    <div className="details_heading">
                        <div className="order_id">Order #{order.id}</div>
                        <small className="order_placed_date text-secondary">Placed on 28th June, 2021, 21:23:16</small>
                    </div>
                    <div className="order_total_price"><span className="text-secondary">Price</span> : Tk-135</div>
                </div>
            </div>

            <div className="card mt-3 mb-3">
                <div className="order_package d-flex justify-content-between p-3">
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
                                            title       = "Cancellation Not Available"
                                            description = "Sorry, you cannot cancel this package as it has already been shipped by the seller. If you still wish to cancel the package please contact Deshibazaar customer support via live chat."
                                            showTooltip = {showTooltip}
                                            target      = {target}
                                            res         = {ref}
                                        />
                                        <button
                                            className    = "btn text-secondary"
                                            onMouseEnter = {handleClick}
                                            onMouseLeave = {handleClick}
                                        >
                                            Cancel <FontAwesomeIcon icon={faExclamationCircle} /></button>

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

export default OrderDetails;
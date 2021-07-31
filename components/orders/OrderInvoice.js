import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPrint, faTimes } from "@fortawesome/free-solid-svg-icons";
import Translate from '../translation/Translate';

/**
 * Order Invoice component
 * 
 * Responsible for Order Invoice Format & Status
 * 
 * @param {int} order ID
 * 
 * @return
 */
const OrderInvoice = ({ title = translate('Invoice'), id }) => {

    function printDiv(divName) {
        var printContents = document.getElementById(divName).innerHTML;
        var originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
    }

    return (
        <div>
            <div className="row" id="printable-invoice-area">
                <div className="col-md-7">
                    <div className="card card-body order-success-left">
                        <div className="row order-invoice-header">
                            <div className="col-3">
                                <img src={'/images/logos/logo-en.svg'} alt="" class="invoice-logo" />
                            </div>
                            <div className="col-9">
                                <h3>{title}</h3>
                                <h4><Translate>Order No </Translate>: <span className="small">20000101</span></h4>
                                <p><Translate>Order Placed at </Translate>: <span className="small">29 January 2021</span></p>
                            </div>
                        </div>
                        <div className="order-details">
                            <div className="row">
                                <div className="col-12 col-sm-6 col-md-4 single-order-row-item">
                                    <h5><Translate>Your Information</Translate></h5>
                                    <p>Maniruzzaman Akash</p>
                                    <p>manirujjamanakash@gmail.com</p>
                                    <p>+8801951233084</p>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 single-order-row-item">
                                    <h5><Translate>Payment Information</Translate></h5>
                                    {/* <p>VISA *******************35</p>
                                    <p>Exp: 05/25</p> */}
                                    <p>Cash In Delivery</p>
                                    <p>
                                        <span className="bg-warning border-radius-5 p-1">
                                            <FontAwesomeIcon className="custom-fontAwesome" icon={faTimes} />
                                            {' '} <Translate>Not Paid</Translate>
                                        </span>
                                    </p>
                                    <p>
                                        {/* <span className="bg-success border-radius-5 p-1">
                                            <FontAwesomeIcon className="custom-fontAwesome" icon={faCheck} />
                                            {' '} <Translate>Paid</Translate>
                                        </span> */}
                                    </p>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 single-order-row-item">
                                    <h5><Translate>Shipping Method</Translate></h5>
                                    <p>Standard Delivery</p>
                                    <p>3-7 Business Days</p>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 single-order-row-item">
                                    <h5><Translate>Shipping Address</Translate></h5>
                                    <p>Mohakhali 87/ka, Cristian Para</p>
                                    <p>Mohakhali</p>
                                    <p>Banani, Dhaka</p>
                                    <p>Dhaka-1200</p>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 single-order-row-item">
                                    <h5><Translate>Billing Address</Translate></h5>
                                    <p>Mohakhali 87/ka, Cristian Para</p>
                                    <p>Mohakhali</p>
                                    <p>Banani, Dhaka</p>
                                    <p>Dhaka-1200</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="card card-body order-success-right">
                        <button className="btn btn-success btn-sm btn-print" onClick={() => printDiv('printable-invoice-area')}> 
                            <FontAwesomeIcon className="custom-fontAwesome" icon={faPrint} />
                            {' '} <Translate>Print</Translate>
                        </button>
                        <h3><Translate>Order Summary</Translate></h3>
                        <div className="order-product-item">
                            <div className="row">
                                <div className="col-2">

                                </div>
                                <div className="col-2">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderInvoice;
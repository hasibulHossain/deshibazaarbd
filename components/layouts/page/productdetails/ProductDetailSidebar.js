import React from 'react'
import Link from "next/link";
import PinDropIcon from "@material-ui/icons/PinDrop";
import ChatIcon from "@material-ui/icons/Chat";
import SuggestionProduct from './SuggestionProduct';

const ProductDetailSidebar = ({ product }) => {
    return (
        <>
            <div className="chairDeliverydetails bg-light p-3">
                <h2>Delivery Options</h2>
                <div className="chairDeliveryoption three"></div>
                <div className="chairDeliveryoption productDetailsFloating">
                    {/* <p>
                        <PinDropIcon />
                        Dhaka,Dhaka - South,Wari
                    </p> */}
                    <br></br>
                    <img src="/images/default/homedelivery.png" alt="" />
                    <p>Home Delivery</p>
                    <br></br>
                    <p className="mt-n3 deliveryDays pl-4">3-5 days</p>
                    <br></br>
                    <img src="/images/default/cashdelivery.png" alt="" />{" "}
                    <p>Cash on Delivery Available</p>
                </div>
                {/* <div className="chairDeliveryoption two">
                                    <p>Edit</p>
                                    <p>৳ 245</p>
                                    </div>
                                    <div className="elegentchairestore">
                                    <h3>Store by</h3>
                                    <div className="elegentstoreImg">
                                        <img src="/images/default/store1.png" />
                                    </div>
                                    <div className="elegentstoreImg two">
                                        <h5>Akij Plastics Ltd</h5>
                                        <p>Flagship Store</p>
                                        <Rater total={5} rating={2} />
                                    </div>
                                    <div className="elegentstoreImg three">
                                        <img src="/images/default/playstore.png" />
                                    </div>
                                    </div> */}
                <div className="clearfix"></div>
                <div className="border-bottom"></div>
                <div className="clearfix"></div>
                <div className="chairDeliveryoption productDetailsFloating returnWarranty mt-2">
                    <h6>Return & Warranty</h6>
                    <img src="/images/default/7days.png" alt="" />
                    <p>7 Days Returns</p>
                    <p className="mt-n3 deliveryDays pl-4">
                        Change of mind is not applicable
                    </p>
                    <br></br>
                    <img src="/images/default/nowarranty.png" alt="" />
                    <p>Warranty not available</p>
                    <br></br>
                </div>
                <div className="clearfix"></div>
                <div className="clearfix"></div>
                <div className="mt-2 bg-light soldText">
                    <h6>Sold by</h6>
                    <div className="soldAgency sales">
                        <Link href={`/shop/${product.business.slug}`}>
                            <h2 className="float-left businessName">
                                {
                                    typeof product.business !== 'undefined' ?
                                        product.business.name : ''
                                }
                            </h2>
                        </Link>
                        {/* <p className="float-right text-right font-weight-bold">
                            <a href="">
                                <ChatIcon />
                                Chat Now
                            </a>
                        </p> */}
                    </div>
                </div>
                <div className="clearfix"></div>
                <div className="elegentrating">
                    {/* <div className="elegentsinglerating">
                        <h6>88%</h6>
                        <p>Positive Seller Ratings</p>
                    </div>
                    <div className="elegentsinglerating two">
                        <h6>41%</h6>
                        <p>Ship on Time</p>
                    </div>
                    <div className="elegentsinglerating">
                        <h6>43%</h6>
                        <p>Chat Response Rate</p>
                    </div> */}
                    <div className="clearfix"></div>
                    <div className="goStore text-center font-weight-bold">
                        <Link href="/"> GO TO STORE</Link>
                    </div>
                </div>
            </div>
            <div className="clearfix"></div>
            <div className="elegentpayment mt-2">
                <div className="elegentpaymenttext">
                    <p>Payment:</p>
                </div>
                <div className="elegentpaymenttext one">
                    <img src="/images/default/payment-gateway.png" />
                </div>
            </div>

            <div className="clearfix"></div>
            <div className=" mt-4">
                {/* <SuggestionProduct product={product} /> */}
            </div>
        </>
    );
}

export default ProductDetailSidebar;
import React from 'react';
import Link from 'next/link';

const DeliveryFeatures = ({ product }) => {
    const {location} = product.business;
    const hours = product.approx_delivery_time / 60;
    const days = Math.floor(hours / 24);

    return (
        <>
            <div className="delivery_features_section p-2">
                {/* <div className="d-flex justify-content-between">
                    <small className="delivery_features_section-heading mb-2">Seller Information</small>
                </div> */}

                        <p className="m-0 pt-2">
                            <span className="user_icon color-main">
                                <i className="fas fa-store"></i>
                            </span>
                            <span className="user_address store_name pointer">
                                <Link href={`/store/${product.business.slug}`}>
                                    <a>
                                        {
                                            product.business && product.business.name
                                        }
                                    </a>
                                </Link>
                            </span>
                        </p>

                {/* {
                    typeof location.email !== "undefined" && location.email !== null && location.email !== "" && (
                        <p>
                            <span className="user_icon color-main">
                                <i className="fas fa-envelope-open-text"></i>
                            </span>
                            <span className="user_address text-lowercase">
                                <a href={`mailto:${location.email}`} target="_blank" rel="noopener noreferrer">
                                    {location.email}
                                </a>
                            </span>
                        </p>
                    )
                }

                {
                    typeof location.mobile !== "undefined" && location.mobile !== null && location.mobile !== "" && (
                        <p>
                            <span className="user_icon color-main">
                                <i className="fas fa-phone-square-alt"></i>
                            </span>
                            <span className="user_address text-lowercase">
                                <a href={`tel:${location.mobile}`}>
                                    {location.mobile}
                                </a>
                            </span>
                        </p>
                    )
                } */}

                {/* <p>
                    <span className="user_icon color-main">
                        <i className="fas fa-map-marked-alt"></i>
                    </span>
                    <span className="user_address">
                        <a href={`http://maps.google.com/?q=${location.landmark !== null ? location.landmark + "," : ""} ${location.zip_code !== null ? location.zip_code + "," : ""} ${location.city !== null ? location.city + "," : ""} ${location.state !== null ? location.state + "," : ""} ${location.country !== null ? location.country : ""}`} target="_blank" rel="noopener noreferrer">
                            {`${location.landmark !== null ? location.landmark + "," : ""} ${location.zip_code !== null ? location.zip_code + "," : ""} ${location.city !== null ? location.city + "," : ""} ${location.state !== null ? location.state + "," : ""} ${location.country !== null ? location.country : ""}`}
                        </a>
                    </span>
                </p> */}
            </div>
            <div className="delivery_fee delivery_features_section mt-3 p-2">
                <div className="d-flex justify-content-between align-items-end">
                    <div className="d-flex">
                        <span className="color-main">
                            <i className="fas fa-truck"></i>
                        </span>
                        <div className="ml-3 product_details__delivery__features_info">
                            <p>Home Delivery <br />
                                <small style={{color: 'var(--color-green-light)'}} className="delivery_time">
                                    {
                                        `${days} - ${days + 1}`
                                    } days
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="d-flex">
                    <span className="color-main">
                        <i className="fas fa-money-check-alt"></i>
                    </span>
                    <p className="ml-3 product_details__delivery__features_info">Cash on Delivery Available</p>
                </div>
            </div>

            <div className="delivery_features_section mt-3 p-2">
                <small className="delivery_features_section-heading">Return & Warranty</small>
                <div className="d-flex mt-3">
                    <div className="color-main">
                        <i className="fas fa-check-square"></i>
                    </div>
                    <p className="ml-3 return_information"> 100% Authentic</p>
                </div>
                <div className="d-flex">
                    <div className="color-main">
                        <i className="fas fa-check-square"></i>
                    </div>
                    <p className="ml-3 return_information"> 14 days easy return </p>
                </div>
            </div>
        </>
    );
};

export default DeliveryFeatures;
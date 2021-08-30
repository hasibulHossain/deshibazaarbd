import { faCheckSquare, faEnvelopeOpenText, faMapMarkedAlt, faMoneyCheckAlt, faPhoneSquare, faStore, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type } from "jquery";
import React from 'react';

const DeliveryFeatures = ({ product }) => {

    const { name, website, email, mobile, landmark, zip_code, city, country, state } = product.business.location;

    return (
        <>
            <div className="delivery_features_section p-2">
                <div className="d-flex justify-content-between">
                    <small className="text-secondary font-weight-bold mb-2">Seller Information</small>
                </div>
                {
                    (website !== null && website !== "") || (name !== null && name !== "") && (
                        <p>
                            <span className="user_icon">
                                <FontAwesomeIcon className="product_details_font_awesome" icon={faStore} />
                            </span>
                            <span className="user_address store_name pointer">
                                {
                                    typeof website !== "undefined" && website !== null && website !== "" ? (
                                        <a href={`https://${website}`} target="_blank" rel="noopener noreferrer">
                                            {name}
                                        </a>
                                    ) :  name
                                }

                            </span>
                        </p>
                    )
                }

                {
                    typeof email !== "undefined" && email !== null && email !== "" && (
                        <p>
                            <span className="user_icon">
                                <FontAwesomeIcon className="product_details_font_awesome" icon={faEnvelopeOpenText} />
                            </span>
                            <span className="user_address text-lowercase">
                                <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
                                    {email}
                                </a>
                            </span>
                        </p>
                    )
                }

                {
                    typeof mobile !== "undefined" && mobile !== null && mobile !== "" && (
                        <p>
                            <span className="user_icon">
                                <FontAwesomeIcon className="product_details_font_awesome" icon={faPhoneSquare} />
                            </span>
                            <span className="user_address text-lowercase">
                                <a href={`tel:${mobile}`}>
                                    {mobile}
                                </a>
                            </span>
                        </p>
                    )
                }

                <p>
                    <span className="user_icon">
                        <FontAwesomeIcon className="product_details_font_awesome" icon={faMapMarkedAlt} />
                    </span>
                    <span className="user_address">
                        <a href={`http://maps.google.com/?q=${landmark !== null ? landmark + "," : ""} ${zip_code !== null ? zip_code + "," : ""} ${city !== null ? city + "," : ""} ${state !== null ? state + "," : ""} ${country !== null ? country : ""}`} target="_blank" rel="noopener noreferrer">
                            {`${landmark !== null ? landmark + "," : ""} ${zip_code !== null ? zip_code + "," : ""} ${city !== null ? city + "," : ""} ${state !== null ? state + "," : ""} ${country !== null ? country : ""}`}
                        </a>
                    </span>
                </p>
            </div>
            <div className="delivery_fee delivery_features_section mt-3 p-2">
                <div className="d-flex justify-content-between align-items-end">
                    <div className="d-flex">
                        <FontAwesomeIcon className="product_details_font_awesome" icon={faTruck} />
                        <div className="ml-3 product_details__delivery__features_info">
                            <p>Home Delivery <br /><small className="delivery_time">4-7 Days</small></p>
                        </div>
                    </div>
                </div>
                <div className="d-flex">
                    <FontAwesomeIcon className="product_details_font_awesome" icon={faMoneyCheckAlt} />
                    <p className="ml-3 product_details__delivery__features_info">Cash on Delivery Available</p>
                </div>
            </div>

            <div className="delivery_features_section mt-3 p-2">
                <small className="text-secondary font-weight-bold">Return & Warranty</small>
                <div className="d-flex mt-3">
                    <FontAwesomeIcon className="return_font_awesome" icon={faCheckSquare} />
                    <p className="ml-3 return_information"> 100% Authentic</p>
                </div>
                <div className="d-flex">
                    <FontAwesomeIcon className="return_font_awesome" icon={faCheckSquare} />
                    <p className="ml-3 return_information"> 14 days easy return </p>
                </div>
            </div>
        </>
    );
};

export default DeliveryFeatures;
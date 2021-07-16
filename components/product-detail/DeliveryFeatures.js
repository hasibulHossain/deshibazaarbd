import { faCheckSquare, faEnvelopeOpenText, faMapMarkedAlt, faMoneyCheckAlt, faPhoneSquare, faStore, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const DeliveryFeatures = ({ product }) => {

    const { name, website, email, mobile, landmark, zip_code, city, country, state } = product.business.location;

    return (
        <>
            <div className="delivery_features_section p-2">
                <div className="d-flex justify-content-between">
                    <small className="text-secondary font-weight-bold mb-2">Seller Information</small>
                </div>
                <p>
                    <span className="user_icon">
                        <FontAwesomeIcon className="product_details_font_awesome" icon={faStore} />
                    </span>
                    <span className="user_address store_name">
                        <a href={`http://${website}`} target="_blank" rel="noopener noreferrer">
                            {name}
                        </a>
                    </span>
                </p>
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
                <p>
                    <span className="user_icon">
                        <FontAwesomeIcon className="product_details_font_awesome" icon={faMapMarkedAlt} />
                    </span>
                    <span className="user_address">
                        <a href={`http://maps.google.com/?q=${landmark}, ${zip_code}, ${city}, ${state}, ${country}`} target="_blank" rel="noopener noreferrer">
                            {`${landmark}, ${zip_code}, ${city}, ${state}, ${country}`}
                        </a>
                    </span>
                </p>
            </div>
            <div className="delivery_fee delivery_features_section mt-3 p-2">
                <div className="d-flex justify-content-between align-items-end">
                    <div className="d-flex">
                        <FontAwesomeIcon className="product_details_font_awesome" icon={faTruck} />
                        <div className="ml-3">
                            <p>Home Delivery</p>
                            <small className="delivery_time">4-7 Days</small>
                        </div>
                    </div>
                    <p>Tk-50</p>
                </div>
                <div className="d-flex">
                    <FontAwesomeIcon className="product_details_font_awesome" icon={faMoneyCheckAlt} />
                    <p className="ml-3">Cash on Delivery Available</p>
                </div>
            </div>

            <div className="delivery_features_section mt-3 p-2">
                <small className="text-secondary font-weight-bold">Return & Warranty</small>
                <div className="d-flex mt-3">
                    <FontAwesomeIcon className="return_font_awesome" icon={faCheckSquare} />
                    <p className="ml-3"> 100% Authentic</p>
                </div>
                <div className="d-flex">
                    <FontAwesomeIcon className="return_font_awesome" icon={faCheckSquare} />
                    <p className="ml-3"> 14 days easy return </p>
                </div>
            </div>
        </>
    );
};

export default DeliveryFeatures;
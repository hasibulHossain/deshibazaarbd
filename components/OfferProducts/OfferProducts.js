import React, { useEffect } from 'react';
import Button from '../master/Button/Button';

const OfferProducts = () => {

    return (
        <section className="product-container">
            <div className="row">
                <div className="col-md-6">
                    <div className="offer_product_section">
                        <img src={"/images/offer/cars.png"} alt="Car offers" className="img-fluid" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="offer_product_section-right">
                        <div className="offer_product_details">
                            <h2>crazy <br /> offer</h2>
                            <Button buttonText="Shop Now" />
                        </div>
                        <div className="offer_product_img">
                            <img src={"/images/offer/bike.png"} alt="Car offers" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default OfferProducts;
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ProductModal from '../products/ProductModal';

// import paymentImg from './../../assets/img/Payment-Icon-Buzfi.com-best-online-shopping-in-the-USA-2020-best-e-commerce-shop-in-the-United-States.png'
const FooterBottom = () => {
    return (
        <div className="footer-bottom">
            <Container>
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-6">
                        <div className="footer-bottom-info">
                            <p> &#169; {new Date().getFullYear()} deshibazaar. | deshibazaar.net <span>All rights reserved</span></p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={"/images/Payment-Icon-Buzfi.com-best-online-shopping-in-the-USA-2020-best-e-commerce-shop-in-the-United-States.png"} alt="deshi bazaar bd" className="img-fluid mb-2 mt-2 pointer" />
                    </div>
                </div>
            </Container>

            <ProductModal />
        </div >
    );
};

export default FooterBottom;
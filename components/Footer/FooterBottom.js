import React from 'react';
import { Container, Row } from 'react-bootstrap';
// import paymentImg from './../../assets/img/Payment-Icon-Buzfi.com-best-online-shopping-in-the-USA-2020-best-e-commerce-shop-in-the-United-States.png'
const FooterBottom = () => {
    return (
        <div className="footer-bottom">
            <Container>
                <div className="row justify-content-between">
                    <div className="col-md-6">
                        <div className="footer-bottom-info">
                            <p> &#169; {new Date().getFullYear()} deshibazaar. | deshibazaar.net <span>All rights reserved</span></p>
                        </div>
                    </div>
                    <div className="col-md-4">

                    </div>
                </div>
            </Container>
        </div >
    );
};

export default FooterBottom;
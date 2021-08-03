import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link'
import FooterBottom from './FooterBottom';
import SocialMedia from './SocialMedia';
import Button from '../master/Button/Button';
import { getUserOrderList } from '../orders/_redux/action/OrderAction';
import SimpleModal from '../master/Modal/SimpleModal';
import TrackingForm from '../Header/TrackingForm';
import { useDispatch } from 'react-redux';

const Footer = () => {
    
    const dispatch        = useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        dispatch(getUserOrderList(5))
    }, []);

    return (
        <>
            <section className="footer-section">
                <Container>
                    <Row>
                        <Col md={3} xs={6}>
                            <div className="footer-info">
                                <h5>Information</h5>
                                <Link href="/p/shipping-method">
                                    <a>Shipping Methods</a>
                                </Link>

                                <Link href="/p/privacy-policy">
                                    <a>Privacy Policy</a>
                                </Link>
                                <Link href="/p/terms-&-condition">
                                    <a>Terms & Condition</a>
                                </Link>
                                <Link href="/p/faq">
                                    <a>FAQ</a>
                                </Link>
                                <Link href="/p/how-it's-works">
                                    <a>How It's Work</a>
                                </Link>
                            </div>
                        </Col>
                        <Col md={3} xs={6}>
                            <div className="footer-info">
                                <h5>customer care</h5>
                                <Link href="/p/about-us">
                                    <a>About us</a>
                                </Link>
                                <Link href="/p/contact">
                                    <a>Contact</a>
                                </Link>
                                <Link href="/p/shop">
                                    <a>Shop</a>
                                </Link>
                                <Link href="/p/blog">
                                    <a>Blog</a>
                                </Link>
                                <Link href="/p/product-support">
                                    <a>Product Support</a>
                                </Link>
                            </div>
                        </Col>
                        <Col md={2} xs={6}>
                            <div className="footer-info">
                                <h5>my account</h5>
                                <Link href="/profile">
                                    <a>My Account</a>
                                </Link>

                                <p className="pointer" onClick={() => handleShow()}>
                                    Order Tracking
                                </p>
                                <Link href="/wishlist">
                                    <a>Wishlist</a>
                                </Link>
                                <Link href="/p/affiliate">
                                    <a>Affiliate</a>
                                </Link>
                            </div>
                        </Col>
                        <Col md={4} sm={6}>
                            <div className="footer-info">
                                <h5>Newsletter</h5>
                                <p>Subscribe to our newsletter to get notification about discount information</p>
                                <input type="text" className="form-control mb-3" placeholder="Enter your Email here" />
                                <Button buttonText="Subscribe" />
                            </div>
                            <SocialMedia />
                        </Col>
                    </Row>
                </Container>
                <FooterBottom />
            </section>

            <SimpleModal
                handleClose={handleClose}
                size={"md"}
                show={show}
            >
                <TrackingForm show={show} setShow={setShow} />
            </SimpleModal>
        </>
    );
};

export default Footer;
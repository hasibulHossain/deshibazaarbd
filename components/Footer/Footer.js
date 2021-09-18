import React, { useState, memo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link'
import FooterBottom from './FooterBottom';
import SocialMedia from './SocialMedia';
import SimpleModal from '../master/Modal/SimpleModal';
import TrackingForm from '../Header/TrackingForm';
import { useDispatch, useSelector } from 'react-redux';
import SimpleBtn from '../master/SimpleBtn/SimpleBtn';
import { subscribeNewsletter } from './_redux/Action/FooterAction';

const Footer = () => {
    const {isLoading}       = useSelector(state => state.FooterReducer)
    const dispatch          = useDispatch();
    const [show, setShow]   = useState(false);
    const [email, setEmail] = useState("");
    const handleClose       = () => setShow(false);
    const handleShow        = () => setShow(true);

    const onSubmit = () => {
        dispatch(subscribeNewsletter(email));
    }

    return (
        <>
            <section className="footer-section">
                <Container>
                    <Row>
                        <Col md={3} xs={6}>
                            <div className="footer-info">
                                <h5>Customer Care</h5>
                                <Link href="/p/help center">
                                    <a>Help Center</a>
                                </Link>
                                <Link href="/p/how-to-buy">
                                    <a>How To Buy</a>
                                </Link>
                                <Link href="/p/Return and Refund Policy">
                                    <a>Return &amp; Refund Policy </a>
                                </Link>
                                <Link href="/p/shipping-method">
                                    <a>Payment &amp; Shipping Methods</a>
                                </Link>

                                <Link href="/p/privacy-policy">
                                    <a>Privacy Policy</a>
                                </Link>

                                <Link href="/p/site map">
                                    <a>Site Map</a>
                                </Link>
                                <Link href="/p/faq">
                                    <a>FAQ</a>
                                </Link>
                            </div>
                        </Col>
                        <Col md={3} xs={6}>
                            <div className="footer-info">
                                <h5>Information</h5>
                                <Link href="/p/about-us">
                                    <a>About us</a>
                                </Link>
                                <Link href="/p/career">
                                    <a>Career</a>
                                </Link>
                                <Link href="/p/affiliate">
                                    <a>Affiliate</a>
                                </Link>
                                <Link href="/p/wholesale">
                                    <a>Wholesale</a>
                                </Link>
                                <Link href="/p/contact">
                                    <a>Contact</a>
                                </Link>
                                <Link href="/p/terms-&-condition">
                                    <a>Terms &amp; Condition</a>
                                </Link>
                                <Link href="/p/privacy-policy">
                                    <a>Privacy Policy</a>
                                </Link>
                                <Link href="/p/blog">
                                    <a>Blog</a>
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
                            </div>
                        </Col>
                        <Col md={4} sm={6}>
                            <div className="footer-info">
                                <div className="footer-info__follow-us">
                                    <h5>FOLLOW US: </h5>
                                    <SocialMedia />
                                </div>
                                <h5>Newsletter</h5>
                                <p>Subscribe to our newsletter to get notification about discount information</p>
                                <input onChange={(e) => setEmail(e.target.value)} type="text" className="form-control mb-3" placeholder="Enter your Email here" />
                                <SimpleBtn onClick={onSubmit} type="submit" variant="danger" style={{width: 'fit-content'}}>
                                    Subscribe
                                    &#8203;
                                        {
                                            isLoading && (
                                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            )
                                        }
                                </SimpleBtn>
                                <div className="pt-3">
                                    <img src={"/images/payment-methods.png"} alt="Deshi BazaarBD"/>
                                </div>
                            </div>
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

export default memo(Footer);
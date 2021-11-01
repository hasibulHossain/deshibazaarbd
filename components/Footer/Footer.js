import React, { useState, memo } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux';

import FooterBottom from './FooterBottom';
import SocialMedia from './SocialMedia';
import SimpleModal from '../master/Modal/SimpleModal';
import SimpleBtn from '../master/SimpleBtn/SimpleBtn';
import { subscribeNewsletter } from './_redux/Action/FooterAction';
const TrackingForm = dynamic(() => import('../Header/TrackingForm'));

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
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-xs-6 ">
                            <div className="footer-info">
                                <h3>Customer Care</h3>
                                <h3>
                                    <Link href="/p/help-center">
                                        <a>Help Center</a>
                                    </Link>
                                </h3>
                                <h3>
                                    <Link href="/p/how-to-buy">
                                        <a>How To Buy</a>
                                    </Link>
                                </h3>
                                <h3>
                                    <Link href="/p/return-and-refund-policy">
                                        <a>Return &amp; Refund Policy </a>
                                    </Link>
                                </h3>
                                <h3>
                                    <Link href="/p/shipping-method">
                                        <a>Payment &amp; Shipping Methods</a>
                                    </Link>
                                </h3>
                                <h3>
                                    <Link href="/p/same-day-delivery">
                                        <a>Same Day Delivery</a>
                                    </Link>
                                </h3>
                                <h3>
                                    <Link href="/p/site-map">
                                        <a>Site Map</a>
                                    </Link>
                                </h3>
                                <h3>
                                    <Link href="/p/faq">
                                        <a>FAQ</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                        <div className="col-md-3 col-xs-6">
                            <div className="footer-info">
                                <h3>Information</h3>
                                <h3>
                                    <Link href="/p/about-us">
                                        <a>About us</a>
                                    </Link>
                                </h3>
                                <h3>
                                    <Link href="/p/career">
                                        <a>Career</a>
                                    </Link>
                                </h3>
                                <h3>
                                    <Link href="/p/affiliate">
                                        <a>Affiliate</a>
                                    </Link>
                                </h3>
                                <h3>
                                    <Link href="/p/wholesale">
                                        <a>Wholesale</a>
                                    </Link>
                                </h3>
                                <h3>
                                    <Link href="/p/contact">
                                        <a>Contact</a>
                                    </Link>
                                </h3>
                                <h3>
                                    <Link href="/p/terms-&-condition">
                                        <a>Terms &amp; Condition</a>
                                    </Link>
                                </h3>
                                <h3>
                                    <Link href="/p/privacy-policy">
                                        <a>Privacy Policy</a>
                                    </Link>
                                </h3>
                                <h3>
                                    <Link href="/p/blog">
                                        <a>Blog</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                        <div className="col-md-2 col-xs-6">
                            <div className="footer-info">
                                <h3>my account</h3>
                                <h3>
                                    <Link href="/profile">
                                        <a>My Account</a>
                                    </Link>
                                </h3>

                                <p className="pointer" onClick={() => handleShow()}>
                                    Order Tracking
                                </p>
                                <div>
                                    <Link href="https://play.google.com/store/apps/details?id=com.deshibazaarbd" passHref={true}>
                                        <a target="_blank">
                                            <img src="/images/google-play-badge.png" alt="google-play-badge" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="footer-info">
                                <div className="footer-info__follow-us">
                                    <h3>FOLLOW US: </h3>
                                    <SocialMedia />
                                </div>
                                <h3>Newsletter</h3>
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
                        </div>
                    </div>
                </div>
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